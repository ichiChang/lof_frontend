class FoundService {
  async getFounds() {
    try {
      const response = await fetch(
        "https://ncculof.azurewebsites.net/api/itemtofinds"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    } catch (error) {
      console.error("Error fetching found items:", error);
      throw error;
    }
  }

  async getFoundItemsByType(type) {
    try {
      const response = await fetch(
        `https://ncculof.azurewebsites.net/api/itemtofinds/type/${type}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    } catch (error) {
      console.error("Error searching found items by type:", error);
      throw error;
    }
  }

  async getFoundItemsByPlace(placeName) {
    try {
      const response = await fetch(
        `https://ncculof.azurewebsites.net/api/itemtofinds/place/${placeName}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    } catch (error) {
      console.error("Error searching found items by place:", error);
      throw error;
    }
  }

  async searchFoundItems(searchTerm) {
    try {
      const response = await fetch(
        `https://ncculof.azurewebsites.net/api/itemtofinds/name/${searchTerm}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    } catch (error) {
      console.error("Error searching found items:", error);
      throw error;
    }
  }

  async createFound(foundItem) {
    try {
      const response = await fetch(
        "https://ncculof.azurewebsites.net/api/itemtofinds",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(foundItem),
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

// eslint-disable-next-line import/no-anonymous-default-export
export default new FoundService();
