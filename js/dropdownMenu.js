var menuDown = false
const menu = $("#menu")
const closeMenu = $("#closeMenu")
const dropMenu = $("#dropdownMenu")


function dropdownMenu(){

    if(menuDown){
        menu.css("display","flex")
        closeMenu.css("display","none")
        dropMenu.css({
            "visibility":"hidden",
            "height": "0",
            "width":"0"
            
        })

        menuDown = false
    }else{
        menu.css("display","none")
        closeMenu.css("display","flex")
        dropMenu.css({
            "visibility":"visible",
            "height": "fit-content",
            "width":"100%"
            
        })

        menuDown = true
    }
}

function closeDropMenu(){
    if(menuDown){
        menu.css("display","flex")
        closeMenu.css("display","none")
        dropMenu.css({
            "visibility":"hidden" , 
            "width":"0", 
            "height": "0"
        })
        menuDown = false
    }
}