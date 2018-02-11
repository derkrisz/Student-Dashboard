const DateView = function() {

}

DateView.prototype.displayDate = function () {
  const date = new Date();
  dateField = document.querySelector('#date');
  dateField.innerText = date;
};

module.exports = DateView;
