import { Router } from "express";
import { trailController } from "../controller";

const router: Router = Router();

router.get("/", trailController.getReservationTicket);
router.get("/:trailInformationId", trailController.getTrailInformationById);

export default router;
