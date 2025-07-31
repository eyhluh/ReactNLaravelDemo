/* eslint-disable no-useless-catch */
import AxiosInstance from "./AxiosInstance";


const GenderService = {
    loadGenders: async () => {
        try {
            const response = await AxiosInstance.get('/gender/loadGenders')
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    storeGender: async (data: any) => {
        try {
            const response = await AxiosInstance.post('/gender/storeGender', data);
            return response;
        } catch (error) {
            throw error;
        }
    },
    getGender: async (genderId: string | number) => { 
        try {
            const response = await AxiosInstance.get (`/gender/getGender/${genderId}`)
            return response;
        } catch (error) {
            throw error;
        }
    },
};

export default GenderService; 
