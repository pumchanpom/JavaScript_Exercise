function Hello(){
    alert("Welcome to Practice #1.");
    console.log("The button has been clicked.");
    const elem = document.getElementById("text");
    elem.innerHTML = "The button has been clicked!";
    elem.style.color = "blue";
}