import { Router } from "express";
import { trailController } from "../controller";

const router: Router = Router();

router.get("/", trailController.getReservationTicket);

export default router;
