import { generateNanoId } from "../utils/helper.utils.js";
import { safe_short_url } from "../dao/short_url.dao.js";

export const shortUrlServiceWithUser = async (url, user) => {
  const shorturl_id = generateNanoId(8);
  const urlObj = await safe_short_url(url, shorturl_id, user);
  return urlObj;
};
export const shortUrlServiceWithoutUser = async (url) => {
  const shorturl_id = generateNanoId(8);
  const urlObj = await safe_short_url(url, shorturl_id);
  return urlObj;
};
