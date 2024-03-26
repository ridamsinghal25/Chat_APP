import axios from "axios";
import handleHttpError from "../utils/ErrorHandling";

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
      if (axios.isAxiosError(error)) {
        handleHttpError(error);
      } else {
        throw new Error(error.message);
      }
    }
  }

  async login({ email, username, password }) {
    try {
      return await axios.post(
        "/api/v1/users/login",
        {
          email,
          password,
          username,
        },
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        handleHttpError(error);
      } else {
        throw new Error(error.message);
      }
    }
  }

  async logout() {
    try {
      return await axios.post("/api/v1/users/logout");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        handleHttpError(error);
      } else {
        throw new Error(error.message);
      }
    }
  }

  async getCurrentUser() {
    try {
      return await axios.get("/api/v1/users/current-user", {
        withCredentials: true,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        handleHttpError(error);
      } else {
        throw new Error(error.message);
      }
    }
    // return null;
  }

  // file handling

  async updateUserAvatar({ file }) {
    try {
      return await axios.patch("/api/v1/users/avatar", { file });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        handleHttpError(error);
      } else {
        throw new Error(error.message);
      }
    }
  }
}

const authService = new AuthService();

export default authService;
