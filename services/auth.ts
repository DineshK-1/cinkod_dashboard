import axios from "axios";

export const updateUserAuthToken = (token: string): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      await axios.post(
        "/api/auth/login",
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};
