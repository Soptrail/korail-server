import { Router } from "express";
import trailRouter from "./trailRouter";
import ticketRouter from "./ticketRouter";

const router: Router = Router();

router.use("/trail", trailRouter);
router.use("/ticket", ticketRouter);

export default router;
