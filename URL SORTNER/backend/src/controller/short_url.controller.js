import { shortUrlServiceWithoutUser } from "../services/short_url.services.js";
import { getShortUrl } from "../dao/short_url.dao.js";
import { NotFoundError } from "../utils/errorHandler.utils.js";

import asyncWrapper from "../utils/tryCatchWrapper.utils.js";
export const createShortUrl = asyncWrapper(async (req, res, next) => {
  const { url } = req.body;
  const final_url = await shortUrlServiceWithoutUser(url);
  res.json(final_url);
});

export const redirectFromShortUrl = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const urlObj = await getShortUrl(id);

  if (urlObj) {
    res.redirect(urlObj.orignal_url);
  } else {
    throw NotFoundError("Short url not found");
  }
  return;
});
