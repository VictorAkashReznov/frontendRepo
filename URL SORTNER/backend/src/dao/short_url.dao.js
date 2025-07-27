// data object access
import shortUrl from "../models/shorturl.model.js";

export const safe_short_url = async (orignal_url, short_url, User) => {
  let urlObj = new shortUrl({
    orignal_url: orignal_url,
    short_url: short_url,
  });

  if (User) {
    urlObj.user = User;
  }
  return await urlObj.save();
};

export const getShortUrl = async (id) => {
  const url = await shortUrl.findOneAndUpdate(
    {
      short_url: id,
    },
    { $inc: { clicks: 1 } }
  );
  //   console.log(url);
  return url;
};
