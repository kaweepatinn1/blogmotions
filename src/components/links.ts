import $ from "jquery";

let mainWebsite = "https://nanomotions.org";
let tab = -1;
/*
-1 - Main Menu
0 - All Blogs
*/

window.redirectToMainWebsite = function() {
    window.location.href = mainWebsite;
};

window.linkTo = function(link:string){
    window.location.href = link;
}

window.clickOption = function(option:number){
    switch (tab) {
        // if the last tab was main menu, remove main menu
        case -1:
            if (option != -1){
                let transition = $("#container").css("transition");
                $("#container").css('transition', '1s cubic-bezier(0.32, 0, 0.67, 0)');
                $("#container").css('pointer-events', 'none');

                setTimeout(function(){$("#container").addClass('remove');
                },50);
                
                setTimeout(function(){
                    $("#container").css('transition', transition);
                    $("#container").css('pointer-events', 'all');
                },1050);

                setTimeout(function(){window.clickOption(-1);
                },2000);
            };
        case 0: 
            if (option != 0){

            }
    }

    switch (option) {
        case -1:
            if (tab != -1){
                let transition = $("#container").css("transition");
                $("#container").css('transition', '1.5s cubic-bezier(0.33, 1, 0.68, 1)');
                $("#container").css('pointer-events', 'none');

                setTimeout(function(){$("#container").removeClass('remove');
                },50);

                setTimeout(function(){
                    $("#container").css('transition', transition);
                    $("#container").css('pointer-events', 'all');
                },1550);
            };

    }
    tab = option;
    $("#tabnumber").css("z-index",tab.toString());
}