import { Router } from "express";
import { ticketController } from "../controller";

const router: Router = Router();

router.get("/:ticketId", ticketController.getTicketInformation);

export default router;
