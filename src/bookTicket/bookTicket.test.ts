import { SHOW_TIMING_WITH_AVAILABLE_SEATS } from "../constants/constants";
import bookShowTicket from "./index";
import { BookingSummary, BookTicketRequest } from "./types";
describe("bookMovieTicket Test", () => {
    const bookingRequest: BookTicketRequest = {
        bookingId : 1,
        userName: 'Vaibhavee Shinde',
        showDate:  '12/12/2021',
        showDetails: {
            numOfTickets: 101,
            showTiming: 'MORNING',
            movieName: 'Wolf',
            totalAvailableTickets: 100
        }
    }
    it("should return error message and status when available tickets are less than number of requested tickets", () => {
        const expectedError = {status: 'FAILED', errorMessage: 'All tickets are sold out !!!'}      
        expect(bookShowTicket(bookingRequest)).toEqual(expectedError);        
    }); 

    it("should return booking details on successful completion of ticket booking", () => {
     const expectedBookingSummary: BookingSummary = {
        availableSeats: 100,
        status : 'SUCCESS',
        showDetails: {
            numOfTickets: 101,
            showTiming: 'NIGHT',
            movieName: 'abc',
            totalAvailableTickets: 100
        },
    }                    
        expect(bookShowTicket(bookingRequest)).toEqual(expectedBookingSummary);
    }); 
})
