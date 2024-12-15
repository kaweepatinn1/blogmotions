import $ from "jquery";

let mainWebsite = "https://nanomotions.org";
let tab = -1;
/*
1 - Main Menu
2 - All Blogs
3 - AnimationFX
*/

window.redirectToMainWebsite = function() {
    window.location.href = mainWebsite;
};

window.linkTo = function(link:string){
    window.location.href = link;
}

window.menuOption = function(option:number){
    $("#tabnumber").css("z-index",option.toString());
}