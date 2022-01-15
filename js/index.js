// Подключение JSON
let request = new XMLHttpRequest();
request.open("GET", "./json/base.json", false);
request.send(null);
let my_JSON_object = JSON.parse(request.responseText);
let jsonArray = my_JSON_object.rows;
let jsonLength = jsonArray.length;
//проверка подключения JSON
// console.log(my_JSON_object.rows[1].name);


//  Создание вариантов выбора в select
function addOptions() {
  for (let idCounter = 0; idCounter < jsonLength; idCounter++) {
    let select = document.getElementById("autocomplete");
    let optionCreate = document.createElement("option");
    optionCreate.value = idCounter;
    let optionName = jsonArray[idCounter].name;
    optionCreate.innerHTML = optionName;
    select.appendChild(optionCreate);
  }
};
addOptions();


let inputWeight = document.getElementById("input-weight")
inputWeight.onkeyup = function () {
  let input = document.getElementById("autocomplete__input");
  let inputValue = inputWeight.value;
  console.log(input.value)

  
    let info = jsonArray.find(item => item.name == input.value);
    let calories = document.getElementById("output-calories");
    calories.innerHTML = (inputValue * info.calories) / info.weight;
    let bredUnit = document.getElementById("output-XE");
    bredUnit.innerHTML = inputValue / info.weight;
}





// console.log("hola")



