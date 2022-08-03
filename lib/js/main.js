let weaponTile=document.getElementById("weapons")

let isMouseDown=false

weaponTile.onmousedown=function(){
    isMouseDown=true
}

weaponTile.onmouseup=function(){
    isMouseDown=false;
}

document.onmousemove=function(event){
    if(isMouseDown){
        weaponTile.onmousemove=function(){
            weaponTile.style.position="absolute"
            weaponTile.style.zIndex=1000
            weaponTile.style.left=(event.pageX-weaponTile.offsetWidth/2)+"px"  
            weaponTile.style.top=(event.pageY-weaponTile.offsetHeight/2)+"px"
            weaponTile.style.width="1000px"    
        }
    }
}