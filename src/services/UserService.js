/* eslint-disable import/no-anonymous-default-export */

const BASE_URL = "https://ncculof.azurewebsites.net/api";

class UserService {
  async getUsers() {
    const url = `${BASE_URL}/users`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  async getUserById(id) {
    const url = `${BASE_URL}/users/${id}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching user by id:", error);
    }
  }

  async createUser(user) {
    const url = `${BASE_URL}/users`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }

  async updateUser(id, user) {
    const url = `${BASE_URL}/users/${id}`;
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }

  async deleteUser(id) {
    const url = `${BASE_URL}/users/${id}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }
}

export default new UserService();
