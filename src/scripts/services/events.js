import { baseUrl,eventsQuantity } from "../variables.js"
async function getEvents(userNmae) {
    const response = await fetch(` ${baseUrl}${userNmae}/events?per_page=${eventsQuantity}`);
    let responseJson = await response.json();
    responseJson = responseJson.filter((event)=> {
        return event.type == "PushEvent" || event.type ==  "CreateEvent"
    })
    
    
    return responseJson.slice(0,10);
}

export {getEvents}