window.onload = changeimage();
function changeimage(){
    var key1 = Math.floor(Math.random() * 10) + 1;
    var key1str = key1.toString();
    document.getElementById("homeimage").src="Extra Files/Images/sw2img"+key1str+".webp";
}
