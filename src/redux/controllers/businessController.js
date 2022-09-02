import api from "./http";

class BusinessController {
  static async getBusinessCategories() {
    try {
      const response = await api.get(
        `/v1/web/business/data/24/menu/2022-08-26/categories`
      );
      return response.data.data;
    } catch (err) {
      throw err;
    }
  }

  static async getBusinessByParam() {
    try {
      const response = await api.get(
        `v1/web/business/data/24/menu/2022-08-26/elements/15`
      );
      return response.data.data;
    } catch (err) {
      throw err;
    }
  }

  static async getBusiness() {
    try {
      const response = await api.get(
        `/v1/web/business/data/cevicheria_ejemplo/information`
      );
      return response.data.data;
    } catch (err) {
      throw err;
    }
  }

  static async putBusiness(payload) {
    try {
      const response = await api.put(
        `/business/${payload.businessId}`,
        payload
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async deleteBusiness(payload) {
    try {
      const response = await api.delete(`/business/${payload.businessId}`);
      return response.data;
    } catch (err) {
      throw err;
    }
  }
}

export default BusinessController;
