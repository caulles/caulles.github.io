let reduceNumber = function (num) {
  var ones,
    tens,
    hundreds,
    thousands = 0;
  if (num < 10) {
    return num;
  }
  if (num < 100) {
    return (num % 10) + (num - (num % 10)) / 10;
  }
  if (num < 1000) {
    ones = num % 10;
    tens = ((num - ones) / 10) % 10;
    hundreds = ((num - ones) / 10 - tens) / 10;
  }
  if (num < 10000) {
    ones = num % 10;
    tens = ((num - ones) / 10) % 10;
    hundreds = ((((num - ones) / 10) % 100) - tens) / 10;
    thousands = (((num - ones) / 10 - tens) / 10 - hundreds) / 10;
  }
  return thousands + hundreds + tens + ones;
};

let formula = function (day, month, year, doublereduce) {
  var sum = reduceNumber(reduceNumber(day) + reduceNumber(month) + year);
  if (doublereduce || sum > 21) {
    return reduceNumber(sum);
  }
  return sum;
};

function calculate() {
  let d = ~~document.forms.birthday.day.value;
  let m = ~~document.forms.birthday.month.value;
  let y = ~~document.forms.birthday.year.value;
  let answer = formula(d, m, y, false);
  return answer;
}

let displayAnswer = function () {
  let cards = document.getElementsByClassName("answer-content");
  let cardNumber = calculate();
  for (i = 0; i < cards.length; i++) {
    cards[i].classList.remove("visible");
  }
  document.getElementById("answer").removeAttribute("class");
  document.getElementById("answer").classList.add("img-" + cardNumber);
  document.getElementById("card-" + cardNumber).classList.add("visible");
  //document.getElementById('answer').innerHTML = calculate();
};

let flipCard = function () {
  document.getElementById("card").classList.toggle("flipped");
};

/*
let formula1 = function(){
  return (~~dayNum + ~~monthNum + ~~yearNum);
};

let formula2 = function(mm=month,dd=day,yyyy=year) {
  var numberChar = [...(mm + dd + yyyy).toString()];
  var number = numberChar.reduce((total,current) => ~~total + ~~current);
  return number;
};

monthChar = [...month.toString()];
dayChar = [...day.toString()];
yearChar = [...year.toString()];

monthNum = monthChar.reduce((total,current) => ~~total + ~~current);
dayNum = dayChar.reduce((total,current) => ~~total + ~~current);
yearNum = yearChar.reduce((total,current) => ~~total + ~~current);
*/

