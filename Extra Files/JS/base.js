var numberofpresses = 0;


function tobuilds() {
    location.href = "builds.html"
}

function tophotogallery() {
    location.href = "gallery.html"
}

function todownloadpage(){
  location.href = "download.html"
}

function tow95keygen(){
  numberofpresses = numberofpresses+1;
  switch (numberofpresses){
    case 1:
      document.getElementById("kg").innerHTML = "please stop"
    break;
    case 2:
      document.getElementById("kg").innerHTML = "there is nothing here"
    break;
    case 3:
      document.getElementById("kg").innerHTML = "this is only for the owner to see"
    break;
    case 4:
      document.getElementById("kg").innerHTML = "if you click here, then, then you will be banned off, uh, discord"
    break;
    case 5:
      document.getElementById("kg").innerHTML = "i can't stop you can i"
    break;
    case 6:
      document.getElementById("kg").innerHTML = "<i>Fine. </i> I give up. Enjoy. I guess."
    break;
    case 7:
      location.href="keygen.html"
    break;
  }
}