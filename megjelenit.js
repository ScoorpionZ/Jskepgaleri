window.addEventListener("load",init);

function $(nev){
    return document.querySelectorAll(nev);
}
//var kepek =["kepek/1.jfif","kepek/2.jfif","kepek/3.jfif"];

//var cim=["1. kép címe","2. kép címe","3. kép címe"];

//var leir=["1. kép leírása","2. kép leírása","3. kép leírása"]

var kep1={elrreseut:"kepek/1.jfif",cim:"1. kép címe",leiras:"1. kép leírása"};
var kep2={elrreseut:"kepek/2.jfif",cim:"2. kép címe",leiras:"2. kép leírása"};
var kep3={elrreseut:"kepek/3.jfif",cim:"3. kép címe",leiras:"3. kép leírása"};

var kep=[kep1,kep2,kep3];

function init(){
    
    
    for (let i = 0; i < kep.length; i++) {
        var elem ='<div><h3></h3><img id="'+i+'" src="" alt=""><p></p></div>';
        $("article")[0].innerHTML+=elem;
    }

    console.log("Üdv a Js");
    //$("section")[0].innerHTML="Hello";
    for (let i = 0; i < $("article img").length; i++) {
        $("article img")[i].src=kep[i].elrreseut;
        $("article div h3")[i].innerHTML=kep[i].cim;
        $("article div p")[i].innerHTML=kep[i].leiras;
        //$("article img")[i].src=kepek[i];
        //$("article div h3")[i].innerHTML=cim[i];
        //$("article div p")[i].innerHTML=leir[i];
        
    }
    //$("article img")[0].src="kepek/1.jfif";
    //$("article img")[1].src="kepek/2.jfif";
    //$("article img")[2].src="kepek/3.jfif";
    for (let i = 0; i < kep.length; i++) {
        $("article div img")[i].addEventListener("click",betolt);
        
    }

    document.getElementById("bal").addEventListener("click",bal);
    document.getElementById("jobb").addEventListener("click",jobb);
}
function betolt(){
    var index = this.id;
    console.log(kep[index].elrreseut);
    console.log(kep[index].cim);
    console.log(kep[index].leiras);
    $("section div img")[0].src=(kep[index].elrreseut);
    $("section div h3")[0].innerHTML=(kep[index].cim);
    $("section div p")[0].innerHTML=(kep[index].leiras);
}
var index = 0;
function bal(){
    

        $("section div img")[0].src=(kep[index].elrreseut);
        $("section div h3")[0].innerHTML=(kep[index].cim);
        $("section div p")[0].innerHTML=(kep[index].leiras);
    index -= 1;
    if(index<0){
        index=kep.length-1;
    }
}

function jobb(){
        $("section div img")[0].src=(kep[index].elrreseut);
        $("section div h3")[0].innerHTML=(kep[index].cim);
        $("section div p")[0].innerHTML=(kep[index].leiras);
    index += 1;
    if(index==kep.length){
        index=0;
    }
}