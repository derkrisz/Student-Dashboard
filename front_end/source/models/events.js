const Event = require('./event.js');

const Events = function(){
  this.events = [];
};

Events.prototype.populate = function () {
  // const event1start = new Date(2018, 1, 9, 12 , 0);
  // const event1end = new Date(2018, 1, 9, 13 , 0);

  // const event2start = new Date(2018, 1, 16, 10 , 0);
  // const event2end = new Date(2018, 1, 16, 14 , 0);
  //
  // const event3start = new Date(2018, 1, 21, 18 , 0);
  // const event3end = new Date(2018, 1, 21, 20 , 30);

  // const event4start = new Date(2018, 2, 01, 12 , 30);
  // const event4end = new Date(2018, 2, 01, 13 , 0);
  //
  // const event5start = new Date(2018, 2, 02, 16 , 0);
  // const event5end = new Date(2018, 2, 02, 17 , 0);

  // const event1 = new Event("Float", "Lunch Time Talk", 'https://floatapp.com/', "Emily", 'mailto:emily.milne@codeclan.com', event1start, event1end, "12:00 - 13:00" , "Fri, 9 Feb");

  // const event2 = new Event("E17", "Speed Networking", 'https://codeclan.com/employers/partners/', "Kim", 'mailto:kim.watson@codeclan.com', event2start, event2end, "10.00 - 14.30" ,"Fri, 16 Feb");

  // const event3 = new Event("Edinburgh", "Codebar", 'https://codebar.io/edinburgh', "Emily", 'mailto:emily.milne@codeclan.com', event3start, event3end, "18.00 - 20.30" ,"Wed, 21 Feb");
 //
 //  const event4 = new Event("Symphonic", "Lunch Time Talk",
 // 'http://www.symphonicsoft.com/', "Emily", 'mailto:emily.milne@codeclan.com', event4start, event4end, "12.30 - 13.00" ,"Thur, 01 Mar");

  // const event5 = new Event("E17", "Graduation", 'https://www.youtube.com/watch?v=HEXWRTEbj1I', "Melinda", 'mailto:melinda.matthews@codeclan.com', event5start, event5end, "16.00 - 17.00" ,"Fri, 02 Mar");

  this.events.push(event1);
  this.events.push(event2);
  this.events.push(event3);
  this.events.push(event4);
  this.events.push(event5);
};


module.exports = Events;
