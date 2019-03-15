import fetch from "node-fetch";
import fs from "fs";

const fetchingData = async () => {
  const res = await fetch("https://picsum.photos/200?random");
  const date = Date.now();
  const dest = fs.createWriteStream(`./image-${date}.png`);
  res.body.pipe(dest);
};

export default fetchingData;
