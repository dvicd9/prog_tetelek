function osszegzes(){
    let osszeg = 0;
    for (let i = 0; i < tomb.length; i++){
        osszeg += tomb[i];
    }
    document.getElementById("osszeg").innerHTML = osszeg;
}