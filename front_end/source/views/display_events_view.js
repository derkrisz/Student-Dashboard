const DisplayEvents = function(){

}

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
    li.innerText = `${daysub} ${namesub} ` + "\n "+ info.data[counter].siteurl ;
    ul.appendChild(li);
  }
  target.appendChild(ul);
};

var namechop = function(string){
  console.log(string.indexOf(":"));
  if (string.indexOf(":") == -1) {
    return string.length}
  else {
    return string.indexOf(":");
  }
};

module.exports = DisplayEvents;
