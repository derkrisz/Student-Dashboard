const DisplayEvents = function(){

}


DisplayEvents.prototype.render = function (info) {
const target = document.querySelector('.techinfo');
target.innerText = "";


  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const li4 = document.createElement('li');
  const li5 = document.createElement('li');
  li1.innerText = info.data[0].start.displaylocal + " " + info.data[0].summaryDisplay + "\n" + info.data[0].siteurl;
  li2.innerText = info.data[1].start.displaylocal + " " + info.data[1].summaryDisplay + "\n" + info.data[1].siteurl;
  li3.innerText = info.data[2].start.displaylocal + " " + info.data[2].summaryDisplay + "\n" + info.data[2].siteurl;
  li4.innerText = info.data[3].start.displaylocal + " " + info.data[3].summaryDisplay + "\n" + info.data[3].siteurl;
  li5.innerText = info.data[4].start.displaylocal + " " + info.data[4].summaryDisplay + "\n" + info.data[4].siteurl;

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  ul.appendChild(li5);
  target.appendChild(ul);

};

module.exports = DisplayEvents;



//
//
// var events ={
//   slug: 5886,
//   slugforurl: "5886-mini-c-edinburgh",
//   summary: "C++ Edinburgh Social",
//   summaryDisplay: "C++ Edinburgh Social",
//   description: "Join us at the Beehive Inn to chat about all things C++ and get to know Edinburgh's C++ developer community. We will of course have our usual fun with a C++ quiz, so please free free to take part!\n \nThere won't be any talks at this event - for that, please come along to our next meet-up! \n \n As with all of our events, C++ Edinburgh aims to be a friendly and open environment for everyone. Please check out our Code of Conduct (http://cppedinburgh.uk/code-of-conduct.html) and if you have any questions, please do not hesitate to get in touch with us here, on Twitter (https://twitter.com/cppedinburgh), or at [masked]. We are also happy to provide contact details if you would like to message us when you arrive at the event.\n  \n Of course, don't forget to invite your friends and colleagues along! Hope to see you there!",
//   deleted: false,
//   cancelled: false,
//   is_physical: true,
//   is_virtual: false,
//   custom_fields: {
//     code_of_conduct: null
//   },
//   siteurl: "https://opentechcalendar.co.uk/event/5886-mini-c-edinburgh",
//   url: "https://www.meetup.com/cppedinburgh/events/237859532/",
//   ticket_url: "https://www.meetup.com/cppedinburgh/events/237859532/",
//   timezone: "Europe/London",
//   start: {
//     timestamp: 1518462000,
//     rfc2882utc: "Mon, 12 Feb 2018 19:00:00 +0000",
//     rfc2882local: "Mon, 12 Feb 2018 19:00:00 +0000",
//     displaylocal: "Mon 12 Feb 2018 07:00pm",
//     yearlocal: "2018",
//     monthlocal: "2",
//     daylocal: "12",
//     hourlocal: "19",
//     minutelocal: "00",
//     rfc2882timezone: "Mon, 12 Feb 2018 19:00:00 +0000",
//     displaytimezone: "Mon 12 Feb 2018 07:00pm",
//     yeartimezone: "2018",
//     monthtimezone: "2",
//     daytimezone: "12",
//     hourtimezone: "19",
//     minutetimezone: "00"
//   },
//   end: {
//     timestamp: 1518469200,
//     rfc2882utc: "Mon, 12 Feb 2018 21:00:00 +0000",
//     rfc2882local: "Mon, 12 Feb 2018 21:00:00 +0000",
//     displaylocal: "Mon 12 Feb 2018 09:00pm",
//     yearlocal: "2018",
//     monthlocal: "2",
//     daylocal: "12",
//     hourlocal: "21",
//     minutelocal: "00",
//     rfc2882timezone: "Mon, 12 Feb 2018 21:00:00 +0000",
//     displaytimezone: "Mon 12 Feb 2018 09:00pm",
//     yeartimezone: "2018",
//     monthtimezone: "2",
//     daytimezone: "12",
//     hourtimezone: "21",
//     minutetimezone: "00"
//   },
//   areas: [
//     {
//       slug: 62,
//       title: "Edinburgh"
//     }
//   ],
//   country: {
//     title: "United Kingdom"
//   }
// },
// {
//   slug: 6192,
//   slugforurl: "6192-open-night",
//   summary: "Open Night",
//   summaryDisplay: "Edinburgh Hacklab: Open Night",
//   description: "One of our regular drop in open nights, no need to call ahead, just turn up! We'll be tinkering with hardware, hacking some code and probably eating. Feel free to come along with a project or idea for some help, use some tools, or just hang out.",
//   deleted: false,
//   cancelled: false,
//   is_physical: true,
//   is_virtual: false,
//   custom_fields: {
//     code_of_conduct: null
//   },
//   siteurl: "https://opentechcalendar.co.uk/event/6192-open-night",
//   url: "https://opentechcalendar.co.uk/event/6192-open-night",
//   ticket_url: null,
//   timezone: "Europe/London",
//   start: {
//     timestamp: 1518548400,
//     rfc2882utc: "Tue, 13 Feb 2018 19:00:00 +0000",
//     rfc2882local: "Tue, 13 Feb 2018 19:00:00 +0000",
//     displaylocal: "Tue 13 Feb 2018 07:00pm",
//     yearlocal: "2018",
//     monthlocal: "2",
//     daylocal: "13",
//     hourlocal: "19",
//     minutelocal: "00",
//     rfc2882timezone: "Tue, 13 Feb 2018 19:00:00 +0000",
//     displaytimezone: "Tue 13 Feb 2018 07:00pm",
//     yeartimezone: "2018",
//     monthtimezone: "2",
//     daytimezone: "13",
//     hourtimezone: "19",
//     minutetimezone: "00"
//   },
//   end: {
//     timestamp: 1518562800,
//     rfc2882utc: "Tue, 13 Feb 2018 23:00:00 +0000",
//     rfc2882local: "Tue, 13 Feb 2018 23:00:00 +0000",
//     displaylocal: "Tue 13 Feb 2018 11:00pm",
//     yearlocal: "2018",
//     monthlocal: "2",
//     daylocal: "13",
//     hourlocal: "23",
//     minutelocal: "00",
//     rfc2882timezone: "Tue, 13 Feb 2018 23:00:00 +0000",
//     displaytimezone: "Tue 13 Feb 2018 11:00pm",
//     yeartimezone: "2018",
//     monthtimezone: "2",
//     daytimezone: "13",
//     hourtimezone: "23",
//     minutetimezone: "00"
//   },
//   venue: {
//     slug: 21,
//     title: "Edinburgh Hacklab",
//     description: "Edinburgh's finest hackerspace! We're located at Summerhall (the old Dick Vet school), come through the main building into the courtyard and we're the ones with the flashing lights on the right.\n\n1 Summerhall, Edinbugh, EH9 1PL",
//     address: "1 Summerhall\nEdinbugh",
//     addresscode: "EH9 1PL",
//     lat: "55.9398",
//     lng: "-3.18163"
//   },
//   areas: [
//     {
//       slug: 62,
//       title: "Edinburgh"
//     }
//   ],
//   country: {
//     title: "United Kingdom"
//   }
// },
// {
//   slug: 6229,
//   slugforurl: "6229-codebase-unfiltered",
//   summary: "CodeBase Unfiltered",
//   summaryDisplay: "CodeBase Edinburgh: CodeBase Unfiltered",
//   description: "Join us for CodeBase Unfiltered, our caffeine(or decaf) fuelled regular meeting of the minds, for techies & non-techies alike.",
//   deleted: false,
//   cancelled: false,
//   is_physical: true,
//   is_virtual: false,
//   custom_fields: {
//     code_of_conduct: null
//   },
//   siteurl: "https://opentechcalendar.co.uk/event/6229-codebase-unfiltered",
//   url: "https://opentechcalendar.co.uk/event/6229-codebase-unfiltered",
//   ticket_url: "https://www.eventbrite.co.uk/e/unfiltered-codebase-coffee-morning-feb-tickets-41760208909",
//   timezone: "Europe/London",
//   start: {
//     timestamp: 1518597000,
//     rfc2882utc: "Wed, 14 Feb 2018 08:30:00 +0000",
//     rfc2882local: "Wed, 14 Feb 2018 08:30:00 +0000",
//     displaylocal: "Wed 14 Feb 2018 08:30am",
//     yearlocal: "2018",
//     monthlocal: "2",
//     daylocal: "14",
//     hourlocal: "8",
//     minutelocal: "30",
//     rfc2882timezone: "Wed, 14 Feb 2018 08:30:00 +0000",
//     displaytimezone: "Wed 14 Feb 2018 08:30am",
//     yeartimezone: "2018",
//     monthtimezone: "2",
//     daytimezone: "14",
//     hourtimezone: "8",
//     minutetimezone: "30"
//   },
//
//   end: {
//     timestamp: 1518604200,
//     rfc2882utc: "Wed, 14 Feb 2018 10:30:00 +0000",
//     rfc2882local: "Wed, 14 Feb 2018 10:30:00 +0000",
//     displaylocal: "Wed 14 Feb 2018 10:30am",
//     yearlocal: "2018",
//     monthlocal: "2",
//     daylocal: "14",
//     hourlocal: "10",
//     minutelocal: "30",
//     rfc2882timezone: "Wed, 14 Feb 2018 10:30:00 +0000",
//     displaytimezone: "Wed 14 Feb 2018 10:30am",
//     yeartimezone: "2018",
//     monthtimezone: "2",
//     daytimezone: "14",
//     hourtimezone: "10",
//     minutetimezone: "30"
//   },
//   venue: {
//     slug: 307,
//     title: "CodeBase",
//     description: "Edinburgh's tech incubator. Home to 80 of the UK's best startups and a spacious Events Space. Find out more at http://www.thisiscodebase.com/",
//     address: "Argyle House, 38 Castle Terrace, Edinburgh",
//     addresscode: "EH3 9DR",
//     lat: "55.9465",
//     lng: "-3.20096"
//   },
//   areas: [
//     {
//       slug: 62,
//       title: "Edinburgh"
//     }
//   ],
//   country: {
//     title: "United Kingdom"
//   }
// },
//
// {
//   slug: 6134,
//   slugforurl: "6134-techmeetup-edinburgh",
//   summary: "TechMeetup Edinburgh",
//   summaryDisplay: "TechMeetup Edinburgh",
//   description: "Welcoming anyone involved or working in technology.\n\n TechMeetup is a monthly excuse for developers and the tech community around Scotland to meet up and learn new stuff from each other. No name badges, no sales pitches, just informative presentations from your peers and a chance to meet some of the tech community around you. \n\nWe're not centred around specific languages, technologies or disciplines; we believe there's stuff to learn from mixing everyone together. There's no cost to attend, and food and drink are provided.",
//   deleted: false,
//   cancelled: false,
//   is_physical: true,
//   is_virtual: false,
//   custom_fields: {
//     code_of_conduct: "https://github.com/techmeetup/edinburgh/blob/master/CodeOfConduct.md"
//   },
//   siteurl: "https://opentechcalendar.co.uk/event/6134-techmeetup-edinburgh",
//   url: "https://opentechcalendar.co.uk/event/6134-techmeetup-edinburgh",
//   ticket_url: null,
//   timezone: "Europe/London",
//   start: {
//     timestamp: 1518633000,
//     rfc2882utc: "Wed, 14 Feb 2018 18:30:00 +0000",
//     rfc2882local: "Wed, 14 Feb 2018 18:30:00 +0000",
//     displaylocal: "Wed 14 Feb 2018 06:30pm",
//     yearlocal: "2018",
//     monthlocal: "2",
//     daylocal: "14",
//     hourlocal: "18",
//     minutelocal: "30",
//     rfc2882timezone: "Wed, 14 Feb 2018 18:30:00 +0000",
//     displaytimezone: "Wed 14 Feb 2018 06:30pm",
//     yeartimezone: "2018",
//     monthtimezone: "2",
//     daytimezone: "14",
//     hourtimezone: "18",
//     minutetimezone: "30"
//   },
//   end: {
//     timestamp: 1518642000,
//     rfc2882utc: "Wed, 14 Feb 2018 21:00:00 +0000",
//     rfc2882local: "Wed, 14 Feb 2018 21:00:00 +0000",
//     displaylocal: "Wed 14 Feb 2018 09:00pm",
//     yearlocal: "2018",
//     monthlocal: "2",
//     daylocal: "14",
//     hourlocal: "21",
//     minutelocal: "00",
//     rfc2882timezone: "Wed, 14 Feb 2018 21:00:00 +0000",
//     displaytimezone: "Wed 14 Feb 2018 09:00pm",
//     yeartimezone: "2018",
//     monthtimezone: "2",
//     daytimezone: "14",
//     hourtimezone: "21",
//     minutetimezone: "00"
//   },
//   venue: {
//     slug: 72,
//     title: "Skyscanner HQ",
//     description: null,
//     address: "Quartermile One 15 Lauriston Place Edinburgh",
//     addresscode: "EH3 9EN",
//     lat: "55.9445",
//     lng: "-3.19458"
//   },
//   areas: [
//     {
//       slug: 62,
//       title: "Edinburgh"
//     }
//   ],
//   country: {
//     title: "United Kingdom"
//   }
// },
// {
//   slug: 6349,
//   slugforurl: "6349-product-up-meetup-3",
//   summary: "Product Up Meetup #3",
//   summaryDisplay: "ProductUp: Product Up Meetup #3",
//   description: "For details, click here: https://www.eventbrite.co.uk/e/product-up-meetup-3-tickets-42321256016",
//   deleted: false,
//   cancelled: false,
//   is_physical: true,
//   is_virtual: false,
//   custom_fields: {
//     code_of_conduct: null
//   },
//   siteurl: "https://opentechcalendar.co.uk/event/6349-product-up-meetup-3",
//   url: "https://www.eventbrite.co.uk/e/product-up-meetup-3-tickets-42321256016",
//   ticket_url: "https://www.eventbrite.co.uk/e/product-up-meetup-3-tickets-42321256016",
//   timezone: "Europe/London",
//   start: {
//     timestamp: 1518717600,
//     rfc2882utc: "Thu, 15 Feb 2018 18:00:00 +0000",
//     rfc2882local: "Thu, 15 Feb 2018 18:00:00 +0000",
//     displaylocal: "Thu 15 Feb 2018 06:00pm",
//     yearlocal: "2018",
//     monthlocal: "2",
//     daylocal: "15",
//     hourlocal: "18",
//     minutelocal: "00",
//     rfc2882timezone: "Thu, 15 Feb 2018 18:00:00 +0000",
//     displaytimezone: "Thu 15 Feb 2018 06:00pm",
//     yeartimezone: "2018",
//     monthtimezone: "2",
//     daytimezone: "15",
//     hourtimezone: "18",
//     minutetimezone: "00"
//   },
//   end: {
//     timestamp: 1518728400,
//     rfc2882utc: "Thu, 15 Feb 2018 21:00:00 +0000",
//     rfc2882local: "Thu, 15 Feb 2018 21:00:00 +0000",
//     displaylocal: "Thu 15 Feb 2018 09:00pm",
//     yearlocal: "2018",
//     monthlocal: "2",
//     daylocal: "15",
//     hourlocal: "21",
//     minutelocal: "00",
//     rfc2882timezone: "Thu, 15 Feb 2018 21:00:00 +0000",
//     displaytimezone: "Thu 15 Feb 2018 09:00pm",
//     yeartimezone: "2018",
//     monthtimezone: "2",
//     daytimezone: "15",
//     hourtimezone: "21",
//     minutetimezone: "00"
//   },
//   areas: [
//     {
//       slug: 62,
//       title: "Edinburgh"
//     }
//   ],
//   country: {
//     title: "United Kingdom"
//   }
// },
// {
//   slug: 6346,
//   slugforurl: "6346-how-to-grow-your-digital-business-for-investment",
//   summary: "How To Grow Your Digital Business For Investment",
//   summaryDisplay: "Girl Geek Scotland: How To Grow Your Digital Business For Investment",
//   description: "",
//
//
//   custom_fields: {
//     code_of_conduct: "GGS Event Policies\n\nPlease refer to our Anti-Harassment Policy and Event Photography / Videography Policy as set out on our website. Your acceptance of which is assumed should you register to attend one of our events."
//   },
//   siteurl: "https://opentechcalendar.co.uk/event/6346-how-to-grow-your-digital-business-for-investment",
//   url: "https://www.eventbrite.co.uk/e/how-to-grow-your-digital-business-for-investment-tickets-42037050951",
//   ticket_url: "https://www.eventbrite.co.uk/e/how-to-grow-your-digital-business-for-investment-tickets-42037050951",
//   timezone: "Europe/London",
//   start: {
//     timestamp: 1518719400,
//     rfc2882utc: "Thu, 15 Feb 2018 18:30:00 +0000",
//     rfc2882local: "Thu, 15 Feb 2018 18:30:00 +0000",
//     displaylocal: "Thu 15 Feb 2018 06:30pm",
//     yearlocal: "2018",
//     monthlocal: "2",
//     daylocal: "15",
//     hourlocal: "18",
//     minutelocal: "30",
//     rfc2882timezone: "Thu, 15 Feb 2018 18:30:00 +0000",
//     displaytimezone: "Thu 15 Feb 2018 06:30pm",
//     yeartimezone: "2018",
//     monthtimezone: "2",
//     daytimezone: "15",
//     hourtimezone: "18",
//     minutetimezone: "30"
//   },
//   end: {
//     timestamp: 1518730200,
//     rfc2882utc: "Thu, 15 Feb 2018 21:30:00 +0000",
//     rfc2882local: "Thu, 15 Feb 2018 21:30:00 +0000",
//     displaylocal: "Thu 15 Feb 2018 09:30pm",
//     yearlocal: "2018",
//     monthlocal: "2",
//     daylocal: "15",
//     hourlocal: "21",
//     minutelocal: "30",
//     rfc2882timezone: "Thu, 15 Feb 2018 21:30:00 +0000",
//     displaytimezone: "Thu 15 Feb 2018 09:30pm",
//     yeartimezone: "2018",
//     monthtimezone: "2",
//     daytimezone: "15",
//     hourtimezone: "21",
//     minutetimezone: "30"
//   },
//   venue: {
//     slug: 27,
//     title: "FreeAgent Central offices, Edinburgh",
//     description: "(Old address till June 2015: 40 Torphichen Street, Edinburgh, EH3 8JB)",
//     address: "One Edinburgh Quay \n 133 Fountainbridge",
//     addresscode: "EH3 9QG",
//     lat: "55.9431",
//     lng: "-3.20881"
//   },
//   areas: [
//     {
//       slug: 62,
//       title: "Edinburgh"
//     }
//   ],
//   country: {
//     title: "United Kingdom"
//   }
// },
// {
//   slug: 5640,
//   slugforurl: "5640-docker-meetup",
//   summary: "Docker Meetup",
//   summaryDisplay: "Docker Edinburgh: Docker Meetup",
//   description: "
//   Look forward to seeing everyone!",
//   deleted: false,
//   cancelled: false,
//   is_physical: true,
//   is_virtual: false,
//   custom_fields: {
//     code_of_conduct: null
//   },
//   siteurl: "https://opentechcalendar.co.uk/event/5640-docker-meetup",
//   url: "https://www.meetup.com/Docker-Edinburgh/events/245926011/",
//   ticket_url: "https://www.meetup.com/Docker-Edinburgh/events/245926011/",
//   timezone: "Europe/London",
//   start: {
//     timestamp: 1518719400,
//     rfc2882utc: "Thu, 15 Feb 2018 18:30:00 +0000",
//     rfc2882local: "Thu, 15 Feb 2018 18:30:00 +0000",
//     displaylocal: "Thu 15 Feb 2018 06:30pm",
//     yearlocal: "2018",
//     monthlocal: "2",
//     daylocal: "15",
//     hourlocal: "18",
//     minutelocal: "30",
//     rfc2882timezone: "Thu, 15 Feb 2018 18:30:00 +0000",
//     displaytimezone: "Thu 15 Feb 2018 06:30pm",
//     yeartimezone: "2018",
//     monthtimezone: "2",
//     daytimezone: "15",
//     hourtimezone: "18",
//     minutetimezone: "30"
//   },
//   end: {
//     timestamp: 1518726600,
//     rfc2882utc: "Thu, 15 Feb 2018 20:30:00 +0000",
//     rfc2882local: "Thu, 15 Feb 2018 20:30:00 +0000",
//     displaylocal: "Thu 15 Feb 2018 08:30pm",
//     yearlocal: "2018",
//     monthlocal: "2",
//     daylocal: "15",
//     hourlocal: "20",
//     minutelocal: "30",
//     rfc2882timezone: "Thu, 15 Feb 2018 20:30:00 +0000",
//     displaytimezone: "Thu 15 Feb 2018 08:30pm",
//     yeartimezone: "2018",
//     monthtimezone: "2",
//     daytimezone: "15",
//     hourtimezone: "20",
//     minutetimezone: "30"
//   },
//   areas: [
//     {
//       slug: 62,
//       title: "Edinburgh"
//     }
//   ],
//   country: {
//     title: "United Kingdom"
//   }
// },
//
// {
//   slug: 6370,
//   slugforurl: "6370-open-rights-group-scotland-plans-for-2018",
//   summary: "Open Rights Group Scotland - Plans for 2018",
//   summaryDisplay: "Open Rights Group Edinburgh: Open Rights Group Scotland - Plans for 2018",
//   description: "
//   No need to have been to a meetup before or have any expertise in any field. All you need to do is care about how technology and rights interact, and be interested to learn more and possibly contribute. Join us!",
//   deleted: false,
//   cancelled: false,
//   is_physical: true,
//   is_virtual: false,
//   custom_fields: {
//     code_of_conduct: null
//   },
//   siteurl: "https://opentechcalendar.co.uk/event/6370-open-rights-group-scotland-plans-for-2018",
//   url: "https://www.meetup.com/ORG-Edinburgh/events/247475604/",
//   ticket_url: "https://www.meetup.com/ORG-Edinburgh/events/247475604/",
//   timezone: "Europe/London",
//   start: {
//     timestamp: 1518805800,
//     rfc2882utc: "Fri, 16 Feb 2018 18:30:00 +0000",
//     rfc2882local: "Fri, 16 Feb 2018 18:30:00 +0000",
//     displaylocal: "Fri 16 Feb 2018 06:30pm",
//     yearlocal: "2018",
//     monthlocal: "2",
//     daylocal: "16",
//     hourlocal: "18",
//     minutelocal: "30",
//     rfc2882timezone: "Fri, 16 Feb 2018 18:30:00 +0000",
//     displaytimezone: "Fri 16 Feb 2018 06:30pm",
//     yeartimezone: "2018",
//     monthtimezone: "2",
//     daytimezone: "16",
//     hourtimezone: "18",
//     minutetimezone: "30"
//   },
//   end: {
//     timestamp: 1518813000,
//     rfc2882utc: "Fri, 16 Feb 2018 20:30:00 +0000",
//     rfc2882local: "Fri, 16 Feb 2018 20:30:00 +0000",
//     displaylocal: "Fri 16 Feb 2018 08:30pm",
//     yearlocal: "2018",
//     monthlocal: "2",
//     daylocal: "16",
//     hourlocal: "20",
//     minutelocal: "30",
//     rfc2882timezone: "Fri, 16 Feb 2018 20:30:00 +0000",
//     displaytimezone: "Fri 16 Feb 2018 08:30pm",
//     yeartimezone: "2018",
//     monthtimezone: "2",
//     daytimezone: "16",
//     hourtimezone: "20",
//     minutetimezone: "30"
//   },
//   areas: [
//     {
//       slug: 62,
//       title: "Edinburgh"
//     }
//   ],
//   country: {
//     title: "United Kingdom"
//   }
// }
// };
