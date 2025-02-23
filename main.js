let str = "Hello World"
// console.log(str.length); // bu length strni uzunligini qaytaradi
// console.log(str.slice(1, 5)); // slice kesib beradi
// console.log(str.slice(-2, -1));// oxiridan kesib beradi

let str2 = "                hello world               "
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















