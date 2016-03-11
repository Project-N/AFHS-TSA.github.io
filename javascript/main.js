var currentTab = "aboutUAS";
document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("commercialContent").style.display = 'none';
    document.getElementById("educationalContent").style.display = 'none';
    document.getElementById("researchContent").style.display = 'none';
    document.getElementById("aboutUASContent").style.display = 'initial';
});
function about() {
    currentTab = "aboutUAS";
    document.getElementById("aboutUASli").style.backgroundColor = "#111";
    document.getElementById("aboutUASa").style.backgroundColor = "#111";
    document.getElementById("commercialli").style.backgroundColor = "#333";
    document.getElementById("commerciala").style.backgroundColor = "#333";
    document.getElementById("educationalli").style.backgroundColor = "#333";
    document.getElementById("educationala").style.backgroundColor = "#333";
    document.getElementById("researchli").style.backgroundColor = "#333";
    document.getElementById("researcha").style.backgroundColor = "#333";
    document.getElementById("commercialContent").style.display = 'none';
    document.getElementById("educationalContent").style.display = 'none';
    document.getElementById("researchContent").style.display = 'none';
    document.getElementById("aboutUASContent").style.display = 'initial';
}
function commercial() {
    currentTab = "commercial";
    document.getElementById("commercialli").style.backgroundColor = "#111";
    document.getElementById("commerciala").style.backgroundColor = "#111";
    document.getElementById("aboutUASli").style.backgroundColor = "#333";
    document.getElementById("aboutUASa").style.backgroundColor = "#333";
    document.getElementById("educationalli").style.backgroundColor = "#333";
    document.getElementById("educationala").style.backgroundColor = "#333";
    document.getElementById("researchli").style.backgroundColor = "#333";
    document.getElementById("researcha").style.backgroundColor = "#333";
    document.getElementById("educationalContent").style.display = 'none';
    document.getElementById("researchContent").style.display = 'none';
    document.getElementById("aboutUASContent").style.display = 'none';
    document.getElementById("commercialContent").style.display = 'initial';
}
function educational() {
    currentTab = "educational";
    document.getElementById("educationalli").style.backgroundColor = "#111";
    document.getElementById("educationala").style.backgroundColor = "#111";
    document.getElementById("commercialli").style.backgroundColor = "#333";
    document.getElementById("commerciala").style.backgroundColor = "#333";
    document.getElementById("aboutUASli").style.backgroundColor = "#333";
    document.getElementById("aboutUASa").style.backgroundColor = "#333";
    document.getElementById("researchli").style.backgroundColor = "#333";
    document.getElementById("researcha").style.backgroundColor = "#333";
    document.getElementById("aboutUASContent").style.display = 'none';
    document.getElementById("commercialContent").style.display = 'none';
    document.getElementById("researchContent").style.display = 'none';
    document.getElementById("educationalContent").style.display = 'initial';
}
function research() {
    currentTab = "research";
    document.getElementById("researchli").style.backgroundColor = "#111";
    document.getElementById("researcha").style.backgroundColor = "#111";
    document.getElementById("commercialli").style.backgroundColor = "#333";
    document.getElementById("commerciala").style.backgroundColor = "#333";
    document.getElementById("educationalli").style.backgroundColor = "#333";
    document.getElementById("educationala").style.backgroundColor = "#333";
    document.getElementById("aboutUASli").style.backgroundColor = "#333";
    document.getElementById("aboutUASa").style.backgroundColor = "#333";
    document.getElementById("aboutUASContent").style.display = 'none';
    document.getElementById("commercialContent").style.display = 'none';
    document.getElementById("educationalContent").style.display = 'none';
    document.getElementById("researchContent").style.display = 'initial';
}
function hover(object){
    if(object == currentTab){
    }else{
    document.getElementById(object + "li").style.backgroundColor = "#111";
    document.getElementById(object + "a").style.backgroundColor = "#111";
    }
}
function unHover(object){
    if(object == currentTab){
    }else{
    document.getElementById(object + "li").style.backgroundColor = "#333";
    document.getElementById(object + "a").style.backgroundColor = "#333";
    }
}