
const Event = function(title, title_type, title_url, organiser, organiser_email, start_time, end_time, total_time, day){
  this.title = title;
  this.title_type = title_type;
  this.title_url = title_url;
  this.organiser = organiser;
  this.organiser_email = organiser_email;
  this.start_time = start_time;
  this.end_time = end_time;
  this.total_time = total_time;
  this.cancelled = false;
  this.timezone = "Europe/London";
  this.day = day;
}

module.exports = Event;
