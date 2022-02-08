//DEGİSKENLER

/* Sayının Karesini Alma

var  sayi , kare ;
sayi=prompt("Sayı Giriniz :");
kare = (sayi*sayi);
alert("Sayının Karesi : " + kare); */

/* Girilen İki Sayının Toplamı

var sayi1 , sayi2 , toplam ;
sayi1 = Number(prompt("Birinci Sayıyı Giriniz :"));
sayi2 = Number(prompt("İkinci Sayıyı Giriniz :"));
toplam=(sayi1+sayi2);
alert ("Toplamı Ekrana Yazdır : " + toplam); */

/*Üç Sayının Ortalamasını Alma

var s1,s2,s3,ortalama ;
s1=Number (prompt("Birinci Sayı :"));
s2=Number (prompt("İkinci Sayı :"));
s3=Number (prompt("Üçüncü Sayı :"));

ortalama=(s1+s2+s3/3)

alert("Sayıların Toplamı :" + ortalama);*/

//--------------------------------------------------------------------------

//OPARATORLER

/* let value;

const value1=16;
const value2=4;

//Aritmatik Oparatörler

// value=value1+value2;
// value=value1-value2;
// value=value1/value2;
// value=value1*value2;

//Math Objesinin Metodları

value=Math.PI;

value=Math.round(3.6); // En yakın onluğa yuvarlama işlemi 
value=Math.round(3.5);
value=Math.round(3.2);

value=Math.ceil(3.2); // Yukarı yuvarlama
value=Math.ceil(3.7);

value=Math.floor(3.2); //Aşağı yuvarlama
value=Math.floor(3.7); 

value=Math.sqrt(16); //Sayının karakökünü alma

console.log(value); */ 

//-------------------------------------------------------------------------------------------------------

//KARAR YAPILARI

/*let  not;
not=prompt("notunuzu giriniz:");

if (not>=50){
    console.log("Tebrikler sınıfı geçtiniz:");
}
else{
    console.log("sınıfta kaldınız:");
}*/


/*let yas ;
yas = prompt("Yaşınız : ");
yas = Number (yas);
if(yas<2){
    console.log("bebek");
}
else if (yas<=12){
    console.log("çocuk")
}
else if (yas<=42){
    console.log("genç")
}
else if (yas<=62){
    console.log("yaşlı")
}
else {
    console.log("ihtiyar");
} */

/*
let yas ;
yas = prompt("Yaşınız :");
if ( yas<18){
    alert("18 yaşından küçüksünüz!!!");
    alert("Sitemize Hoşgeldiniz");
}
else{
    alert("Sitemize Hoşgeldiniz");

}*/

/*
let sayi ;

sayi=prompt("Sayıyı Giriniz");
if(sayi%2==0){
    alert("Sayı çift Hoşgeldiniz..");
}
else{
    alert("Sayı tek!!!")
    alert("f5 ile erkanı tazeleyin..");
}*/

/*for (var s=1 ; s<=5 ; s++)
document.write("Merhaba Javascript"); */

/*var x,y=0;
for(x=0;x<=10 ; x++)
{
    document.write(x);
    document.write("<br>");
    y++;
}
document.write("döngü sayısı=" +y);*/


/*var sayac = 0 ;
for(; sayac<10;sayac++)
document.write(sayac);*/


/*const process = 2
if(process === 1 ) {
    console.log("işlem1");
}
else if (process === 2 ){
    console.log("işlem2");
}
else if (process === 3) {
    console.log("işlem3");
}
else{
    console.log("geçersiz işlem")
} */

/*const process = 1;

switch(process){
    case 1:
        console.log("işlem 1");
        break; // switch case den çık anlamında kullanılıyor
    case 2:
        console.log("işlem2");
        break;
    case 3:
        console.log("işlem3");
        break;
    default:
        console.log("geçersiz işlem");
        break; // kullanılmasa da sıkıntı olmaz 
}*/

//---------------------------------------------------------------------------------------------------------------

// FONKSİYONLAR 


/*function square (x) {
    console.log(x*x);
}
function cube (x) {
    console.log(x*x*x);
}
let a = square (12);

a=cube(a);*/

/*function square (x) {
    return x*x;
}
function cube(x) {
    return x*x*x;
}

let a = square(12);
a = cube(a);

console.log(a);*/

/*function merhaba (){
    document.write("merhaba");
}

merhaba();


function topla()
{
    var a=1 , b=2 , toplam=0;
    toplam=a+b;
    alert(toplam);
}
topla(); */

/*function merhaba()
{
    document.write("merhaba<br>");
}
var n,s;
n=prompt("Sayı:");

for(s=1; s<5 ; s++)
merhaba(); */

/*
var n ,s ;

n=prompt  ("n:");

for(s=1 ; s<=n ; s++)
document.write(s+"<br>");

//------------
s=1;
while(s<=n)
{
    document.write(s+"<br>");
    s++;
}

*/



