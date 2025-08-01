/* eslint-disable no-useless-catch */
import AxiosInstance from "./AxiosInstance"

const UserService = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    storeUser: async (data: any) => {
        try {
            const response = await AxiosInstance.post('/user/storegender', data);
            return response;
        } catch (error) {
            throw error;
        }
    },
};

export default UserService;