var currentopenimage = 1;
function changeimageforwardgallery(){
    currentopenimage += 1;
    if (currentopenimage > 10){
        currentopenimage = 1;
    } 
    var key1str = currentopenimage.toString();
    document.getElementById("imagern").innerHTML = key1str+"/10"
    document.getElementById("downloadlink").href = "Extra Files/Images/sw2img"+key1str+".gif"
    document.getElementById("downloadlink").download = "sw2img"+key1str+".gif"
    document.getElementById("galleryprev").src="Extra Files/Images/sw2img"+key1str+".gif";
}

function changeimagebackwardgallery(){
    currentopenimage -= 1;
    if (currentopenimage <= 0){
        currentopenimage = 10;
    }
    
    var key1str = currentopenimage.toString();
    document.getElementById("imagern").innerHTML = key1str+"/10"
    document.getElementById("downloadlink").href = "Extra Files/Images/sw2img"+key1str+".gif"
    document.getElementById("downloadlink").download = "sw2img"+key1str+".gif"
    document.getElementById("galleryprev").src="Extra Files/Images/sw2img"+key1str+".gif";
}



