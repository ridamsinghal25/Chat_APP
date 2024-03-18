import axios from "axios";

class AuthService {
  async createAccount({ email, password, username }) {
    try {
      const userAccount = await axios.post("/api/v1/users/register", {
        email,
        password,
        username,
      });

      if (userAccount) {
        return this.login({ email, password });
      }
    } catch (error) {
      console.log("Error Occured while creating user Account: ", error);
      throw new Error(
        error.response.data?.message || error.response?.statusText
      );
    }
  }

  async login({ email, password }) {
    try {
      return await axios.post("/api/v1/users/login", {
        email,
        password,
      });
    } catch (error) {
      console.log("Error Occured while login user Account: ", error);
      throw new Error(
        error.response.data?.message || error.response?.statusText
      );
    }
  }

  async logout() {
    try {
      return await axios.post("/api/v1/users/logout");
    } catch (error) {
      console.log("Error Occured while logout user Account: ", error);
      throw new Error(
        error.response.data?.message || error.response?.statusText
      );
    }
  }

  async getCurrentUser() {
    try {
      return await axios.get("/api/v1/users/current-user");
    } catch (error) {
      console.log("Error Occured getting user data: ", error);
      throw new Error(
        error.response.data?.message || error.response?.statusText
      );
    }
    // return null;
  }

  // file handling

  async updateUserAvatar({ file }) {
    try {
      return await axios.patch("/api/v1/users/avatar", { file });
    } catch (error) {
      console.log("Error Occured updating user avatar: ", error);
      throw new Error(
        error.response.data?.message || error.response?.statusText
      );
    }
  }
}

const authService = new AuthService();

export default authService;
