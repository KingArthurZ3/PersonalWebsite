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

$(document).ready(function(){
    $("#all").addClass("project-selector-color");

    $(".project-selector-button").click(function () {

        $(".project-selector-button").removeClass("project-selector-color"); // Remove 'blue' CSS Class from all Buttons

        $(this).addClass("project-selector-color");

    });

    window.onload = function(){
        $(document).websiteSizeAdjuster()
    }

    function websiteSizeAdjuster(){
        if( $(".grid").hasClass("websites")){
            $(".websites").style.width = "35%"
            $(".websites").style.height = "25%"
        }
        alert("running")
    }

});

