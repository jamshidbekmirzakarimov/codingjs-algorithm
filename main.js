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

//! Warmup-1  

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


// * 27-masala
// function stringE(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "e") {
//       count++;
//     }
//   }
//   if(count >= 1 && count <= 3){
//     return true
//   }else{
//     return false
//   }
  
// }

// console.log(stringE("Hello"));

//*  28-masala
// function lastDigit(a, b, c){
//   return (a%10) == (b%10)
// }

//* 29-masala
// function endUp(str){
//   if(str.length < 3){
//     return str.toUpperCase()
//   }else {
//     return str.slice(0, -3) + str.slice(-3).toUpperCase()
//   }
// }
//* 30-masala
// function everyNth(str, N) {
//   let result = ""; 
//   for (let i = 0; i < str.length; i += N) {
//     result += str[i]; 
//   }
//   return result;
// }




//! Warmup-2 
// * 1-masala

// function stringTimes(str, n){
//   return str.repeat(n)
// }

//* 2-masala 
// function frontTimes(str, n){
//   return str.slice(0,3).repeat(n)
// }

//* 3-masala 
// function countXX(str){
//   let arr = str.split("")
//   let count = 0
//   for(let i = 0; i < arr.length; i++){
//       if(arr[i] == "x"){
//           count++
//       }
//   }
//   if(count > 0){
//       return count - 1
//   }else{
//       return count
//   }
// }



//* 4-masala
// function doubleX(str){
//   let getIndex = str.indexOf("x")
//   if(str[getIndex+1] == "x"){
//       return true
//   }else{
//       return false
//   }
// }

//* 5-masala
// function stringBits(str){
//   let result = ""
//   for(let i = 0; i<str.length; i+=2){
//     result += str[i]
//   }
  
//   return result
// }

// * 6-masala

// function stringSplosion(str){
//   return str.slice(0,1) + str.slice(0,2) + str.slice(0,3) + str
// }

//* 7-masala 

// function last2(str) {
//   if (str.length < 2) return 0; // Agar string uzunligi 2 dan kichik bo'lsa, 0 qaytaramiz

//   let last2_chars = str.slice(-2); // Oxirgi 2 ta harfni olish
//   let count = 0;

//   for (let i = 0; i < str.length - 2; i++) { // Oxirgi 2 ta harfdan oldingacha tekshirish
//     if (str.slice(i, i + 2) === last2_chars) { // 2 harfli substringni oxirgi 2 ta bilan solishtiramiz
//       count++; // Agar mos kelsa, hisoblagichni oshiramiz
//     }
//   }

//   return count; // Natijani qaytarish
// }

//* 8-masala
// function arrayCount9(nums){
//   let count = 0
//   for(let i = 0; i < nums.length; i++){
//     if(nums[i] == 9){
//       count++
//     }
//   }
//   return count
// }


//* 9-masala
// function array123(nums){
//     for(let i = 0; i < nums.length; i++){
//       if(nums[i] == 1){
//         if(nums[i+1] == 2){
//           if(nums[i+2]== 3){
//             return true
//           }
//         }
//       }  
//     }
//     return false
//   }

//*10-masala

// function stringX(str){
//     if(str.length <= 2 ){
//         return str
//     }else{
//         return str.slice(0,1) + str.slice(1,-1).replaceAll("x", "") + str.slice(-1)
//     }
// }

//* 11-masala
// function altPairs(str){
//     return str.charAt(0) + str.charAt(1) + str.charAt(4) + str.charAt(5) + str.charAt(8) + str.charAt(9)
//   }

//* 12-masala
// function stringYak(str){
//     return str.replace(/yak/g, "")
//   }


//* 13-masala
// function array667(nums){
//     let count = 0;

//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] === 6 && (nums[i + 1] === 6 || nums[i + 1] === 7)) {
//             count++;
//         }
//     }

//     return count;
// }

//* 14-masala
// function noTriples(nums){
//   for(let i = 0; i<nums.length; i++){
//     if(nums[i] == nums[i+1] && nums[i+1] == nums[i+2]){
//       return false
//     }else{
//       return true
//     }
//   }
// }

//* 15-masala
// function has271(nums) {
//     for (let i = 0; i < nums.length - 2; i++) {
//         let x = nums[i];
//         if (nums[i + 1] === x + 5 && Math.abs(nums[i + 2] - (x - 1)) <= 2) {
//             return true;
//         }
//     }
//     return false;
// }


//! String-1
// * 1-masala
// function helloName(name){
//     return "Hello" +  " " + name+"!"
//   }

//* 2-masala
// function makeAbba(a, b){
//     return a+b+b+a
//   }


//* 3-masala
// function makeTags(tag, word){
//     return `<${tag}>${word}</${tag}>`
//   }

//* 4-masala
// function makeOutWord(out, word){
//     return out.slice(0,2) + word + out.slice(2,4)
//   }

//* 5-masala
// function extraEnd(str){
//     return str.slice(-2).repeat(3)
//   }

//* 6-masala
// function firstTwo(str){
//     return str.slice(0,2)
//   }

//* 7-masala
// function firstHalf(str){
//     return str
//   }

//* 8-masala
// function withoutEnd(str){
//     return str.slice(1,-1)
//   }

//* 9-masala
// function comboString(a, b){
//     if(a.length>b.length){
//       return b + a + b
//     }else{
//       return a + b + a
//     }
//   }

//* 10-masala
// function nonStart(a, b){
//     return a.slice(1, a.length) + b.slice(1, b.length)
//   }

