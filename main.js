let str = "Hello World";
// console.log(str.length); // bu length strni uzunligini qaytaradi
// console.log(str.slice(1, 5)); // slice kesib beradi
// console.log(str.slice(-2, -1));// oxiridan kesib beradi

let str2 = "                hello world               ";
// console.log(str2.trim());// trim bu chap va o'sh tomondagi bo'sh joylarni olib tashlaydi
// console.log(str2.trimStart());// trimStart chap tomondagi bo'sh joylarni olib tashlaydi
// console.log(str2.trimEnd());// trimEnd o'sh tomondagi bo'sh joylarni olib tashlaydi

// console.log(str.split(" ")); // split bu bo'lib beradi yani qandaydur element qabul qiladi misol uchun probel bo'lsa shu probel bo'yich bo'lib beradi.

// console.log(str.startsWith("h")); // bu shu hafdan boshlanganmi deb tekshiradi agar to'g'ri bo'lsa true qaytaradi
// console.log(str.endsWith("d")); // bu shu hafdan oxirgi deb tekshiradi agar to'g'ri bo'lsa true qaytaradi
// console.log(str.startsWith("l", 3)); // bu 3indexda turgan element l ga tengmi deb tekshiradi.

// console.log(str.replace("hello", "salom")); // replace bu ikkita qiymat qabul qiladi birinchisi o'zgartirmoqchi bo'lgan so'zimiz ikkinchisi o'rniga qo'ymoqchi bo'lgan so'zimiz bu faqat birinchi qiymatni o'zgartiradi.
// console.log(str.replaceAll("l", "L")); // replaceAll hamma qiymatlarni o'zgartiradi. yani l dan nechta bo'lsa shularni hammasini

// console.log(str.slice(0,5).repeat(3)); // repeat bu bu elementni takrorlab beradi.

// console.log(str.toLowerCase()); // bu hamma harflarni kichik qilib beradi.
// console.log(str.toUpperCase()); // bu hamma harflarni katta qilib beradi.

// console.log(str.includes("hello")); // bu qidirib bor bo'lsa true qaytaradi.
// console.log(str.concat(" js")); // bu oxiriga qo'shib beradi.
// console.log(str.charAt(0)); // bu qiymatni index yozilga o'sha indexdagi qiymatni chiqarib beradi
// console.log(str.charCodeAt(0)); // bu elementni aski jadvaldagi o'rnini olib beryapti
// let a = "jamshidbek"
// console.log(a.slice(-1));

//! coding js algorithm

//* 1-masala
// function sleepIn(weekday, vacation){
//     return weekday && vacation || weekday && vacation
//   }

//   console.log(sleepIn(false, false));

//* 2-masala
// function monkeyTrouble(aSmile, bSmile){
//     return aSmile && bSmile || !aSmile || !bSmile && aSmile || bSmile
//   }

//* 3-masala
// function sumDouble(a, b){
//     if(a != b){
//       return a+b
//     }else{
//       return (a+b)*2
//     }
//   }

//* 4-masala
// function diff21(n){
//     if(n > 21){
//       return Math.abs(21 - n)*2
//     }else{
//       return Math.abs(21 - n)
//     }

//   }

//* 5-masala
// function parrotTrouble(talking, hour){
//     return talking && hour < 7 || hour > 20
//   }

//* 6-masala
// function makes10(a, b){
//     return a+b==10 || a == 10 || b==10
//   }

//* 7-masala
// function nearHundred(n){
//     return 100 - n <= 10 || 200 - n <= 10
//   }

//* 8-masala
// function posNeg(a, b, negative){
//     return a && b && negative && a && b || negative
//   }

//* 9-masala
// function notString(str){
//     if(str.startsWith("not")){
//       return str
//     }else{
//       return "not" + " " + str
//     }
//   }

//* 10-masala
// function missingChar(str, n){
//     return str.slice(0, n) + str.slice(n+1)
//   }

//* 11-masala
// function frontBack(str){
//     if(str.length > 1){
//       return str.slice(-1) + str.slice(1, str.length - 1) + str.slice(0,1)
//     }else{
//       return str
//     }
//   }

//* 12-masala
// function front3(str){
//     return str.slice(0,3).repeat(3)
//   }

//* 13-masala
// function backAround(str){
//     return str.slice(-1) + str + str.slice(-1)
//   }

//* 14-masala
// function or35(n){
//     if(n % 3 == 0 || n % 5 == 0){
//       return true
//     }else {
//       return false
//     }
//   }

//* 15-masala
// function front22(str){
//     return str.slice(0,2) + str + str.slice(0,2)
//   }

//* 16-masala
// function startHi(str){
//     return str.startsWith("hi")
//   }

//* 17-masala
// function icyHot(temp1, temp2){
//     if(temp1 < 0 && temp2 > 100 || temp1 > 100 && temp2 < 0){
//       return true
//     }else{
//       return false
//     }

//   }

//* 18-masala
// function in1020(a, b){
//     return a > 10 || b < 20 && a < 20 && b > 10
//   }

//* 19-masala
// function hasTeen(a, b, c){
//     if((a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19)){
//       return true
//     }else{
//       return false
//     }
//   }

// * 20-masala
// function loneTeen(a, b){
//     let isATeen = (a >= 13 && a <= 19);
//        let isBTeen = (b >= 13 && b <= 19);

//        return isATeen !== isBTeen;
//    }

//* 21-masala
// function delDel(str){
//     if(str.slice(1, 4) == "del"){
//       return str.slice(0,1) + str.slice(4, str.length)
//     }else{
//       return str
//     }

//   }

//* 22-masala
// function mixStart(str){
//     return str.startsWith("mix") || str.slice(1, 3).startsWith("ix")
//   }

//* 23-masala
// function startOz(str) {
//   if (str.slice(0, 2) == "oz") {
//     return str.slice(0, 2);
//   } else if (str.slice(0, 1) == "o") {
//     return str.slice(0, 1);
//   } else {
//     return str.slice(1, 2);
//   }
// }

//* 24-masala
// function intMax(a, b, c){
//     if(a > b){
//       return a
//     }else if(a > c){
//       return a
//     }else if(b > a){
//      return b
//     }else if(b > c){
//      return b
//     }else if(c > a){
//      return c
//     }else if(c > b){
//      return c
//     }
    
//   }

// * 25-masala
// function in3050(a, b){
//     if(a >= 30 && a <= 40 && b >= 30 && b <= 40){
//       return true
//     }else if(a >= 40 && a <= 50 && b >= 40 && b <= 50){
//       return true
//     }else{
//       return false
//     }
//   }
//   console.log(in3050(40, 50));
  
// * 26-masala
// function max1020(a, b){
//     if(a>=10 && a <= 20 || b >= 10 && b <= 20){
//       if(a>b){
//         return a
//       }else {
//         return b
//       }
      
//     }else{
//       return 0
//     }
//   }

    
  
