

var request = new XMLHttpRequest();
request.open("GET", "./base.json", false);
request.send(null);
request.onreadystatechange = function() {
  if ( request.readyState === 4 && request.status === 200 ) {
    var my_JSON_object = JSON.parse(request.responseText);
    console.log(my_JSON_object);
  }
}
alert(person.name)