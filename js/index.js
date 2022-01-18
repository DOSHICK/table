// Подключение JSON
let request = new XMLHttpRequest();
request.open("GET", "./json/base.json", false);
request.send(null);
let my_JSON_object = JSON.parse(request.responseText);
let jsonArray = my_JSON_object.rows;
let jsonLength = jsonArray.length;
//проверка подключения JSON
// console.log(my_JSON_object.rows[1].name);


//  Создание вариантов выбора в input
function addOptions() {
  for (let idCounter = 0; idCounter < jsonLength; idCounter++) {
    let datalist = document.getElementById("input-datalist");
    let optionCreate = document.createElement("option");
    // optionCreate.value = idCounter; // если нужно отображать id
    let optionName = jsonArray[idCounter].name;
    optionCreate.innerHTML = optionName;
    datalist.appendChild(optionCreate);
  }
}
addOptions();//вызов создания вариантов выбора с input


// Подсчёт при вводе в input 
let inputMain = document.getElementById("input")
input.oninput = function () {
  displayCountings()
};
// Подсчёт при вводе в inputWeight
let inputWeight = document.getElementById("input-weight");
inputWeight.oninput = function () {
  displayCountings()
};

// Функция для вывода рассчётов в HTML
function displayCountings() {
  let input = document.getElementById("input");
  let inputValue = inputWeight.value;
  console.log(input.value);

  let info = jsonArray.find(item => item.name == input.value);

  let calories = document.getElementById("output-calories");
  calories.innerHTML = countFromWeight(inputValue, info.calories, info.weight) + " ккал";

  let bredUnit = document.getElementById("output-XE");
  bredUnit.innerHTML = countFromWeight(inputValue, 1, info.weight) //Math.round(inputValue / info.weight);

}

// Функция для подсчёта по пропорции
function countFromWeight(inWeight, fromModif, fromWeight) {
  let modifName = (inWeight * fromModif) / fromWeight;
  // console.log(modifName) //проверка на работоспособность
  return modifName
}

