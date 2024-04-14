import axios from "axios";

const FOUND_REST_API_URL = "https://ncculof.azurewebsites.net/api/itemtofinds";

class FoundService {
  async getFounds() {
    try {
      const response = await axios.get(FOUND_REST_API_URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching found items:", error);
      throw error;
    }
  }
  async getFoundItemsByType(type) {
    try {
      const response = await axios.get(`${FOUND_REST_API_URL}/type/${type}`);
      return response.data;
    } catch (error) {
      console.error("Error searching found items by type:", error);
      throw error;
    }
  }

  async getFoundItemsByPlace(placeName) {
    try {
      const response = await axios.get(
        `${FOUND_REST_API_URL}/place/${placeName}`
      );
      return response.data;
    } catch (error) {
      console.error("Error searching found items by type:", error);
      throw error;
    }
  }

  async searchFoundItems(searchTerm) {
    try {
      const response = await axios.get(
        `${FOUND_REST_API_URL}/name/${searchTerm}`
      );
      return response.data;
    } catch (error) {
      console.error("Error searching found items:", error);
      throw error;
    }
  }

  async createFound(foundItem) {
    try {
      const response = await axios.post(FOUND_REST_API_URL, foundItem, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error creating item:", error);
      throw error;
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new FoundService();
