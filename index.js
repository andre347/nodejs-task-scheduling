import cron from "node-cron";
import fetchingData from "./fetch";

cron.schedule("0 18 * * *", () => {
  console.log(`one minute passed, image downloaded`);
  fetchingData();
});
