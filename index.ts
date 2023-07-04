import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  const makespan = totalDeliveryTime();
  res.send(makespan);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

import dummyDeliveries from "./src/dummyData/dummyDeliveries";
import { dummyPlanes, dummyTrucks } from "./src/dummyData/dummyVehicles";
import assignDeliveries from "./src/utils/assignDeliveries";

function totalDeliveryTime() {
  return new Promise(async (resolve, reject) => {
    try {
      const makespan = await assignDeliveries(
        dummyDeliveries,
        dummyTrucks,
        dummyPlanes
      );
      console.log("*****: Makespan:", makespan, " Hours");
      resolve(makespan);
    } catch (err) {
      reject(err);
    }
  });
}
totalDeliveryTime();
