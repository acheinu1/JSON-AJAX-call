// using fetch api method instead of the old method in app.js

var display = document.getElementById("animal-info")
var button =document.getElementById("btn")
var pageCounter = 1
// we made the var pageCounter so we could increment the url animals-1.json

button.addEventListener ("click", function(){
fetch( 'https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json', { method: 'GET' })

    .then( response => response.json() )
  // .then( json => console.log(json[0]) )
    //.then( data => console.log(data) )      this could also be used instead of json
    
    .then( json => {
        
    var stringNew = " ";
    for(i=0; i < json.length; i++){
        stringNew += "<p>" + json[i].name + "is a" + json[i].species + ".</p>";}
    display.insertAdjacentHTML("beforeend", stringNew )
    } )
    .catch( error => console.error('error:', error) );
    increasePage()
})

function increasePage(){
    pageCounter++;
    if(pageCounter>3){
        // button.classList.add("hide-me")     
        // any of this code can be used to hide the button on 3rd click
        button.className = 'hide-me';
    }
}



