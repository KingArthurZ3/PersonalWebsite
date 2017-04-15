//
//     var count=1;
// function setColor(btn, color){
//     var property = document.getElementById(btn);
//
//     if (count == 0){
//         property.style.backgroundColor = "#24b662"
//         count=1;
//     }
//     else{
//         property.style.backgroundColor = "transparent"
//         count=0;
//     }
//
// }
// window.onload = function(){
//     var all = document.getElementById("all");
//     var apps = document.getElementById("#apps");
//     var websites = document.getElementById("#websites");
//     var misc = document.getElementById("#misc");
//     var buttonId = [all, apps, websites, misc]
//
//     $(buttonId[0]).onclick = function changeColor(){
//         var count = 0;
//         while(document.getElementById(buttonId[count]).style.backgroundColor !== "#24b662"){
//             count++;
//         }
//         document.getElementById(buttonId[count]).style.backgroundColor = "transparent"
//
//         document.getElementById(buttonId[0]).style.backgroundColor = "#24b662"
//     }
//
//     $(buttonId[1]).onclick = function changeColor(){
//         var count = 0;
//         while(document.getElementById(buttonId[count]).style.backgroundColor !== "#24b662"){
//             count++;
//         }
//         document.getElementById(buttonId[count]).style.backgroundColor = "transparent"
//
//         document.getElementById(buttonId[1]).style.backgroundColor = "#24b662"
//     }
//
// }

$(".project-selector-button").click(function () {

    $(".project-selector-button").removeClass("#24b662"); // Remove 'blue' CSS Class from all Buttons

    $(this).addClass("#24b662");

});