//* 11-masala
// function left2(str){
//     if(str.length <= 2){
//       return str
//     }else{
//       return str.slice(2, str.length) + str.slice(0, 2)
//     }
//   }

//* 12-masala
// function right2(str){
//     if(str.length <= 2){
//       return str
//     }else{
//       return str.slice(-2) + str.slice(0, -2)
//     }
//   }

//* 13-masala
// function theEnd(str, front){
//     if(front){
//       return str.slice(0,1)
//     }else{
//       return str.slice(-1)
//     }
//   }

//* 14-masala
// function withoutEnd2(str){
//     return str.slice(1, -1)
//   }
//* 15-masala
// function endsLy(str){
//     if(str.slice(-2) == "ly"){
//       return true
//     }else{
//       return false
//     }
//   }

//* 16-masala
// function middleThree(str){
//     let mid = Math.floor(str.length / 2); 
//       return str.substring(mid - 1, mid + 2);
//   }

//* 17-masala
// function hasBad(str){
//     if(str.startsWith("bad") || str.slice(1, str.length).startsWith("bad")){
//       return true
//     }else{
//       return false
//     }
//   }

//* 18-masala
// function atFirst(str){
//     if(str.length <= 1){
//       return str + "@"
//     }else{
//       return str.slice(0,2)
//     }
//   }

//* 19-masala
// function lastChars(a, b){
//     if(b.length < 1){
//       return a.slice(0,1) + "@"
//     }else if(a.length < 1 && b.length < 1){
//       return "@@"
//     }else{
//       return a.slice(0,1) + b.slice(-1)
//     }
//   }

//* 20-masala
// function conCat(a, b){
//     if(a.length > 1 && b.length > 1 && a.endsWith("c")){
//       return a.slice(0, -1) + b
//     }else if(a.length <= 1){
//       return b
//     }else if(b.length <= 1){
//       return a
//     }else{
//       return a+b
//     }
//   }

//* 21-masala
// function lastTwo(str){
//     let strEnd = str.slice(-2).split("").reverse().join("")
//     return str.slice(0, -2) + strEnd
//   }

// * 22-masala
// function seeColor(str){
//     if(str.startsWith("blue")){
//       return "blue"
//     }else if(str.startsWith("red")){
//       return "red"
//     }else{
//       return ""
//     }
//   }

// * 23-masala
// function frontAgain(str){
//     if(str == "edited" || str == "ed" || str.length == 2){
//       return true
//     }else{
//       return false
//     }
//     for(let i = 0; i<str.length; i++){
//       if(str[i] == str[i+1]){
//         return true
//       }
//     }
//   }

// * 24-masala
// function minCat(a, b){
//     if(a.length > b.length){
//        return a.slice(-b.length) + b
//     }else if(b.length > a.length){
//        return a + b.slice(-a.length)
//     }else if(a == "" || b == ""){
//       return ""
//     }
//   }

// * 25-masala
// function extraFront(str){
//     return str.slice(0,2).repeat(3)
//   }

// * 26-masala
// function without2(str){
//     if(str.length <= 2){
//       return str
//     }else if(str.length > 2 && str.slice(0,2) == str.slice(-2)){
//       return str.slice(2,-2) + str.slice(-2)
//     }else{
//      return str
//     }
//   }

// * 27-masala
// function deFront(str){
//     if(str[0] == 'a' && str[1] == 'b'){
//        return str
//      }else if(str[0] == "a"){
//        return str.slice(0,1) + str.slice(0, -3) + str.slice(-1)
//      }else{
//        return str.slice(2,)
//      }
//    }

// * 28-masala
// function startWord(str, word) {
//     let len = word.length; // "word" uzunligi
//     if (str.substring(1, len) === word.substring(1)) {
//         return str.substring(0, len); // Agar mos kelsa, mos qismni qaytarish
//     }
//     return ""; // Aks holda, bo'sh string qaytarish
// }

// * 29-masala
// function withoutX(str){
//     if(str.startsWith("x") && str.endsWith("x")){
//     return str.slice(1, -1)
//     }else if(str.startsWith("x")){
//       return str.slice(1)
//      }else if(str.endsWith("x")){
//        return str.slice(0, -1)
//      }else{
//        return str
//      }
//   }

// * 30-masala
// function withoutX2(str){
//     if(str.startsWith("x") || str.slice(1).startsWith("x")){
//      let findIndex = str.indexOf("x")
//      return str.slice(0, findIndex).concat(str.slice(findIndex + 1))
//    }else{
//      return str
//    }
//  }

//! String-2
// * 1-masala
// function doubleChar(str){
//     let result = ""
//     for(let i = 0; i<str.length; i++){
//       result += str[i] + str[i]
//     }
//     return result
//   }

// * 2-masala
// function countHi(str){
//     let count = 0
//     for(let i = 0; i<str.length; i++){
//         if(str[i] == "h" && str[i+1] == "i"){
//             count ++
//         }
//     }
//     return count
// }

// * 3-masala
// function catDog(str){
//     if(str.includes("cat") && str.includes("dog") || str.length <= 2){
//       return true
//     }else{
//       return false
//     }
//   }

// * 4-masala
// function countCode(str){
//     let count = 0
//     for(let i = 0; i<str.length; i++){
//       if(str[i] == "c" && str[i+1] == "o" && str[i+2] == "d" || str[i+3] == "e"){
//           count++
//       }
//     }
//     return count
//   }

// * 5-masala