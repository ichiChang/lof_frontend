/* eslint-disable import/no-anonymous-default-export */
class LostService {
  async getLosts() {
    try {
      const response = await fetch(
        "https://ncculof.azurewebsites.net/api/itemonroads"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    } catch (error) {
      console.error("Error fetching lost items:", error);
      throw error;
    }
  }

  async searchLostItems(searchTerm) {
    try {
      const response = await fetch(
        `https://ncculof.azurewebsites.net/api/itemonroads/name/${searchTerm}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    } catch (error) {
      console.error("Error searching lost items:", error);
      throw error;
    }
  }

  async getLostItemsByType(type) {
    try {
      const response = await fetch(
        `https://ncculof.azurewebsites.net/api/itemonroads/type/${type}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    } catch (error) {
      console.error("Error searching lost items by type:", error);
      throw error;
    }
  }

  async getLostItemsByPlace(placeName) {
    try {
      const response = await fetch(
        `https://ncculof.azurewebsites.net/api/itemonroads/place/${placeName}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    } catch (error) {
      console.error("Error searching lost items by place:", error);
      throw error;
    }
  }

  async createLost(lostItem) {
    try {
      const response = await fetch(
        "https://ncculof.azurewebsites.net/api/itemonroads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(lostItem),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    } catch (error) {
      console.error("Error creating item:", error);
      throw error;
    }
  }
}

export default new LostService();
