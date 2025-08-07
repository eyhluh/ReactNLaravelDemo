
import AxiosInstance from "./AxiosInstance"

const AuthService = {
    login: async (data: any) => {
        try {
            const response = await AxiosInstance.post('/auth/login', data)
            return response
        } catch (error) {
            throw error
        }
    },

    logout: async () => {
        try {
            const response = await AxiosInstance.post('/auth/logout')
            return response
        } catch (error) {
            throw error
        }
    },
    me: async () => {
        try {
            const response = await AxiosInstance.get('auth/me')
            return response
        } catch (error) {
            throw error;
        }
    },
};

export default AuthService