import { links, linkList } from "../static/links.js";
export const getLinks = (req, res) => {
  res.json({ linkList });
};
export const getSingleLink = (req, res) => {
  const link = links.find((link) => link.id === req.params.id);
  res.json({ link });
};
