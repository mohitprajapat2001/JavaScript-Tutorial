// function inputfunction(element){
//     test = element.value;
//     document.getElementById('mytest').innerHTML = test;
// }
function changefunction(element){
    test = element.value;
    document.getElementById('mytest').innerHTML = test;
}
function focusfunction(element){
    element.style.background = "yellow"
}
function blurfunction(element){
    element.style.background = "cyan"
}
function selectfunction(element){
    document.querySelector('body').style.background = element.value;
}