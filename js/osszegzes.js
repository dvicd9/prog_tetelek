function osszegzes(my_tomb){
    let osszeg = 0;
    for (let i = 0; i < my_tomb.length; i++){
        osszeg += my_tomb[i];
    }
    document.getElementById("osszeg").innerHTML = osszeg;
}

function atlagolas(my_tomb){
    document.getElementById("atlag").innerHTML = osszegzes(my_tomb) / my_tomb.length;
}

function szamolas(){
    osszegzes(tomb);
    atlagolas(tomb);
}