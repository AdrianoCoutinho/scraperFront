import axios from "axios";

axios.defaults.baseURL = "http://localhost:3333";

export const getVideos = async (): Promise<any> => {
  try {
    const result = await axios.get("/tiktok");
    return result.data.data;
  } catch (error: any) {
    return {
      ok: false,
      message: error.toString(),
    };
  }
};
