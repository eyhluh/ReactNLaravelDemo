import {
  createContext,
  useContext,
  useState,
  type FC,
  type ReactNode,
} from "react";

type SidebarContextType = {
  isExpanded: boolean;
  isMobileOpen: boolean;
  activeItem: string | null;
  openSubMenu: string | null;
  toggleSidebar: () => void;
  toggleMobileSidebar: () => void;
  setActiveItem: (item: string | null) => void;
  toggleSubMenu: (item: string) => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }

  return context;
};

export const SidebarProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const toggleSidebar = () => {
    // setIsExpanded(!isExpanded)
    setIsExpanded((prev) => !prev);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen((prev) => !prev);
  };

  const toggleSubMenu = (item: string) => {
    setOpenSubMenu((prev) => (prev === item ? null : item));
  };

  return (
    <SidebarContext.Provider
      value={{
        isExpanded,
        isMobileOpen,
        activeItem,
        openSubMenu,
        toggleSidebar,
        toggleMobileSidebar,
        setActiveItem,
        toggleSubMenu,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
