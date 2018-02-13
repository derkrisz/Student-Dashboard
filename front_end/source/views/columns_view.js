const ColumnConstruct = function(){

}

ColumnConstruct.prototype.renderColumn = function(cohortsObject, syllabus){

  cohortsObject.cohortsArray.forEach(function(cohort, index){
    index ++;
    const cohortName = document.querySelector(`.cohort_name${index}`)
    cohortName.innerText = cohort.name;
    const day1 = document.querySelector(`.Mon${index}`);
    const day2 = document.querySelector(`.Tue${index}`);
    const day3 = document.querySelector(`.Wed${index}`);
    const day4 = document.querySelector(`.Thu${index}`);
    const day5 = document.querySelector(`.Fri${index}`);

    syllabus.forEach(function(element){
      if (element.week_number == cohort.week){
        day1.innerText = element.day1;
        day2.innerText = element.day2;
        day3.innerText = element.day3;
        day4.innerText = element.day4;
        day5.innerText = element.day5;
      }
    })
  })
};

module.exports = ColumnConstruct;
