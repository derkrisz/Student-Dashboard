
const Event = function(title, title_type, title_url, organiser, organiser_email, start_time, end_time, day){
  this.title = title;
  this.title_type = title_type;
  this.title_url = title_url;
  this.organiser = organiser;
  this.organiser_email = organiser_email;
  this.start_time = start_time;
  this.end_time = end_time;
  this.cancelled = false;
  this.timezone = "Europe/London";
  this.day = day;
}

// Event.prototype.seeds = function(){
//   const event1start = new Date(2018, 1, 9, 12 , 0);
//   const event1end = new Date(2018, 1, 9, 13 , 0);
//   const event2start = new Date(2018, 1, 16, 10 , 0);
//   const event2end = new Date(2018, 1, 16, 14 , 0);
//   const event1 = new Event("Float", "Lunch Time Talk", 'https://floatapp.com/', "Emily", 'emily.milne@codeclan.com', event1start, event1end, "Fri");
//   const event2 = new Event("E17", "Speed Networking", 'https://codeclan.com/', "Kim", 'kim.watson@codeclan.com', event2start, event2end, "Fri");
//   const events = [];
//   events.push(event1);
//   events.push(event2);
// }

module.exports = Event;
