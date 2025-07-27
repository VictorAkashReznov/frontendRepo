import { shortUrlServiceWithoutUser } from "../services/short_url.services.js";
import { getShortUrl } from "../dao/short_url.dao.js";
export const createShortUrl = async (req, res) => {
  const { url } = req.body;
  const final_url = await shortUrlServiceWithoutUser(url);
  res.json(final_url);
};

export const redirectFromShortUrl = async (req, res) => {
  const { id } = req.params;
  const urlObj = await getShortUrl(id);

  if (urlObj) {
    res.redirect(urlObj.orignal_url);
  } else {
    res.send("wrong short url");
  }
  return;
};
