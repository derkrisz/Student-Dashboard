const DateView = function() {

}

DateView.prototype.displayDate = function () {
  const date = new Date();
  dateField = document.querySelector('#date');
  dateField.innerText = date;
};

DateView.prototype.dynamicDate = function () {
  setInterval(this.displayDate, 1000);
};

module.exports = DateView;
