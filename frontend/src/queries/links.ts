import axios from "axios";

export const getLinks = async () => {
  try {
    const { data } = await axios.get("/api/links");
    return data;
  } catch (e) {
    return e;
  }
};
export const getLinkData = async (id: string) => {
  try {
    const { data } = await axios.get(`/api/links/${id}`);
    return data;
  } catch (e) {
    return e;
  }
};
