import {
  createContext,
  useContext,
  useEffect,
  useState,
  type FC,
  type ReactNode,
} from "react";
import type { UserDetails } from "../Interfaces/AuthInterface";
import AuthService from "../services/AuthService";

interface AuthContextType {
  user: UserDetails | null;
  loading: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState(true);

  const login = async (username: string, password: string) => {
    try {
      const res = await AuthService.login({ username, password });

      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        setUser(res.data);
      } else {
        console.error(
          "Unexpected status error occured during logging user in: ",
          res.status
        );
      }
    } catch (error) {
      console.error(
        "Unexpected server error occured during logging user in: ",
        error
      );
      throw error;
    }
  };

  const logout = async () => {
    try {
      const res = await AuthService.logout();

      if (res.status === 200) {
        localStorage.removeItem("token");
        setUser(null);
      } else {
        console.error(
          "Unexpected status error occured during logging user out: ",
          res.status
        );
      }
    } catch (error) {
      console.error(
        "Unexpected server error occured during logging user out: ",
        error
      );
      throw error;
    } finally {
      localStorage.removeItem("token"); // added finally and remove token here
      setUser(null);
    }
  };

  const checkAuth = async () => {
    setLoading(true);

    const token = localStorage.getItem("token");

    if (token) {
      try {
        const res = await AuthService.me();

        if (res.status === 200) {
          setUser(res.data);
        } else {
          localStorage.removeItem("token");
          setUser(null);

          console.error(
            "Unexpected status error occured during checking authentication: ",
            res.status
          );
        }
      } catch (error) {
        localStorage.removeItem("token");
        setUser(null);

        console.error(
          "Unexpected server error occured during checking authentication: ",
          error
        );
      }

      setLoading(false);
    } else {
      setUser(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext value={{ user, loading, login, logout }}>
      {children}
    </AuthContext>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be use within an AuthProvider ");
  }

  return context;
};
