import { Show } from "../bookTicket/types";

export const SHOW_TIMING_WITH_AVAILABLE_SEATS : Record<string, Show> = {
    MORNING: { 
       showTime:  '9 TO 12', 
       totalAvailableSeat: 100
    },
    AFTERNOON: {
       showTime: '1 TO 3',
       totalAvailableSeat: 100
    },
    EVENING: {
       showTime: '4 TO 6', 
       totalAvailableSeat: 100
    },
    NIGHT: {
       showTime: '10 TO 1',
       totalAvailableSeat: 100
    }
 }