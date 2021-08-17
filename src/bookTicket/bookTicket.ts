import { BookingSummary, BookTicketRequest, ShowDetails, ShowDetailsWithDate, Error } from "./types";
//@ts-ignore

const getShowDetails = (showDate: string , showDetails: ShowDetails): ShowDetails  => {
   const  {  numOfTickets, showTiming } = showDetails;
   const showInfo: ShowDetailsWithDate={}
    const { totalAvailableSeat, showTime  } = showInfo[showDate][showTiming]
      if(totalAvailableSeat > numOfTickets) {
      return {
         ...showDetails,
           totalAvailableTickets: totalAvailableSeat - numOfTickets,
           showTiming: showTime
          }
   }
}

export const bookShowTicket = (ticketBookingRequest: BookTicketRequest):BookingSummary | Error => {
      const  { showDate, showDetails } = ticketBookingRequest;
      const showInfo = getShowDetails(showDate, showDetails) 
      if(showInfo.totalAvailableTickets > showInfo.numOfTickets) {
         return {showDetails: showInfo , status:'SUCCESS', availableSeats: 100 }
      }
    else {
      return { status: 'FAILED', errorMessage: 'All tickets are sold out !!!'};
    }
}

