1//write the program to convent the temp from celsius to fahrenheit and vice verse
//celsiusToFahrenheit
//celsius*9/5+32
var temperature:string='CelsiusToFahrenheit';
var celsiusValue:number= 25;
var num:number=25 * 9/5 + 32;
console.log(`Temperature from ${temperature} is ${num}` );
//FahrenheitToCelsius
//(Fahrenheit-32)*5/9
var temperature:string='FahrenheitToCelsius';
var Fahrenheit:number= 77;
var num:number=(77 - 32 )* 5/9;
console.log(`Temperature from ${temperature} is ${num}` );


2//write the program that calculate the precentage
var total:number=85
var obtianed:Number=78
var formula:Number=78 / 85 *100
console.log(`Ayesha got ${formula} % number.`);


3//write a program that convert given number of days in to weeks
var numberofDays:number=17
var numberOfweeks:number=Math.floor(numberofDays/7)
var reaminigDays:number=numberofDays%7
console.log(`${numberofDays} days = ${numberOfweeks} week and ${reaminigDays} days.`)


4//discount for a product

var productPrice:number=200

if (productPrice > 100){

    var discount10:number=productPrice/100*10;
    var finalPrice:number=productPrice - discount10;
    console.log(`${productPrice} is sale price with 10% Discount sale. Then the final price is ${finalPrice} `)

}
     else
    {
    
        var discount5:number=productPrice/100*5;
    var finalPrice:number=productPrice - discount5;
    console.log(`${productPrice} is sale price with 5% Discount sale. then  the final price is ${finalPrice}`);
}


5//program that determine the age

var age:number=19

if (age<19) {
    console.log("the preson is child. " );} 
    else if (age>13)
    {
    console.log("the person is teenager.")}
    else (age==19)
    {console.log("the person is adult.");
 }


 6//program that check the temp
 var weather:number= 5
 if (weather>5) {
    console.log("You wear a warm clothes.");
    
    
 } else (weather<5)
 {
    console.log("You  can not wear a warm clothes. ")
}


7//program that check num is div by 5 or 3
     var num:number=30
    if (num%3 ==0 && num%5==0) {
        console.log("the number is divisible both 3 and 5.")

        
    } else if (num%3 ==0)
     {console.log("the number is divisible only on 3.");
    
    }
    else (num%5 ==0)
    {
        console.log("the number is divisible only on 5.")
    }


    8//program that determine the days of the week
var num:number=8
switch (num) {
    case 1:
        console.log('this day is monday.')
        
        break;
        case 2:
            console.log('this day is tuesday.');
            break;
            case 3:
                console.log('this day is wednesday.');
                break;
                case 4:
                    console.log('this day is thursday.');
                    break;
                    case 5:
                        console.log('this day is friday.')
                        break;
                         case 6:
                            console.log('this day is saturday.')
                            break;
                            case 7:
                                console.log('this day is sunday.');
                                break;

         default:
            console.log('Enter  name of the day 1 to 7. ' );
            
}


9//leap year or not 
var leapYear:number=2020
if (leapYear%4===0) {
    console.log('This year is leap year.');
    
} else {
    console.log('This year is not leap year.');
    
    
}


10///Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill.
var totalUnit:number=300
var oneUnit_price:number=30
var billAmount:number=totalUnit * oneUnit_price

if (totalUnit > 100) 
{
    var tax_Onbill:number=billAmount*10/100;
    var bill:number=billAmount + tax_Onbill;
        console.log(`Your total units is ${totalUnit}, and your total bill is ${bill} with 10% tax`);
    }
       else if (totalUnit > 200) 
{
    var tax_Onbill:number=billAmount*15/100;
    var bill:number=billAmount + tax_Onbill;
    console.log(`Your total units is ${totalUnit}, and your total bill is ${bill} with 15% tax`)
}
    else if (totalUnit > 300) 
{
    var tax_Onbill:number=billAmount*20/100;
    var bill:number=billAmount + tax_Onbill;
    console.log(`Your total units is ${totalUnit}, and your total bill is ${bill} with 20% tax`);
}
     else if (totalUnit > 400) 
{
    var tax_Onbill:number=billAmount*25/100;
    var bill:number=billAmount + tax_Onbill;
    console.log(`Your total units is ${totalUnit}, and your total bill is ${bill} with 25% tax`);
}
     else if (totalUnit > 500) 
{
    var tax_Onbill:number=billAmount*30/100;
    var bill:number=billAmount + tax_Onbill;
    console.log(`Your total units is ${totalUnit}, and your total bill is ${bill} with 30% tax`);
}
    






















