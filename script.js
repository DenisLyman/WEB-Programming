document.write("Масив1"+"</br>");
let mas1=[];
for (let i=0; i<10; i++) {
mas1[i]= Math.random();
document.write(mas1[i]+'</br> ');
}

document.write("Масив2"+"</br>");
let mas2=[];
for (let i=0; i<10; i++) {
mas2[i]= Math.random()*10;
document.write(mas2[i]+'</br> ');
}


document.write("Метод round"+"</br>")
let mas3=[];
document.write("Масив3"+"</br>");
for (let i=0; i<10; i++) {
mas3[i]=Math.round(Math.random()*10);
document.write(mas3[i]+'</br> ');
}

document.write("Метод floor"+"</br>")
let mas4=[];
document.write("Масив4"+"</br>");
for (let i=0; i<10; i++) {
mas4[i]=Math.floor(Math.random()*10);
document.write(mas4[i]+'</br> ');
}

document.write("Метод ceil"+"</br>")
let mas5=[];
document.write("Масив5"+"</br>");
for (let i=0; i<10; i++) {
mas5[i]=Math.ceil(Math.random()*10);
document.write(mas5[i]+'</br> ');
}