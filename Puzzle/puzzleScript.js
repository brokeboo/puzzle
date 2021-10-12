var kellekord="cut.images/fully.jpeg";
var lopp=false;
function klik(pilt){

    pilt.src=kellekord;
    if(vyidukontroll()){
        alert("Sa võtsid");
        lopp=true;
    }

    /*if(kellekord=="x.png"){
        kellekord="o.png";
    }else{
        kellekord="x.png";}*/
    if(ruududKasutatud()){
        lopp=true;
        alert("Mäng läbi");
    }
}
function klikValik(pilt){
    kellekord=pilt.src;
    document.getElementById("pilt12").src=kellekord;
}
// kontrollib kõik pildid ja tagastab false kui leiab ühe tühja pildi
function ruududKasutatud(){
    pildid = document.images;
    for (var i=0;i<pildid.length;i++){
        if (pildid[i].src.split("/").pop()=="tyhi.png"){
            return false;
        }
    }
    return true;
}

function vyidukontroll(){

    if(kontollsisu(1,2,3, kellekord)){return true;}
    if(kontollsisu(4,5,6, kellekord)){return true;}
    if(kontollsisu(7,8,9, kellekord)){return true;}
    if(kontollsisu(1,4,7, kellekord)){return true;}
    if(kontollsisu(2,5,8, kellekord)){return true;}
    if(kontollsisu(3,6,9, kellekord)){return true;}
    if(kontollsisu(1,5,9, kellekord)){return true;}
    if(kontollsisu(3,5,7, kellekord)){return true;}
    return false;

}
// определение имени файла - failinime küsimine, pop() - võtab nimest viimase väärtuse
function sisu(nr){
    // return document.getElementById("pilt"+nr).src.split("/").pop();
    var tulem= document.getElementById("pilt"+nr).src;
    tulem = tulem.split("/").pop();
    // split("/") - teeb massivi faili teekonnast ja pop võtab viimase massiivi väärtuse ehk pildifailinimi
    return tulem;
}
// a,b,c - номера картинок, sisulopp - имя файла искомой картинки
function kontollsisu(a,b,c, sisulopp){

    if(sisu(a)==sisulopp && sisu(b)==sisulopp && sisu(c)==sisulopp)
    {return true;}else {return false;}

}