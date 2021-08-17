import { SHOW_TIMING_WITH_AVAILABLE_SEATS } from "../constants/constants";

export type BookTicketRequest  = {
   bookingId : number
   userName: string,
   showDate: string
   showDetails: ShowDetails
}
export interface BookingSummary {
   showDetails: ShowDetails
   availableSeats: number,
   status: string,
}

export interface Error {
   errorMessage: string
   status: string,
}

export type ShowDetails  = {
   movieName: string;
   numOfTickets: number
   totalAvailableTickets: number
   showTiming: string
}

export type Show = {
   showTime: string; 
   totalAvailableSeat: number;
 }
 
export type ShowDetailsWithDate = {[date in string]: typeof SHOW_TIMING_WITH_AVAILABLE_SEATS} 
