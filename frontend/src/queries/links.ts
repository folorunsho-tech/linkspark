import axios from "axios";
const server_link = import.meta.env.VITE_SERVER_LINK;
export const getLinks = async () => {
  try {
    const { data } = await axios.get(`${server_link}/api/links`);
    return data?.linkList;
  } catch (e) {
    return e;
  }
};
export const getLinkData = async (id: string) => {
  try {
    const { data } = await axios.get(`${server_link}/api/links/${id}`);
    return data?.link;
  } catch (e) {
    return e;
  }
};
