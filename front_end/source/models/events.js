const Event = require('./event.js');

const Events = function(){
  this.events = [];
};

Events.prototype.populate = function () {
  const event1start = new Date(2018, 1, 9, 12 , 0);
  const event1end = new Date(2018, 1, 9, 13 , 0);
  const event2start = new Date(2018, 1, 16, 10 , 0);
  const event2end = new Date(2018, 1, 16, 14 , 0);
  const event1 = new Event("Float", "Lunch Time Talk", 'https://floatapp.com/', "Emily", 'mailto:emily.milne@codeclan.com', event1start, event1end, "12:00 - 13:00" , "Fri, 9 Feb");
  const event2 = new Event("E17", "Speed Networking", 'https://codeclan.com/employers/partners/', "Kim", 'mailto:kim.watson@codeclan.com', event2start, event2end, "10.00 - 14.30" ,"Fri, 16 Feb");
  this.events.push(event1);
  this.events.push(event2);
};


module.exports = Events;
