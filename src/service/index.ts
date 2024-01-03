import axiosInstance from './Axios'

const Service = {
    getProductList: async () => axiosInstance.get<any>(`api/v1/designstyles/`)
  }
  
  export default Service;