import { Request, Response } from "express";
import { ticketService } from "../service";

const getTicketInformation = async (req: Request, res: Response) => {
  const { ticketId } = req.params;
  const data = await ticketService.getTicketInformation(+ticketId);
  return res
    .status(200)
    .json({ status: 200, message: "예매 정보 조회 성공", data });
};

const trailController = {
  getTicketInformation,
};

export default trailController;
