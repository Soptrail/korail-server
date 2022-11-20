import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getTicketInformation = async (ticketId: number) => {
  const ticket = await prisma.ticketInformation.findUnique({
    where: {
      id: ticketId,
    },
    select: {
      TrainNumber: true,
      StartDate: true,
      content: true,
      Departures: true,
      Arrivals: true,
      StartTime: true,
      LastTime: true,
      TimeTaken: true,
      Station: true,
      CarNumber: true,
      Seat: true,
    },
  });

  return ticket;
};

const ticketService = {
  getTicketInformation,
};

export default ticketService;
