const Event = require('./event.js');



const event1start = new Date(2018, 1, 9, 12 , 0);
const event1end = new Date(2018, 1, 9, 13 , 0);
const event2start = new Date(2018, 1, 16, 10 , 0);
const event2end = new Date(2018, 1, 16, 14 , 0);


const event1 = new Event("Float", "Lunch Time Talk", 'https://floatapp.com/', "Emily", 'emily.milne@codeclan.com', event1start, event1end, "Fri");

const event2 = new Event("E17", "Speed Networking", 'https://codeclan.com/', "Kim", 'kim.watson@codeclan.com', event2start, event2end, "Fri");

const events = [];
events.push(event1);
events.push(event2);

module.exports = events;
