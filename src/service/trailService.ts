import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getReservationTicket = async () => {
  const ticket = await prisma.reservation_ticket.findMany();
  return ticket;
};
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

const getTrailInformationById = async (trailInformationId: number) => {
  const trail = await prisma.trailInformation.findUnique({
    where: {
      trailInformationId: trailInformationId,
    },
    select: {
      Departures: true,
      Arrivals: true,
      StartDate: true,
      TrainInformation: {
        select: {
          TrainName: true,
          StartTime: true,
          LastTime: true,
          NormalPrice: true,
          SpecialPrice: true,
        },
      },
    },
  });
  return trail;
};

const trailService = {
  getReservationTicket,
  getTicketInformation,
  getTrailInformationById,
};

export default trailService;
