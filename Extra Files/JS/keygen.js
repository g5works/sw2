function keygen(){
    var keys = [];
    for(let i = 0; i<7; i++){
      keys.push(Math.floor(Math.random() * (7 - 1) + 1));
      if(i===6){
        var a
      }
    }
    var keytail = Math.floor(Math.random() * (999 - 100) + 100);
    var key1 = Math.floor(Math.random() * (7 - 1) + 1);
    var key2 = Math.floor(Math.random() * (7 - 1) + 1);
    var key3 = Math.floor(Math.random() * (7 - 1) + 1);
    var key4 = Math.floor(Math.random() * (7 - 1) + 1);
    var key5 = Math.floor(Math.random() * (7 - 1) + 1);
    var key6 = Math.floor(Math.random() * (7 - 1) + 1);
    var key7 = Math.floor(Math.random() * (7 - 1) + 1);
    var mathvar = key1+key2+key3+key4+key5+key6+key7;
    mathvar = mathvar%7
    if (mathvar == 0){
        document.getElementById("key").innerHTML = `${keytail}-${key1}${key2}${key3}${key4}${key5}${key6}${key7}`
    }
    else{
        keygen();
    }
    
}
function keygen2(){
    var keytail = Math.floor(Math.random() * (365 - 100) + 100);
    var keytail2 = Math.floor(Math.random() * (99 - 95) + 95);
    var key1 = Math.floor(Math.random() * (7 - 1) + 1);
    var key2 = Math.floor(Math.random() * (7 - 1) + 1);
    var key3 = Math.floor(Math.random() * (7 - 1) + 1);
    var key4 = Math.floor(Math.random() * (7 - 1) + 1);
    var key5 = Math.floor(Math.random() * (7 - 1) + 1);
    var key6 = Math.floor(Math.random() * (7 - 1) + 1);
    var foot = Math.floor(Math.random() * (99999 - 10000) + 10000);
    var mathvar = key1+key2+key3+key4+key5+key6+0;
    mathvar = mathvar%7
    if (mathvar == 0){
        document.getElementById("key2").innerHTML = `${keytail}${keytail2}-OEM-0${key1}${key2}${key3}${key4}${key5}${key6}-${foot}`
    }
    else{
        keygen2();
    }
}   