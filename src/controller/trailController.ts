import { Request, Response } from "express";
import { trailService } from "../service";

const getReservationTicket = async (req: Request, res: Response) => {
  const data = await trailService.getReservationTicket();
  return res
    .status(200)
    .json({ status: 200, message: "승차권 정보 조회 성공", data });
};

const getTrailInformationById = async (req: Request, res: Response) => {
  const { trailInformationId } = req.params;

  const data = await trailService.getTrailInformationById(+trailInformationId);
  return res
    .status(200)
    .json({ status: 200, message: "차량 정보 조회 성공", data });
};

const trailController = {
  getReservationTicket,
  getTrailInformationById,
};

export default trailController;
