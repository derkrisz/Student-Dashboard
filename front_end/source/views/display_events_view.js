const DisplayEvents = function(){

}

DisplayEvents.prototype.renderInternal = function (events) {
  console.log(events);
  const target = document.querySelector('.internalinfo');
  target.innerText = "";
  var table = document.createElement('table');

  var tabletitles =document.createElement('tr');

  var tabletitle1 = document.createElement('th');
  tabletitle1.innerText = "Day";
  var tabletitle2 = document.createElement('th');
  tabletitle2.innerText = "Event";
  var tabletitle3 = document.createElement('th');
  tabletitle3.innerText = "Organiser";
  var tabletitle4 = document.createElement('th');
  tabletitle4.innerText = "Time";

  tabletitles.appendChild(tabletitle1);
  tabletitles.appendChild(tabletitle2);
  tabletitles.appendChild(tabletitle3);
  tabletitles.appendChild(tabletitle4);
  table.appendChild(tabletitles);


  events.forEach(function(event){
    console.log(events);
    console.log(events[0]);
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    td1.innerText = event.day
    td2.innerText = `${event.title_type} : ${event.title}`;
    td3.innerText = event.organiser;
    td4.innerText = event.start_time;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);
  });

  target.appendChild(table);
};

DisplayEvents.prototype.render = function (info) {
const target = document.querySelector('.techinfo');
target.innerText = "";
  const ul = document.createElement('ul');
  for (counter = 0; counter < 7; counter++){
    var day = info.data[counter].start.displaylocal;
    var daysub = day.substring(0, 3);
    var name = info.data[counter].summaryDisplay;
    var namesub = name.substring(0, namechop(name));
    // tried to use .link to add a hyperlink to namechop in order to save space. didnt work but might with correct innerHTML
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = info.data[counter].siteurl;
    a.target = "_blank"
    a.innerHTML = `${daysub} ${namesub} `;
    li.appendChild(a);
    ul.appendChild(li);
  }
  target.appendChild(ul);
};

var namechop = function(string){
  if (string.indexOf(":") == -1) {
    return string.length}
  else {
    return string.indexOf(":");
  }
};

module.exports = DisplayEvents;
