import AxiosInstance from "./AxiosInstance";


const GenderService = {
  loadGenders: async () => {
    try {
      const response = await AxiosInstance.get("/gender/loadGenders");
      return response;
    } catch (error) { 
      throw error;
    }
  },
  storeGender: async (data: any) => {
    try {
      const response = await AxiosInstance.post("/gender/storeGender", data);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getGender: async (genderId: string | number) => {
    try {
      const response = await AxiosInstance.get(`/gender/getGender/${genderId}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
  updateGender: async (genderId: string | number, data: any) => {
    try {
      const response = await AxiosInstance.put(
        `/gender/updateGender/${genderId}`,
        data
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
  destroyGender: async (genderId: string | number) => {
    try {
      const response = await AxiosInstance.put(
        `/gender/destroyGender/${genderId}`
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default GenderService; 

