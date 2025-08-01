import AxiosInstance from "./AxiosInstance";

const UserService = {
    storeUser: async (data: any) => {
        try {
            const response = await AxiosInstance.post('/user/storeUser', data);
            return response;
        }   catch (error) {
            throw error;
        }
    },
};

export default UserService;