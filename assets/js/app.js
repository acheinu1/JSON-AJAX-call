
var button = document.getElementById("btn")
var display = document.getElementById("animal-info")
var pageCounter = 1
// we made the var pageCounter so we could increment the url animals-1.json

button.addEventListener ("click", function (){

    var ourRequest = new XMLHttpRequest();
//XMLHttpRequest(); lives in the browser handles ajax request

ourRequest.open("GET", "https://learnwebcode.github.io/json-example/animals-"+pageCounter+".json");
//use  .open() method to get the url

ourRequest.onload = function(){
    var ournewData = JSON.parse(ourRequest.responseText)
    //use parse JSON to convert the data to JSON

    renderHTML(ournewData)
};
ourRequest.send();
pageCounter++;
})

//this function would add our JSON data to the browser UI  json === data
function renderHTML(json){
    var stringNew = " ";
    for(i=0; i < json.length; i++){
        stringNew += "<p>" + json[i].name + "is a" + json[i].species + ".</p>";
    }
    display.insertAdjacentHTML("beforeend", stringNew )
}
