document.write("Question no 4");
document.write("<br><br>");
var MovieTicket=600;
var x= MovieTicket*5;
document.write("price of buying 5 tickets is "+ x+ "PKR" );
document.write("<br><br>");
document.write("Question no 5");
document.write("<br><br>");
var table= 4;
var i;
for(i=1;i<=10;i++){
document.write(table+"*"+i+"="+ table*i+"<br>");

}

document.write("<br><br>");
document.write("Question no 6");
document.write("<br><br>");
var TempCel=33;
var TempFar=(TempCel*9/5)+32;
document.write(TempCel+"C is "+ TempFar +"F<br>");

var temp=(TempFar-32)*5/9;
document.write(TempFar+"F is "+ temp +"c");

document.write("<br><br>");
document.write("Question no 7");
document.write("<br><br>");
var Priceofitem1= 250 ;
var Priceofitem2= 360;
var  Orderedquantityofitem1 = 2
var OrderedQuantityofitem2 = 5;
var Shippingcharges = 300;
document.write("Price of item 1 is "+ Priceofitem1+"<br>");
document.write("ordered quantity of item 1 is  "+ Orderedquantityofitem1+"<br>");
document.write(" price of item 2 is "+Priceofitem2+"<br>");
document.write(" ordered quantity of item 2 is "+OrderedQuantityofitem2+"<br>");
document.write("shipping charges is "+ Shippingcharges+"<br>");
var total=Priceofitem1*Orderedquantityofitem1+Priceofitem2*OrderedQuantityofitem2 +Shippingcharges;
document.write("total cost of your order is "+total+"");

document.write("<br><br>");
document.write("Question no 8");
document.write("<br><br>");
var MarksObt= 450;
var MarksTotal=500;
var per=MarksObt*100/MarksTotal;
document.write("Total Marks: "+MarksTotal + "<br>");
document.write("Obtained Marks: "+ MarksObt+ "<br>");
document.write("percentage: "+ per+ "%");
document.write("<br><br>");
document.write("Question no 9");
document.write("<br><br>");
var us= 10;
us=10*104.80;
var saudi=25;
saudi =25*28;
var pak= saudi+us;
document.write("total currency in PKR "+pak);


