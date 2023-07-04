import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", async (req: Request, res: Response) => {
  const makespanSchedule = await createDeliverySchedule();
  res.send(makespanSchedule);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

import dummyDeliveries from "./src/dummyData/dummyDeliveries";
import scheduleDeliveries from "./src/utils/scheduleDeliveries";

function createDeliverySchedule() {
  return new Promise(async (resolve, reject) => {
    try {
      const schedule = await scheduleDeliveries(dummyDeliveries);
      resolve(schedule);
    } catch (err) {
      reject(err);
    }
  });
}

createDeliverySchedule();
