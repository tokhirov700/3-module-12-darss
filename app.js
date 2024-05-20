// //1-Masala
// // function  alpha(str, arr) {    
// //     for(var change=[],i=0;i<arr.length;i++){
// //           change[arr[i]]=str[i]
// //     }
// //     return change.join("")
// // }
// // let result = alpha('abcd', [0,3,1,2])
// // document.write(result)

// //2-Masala
// function missingWord(nums, str) {
//     var result = "";
//     var string = str.split(" ").join("");
//     nums.sort((a,b) => a - b);
//     nums.forEach(function(x){ 
//       if(string[x]){
//         result += string[x].toLowerCase();
//       }else{
//         result = "No mission today";
//       }
//     });
//     return result;
//   }
//   document.write(missingWord([4, 0, 3], "I love JavaScript"));

// //3-Masala
// // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // function toNumberArray(stringarray){
// //     return stringarray.map(Number);
// //   }
// // document.write(toNumberArray(array));

// //4-Masala
// // function matn(str) {
// //     let count = []
// //     for(let i = 0; i < str.length; i++) {
// //     count.push((str.slice(i) + str.slice(0,i)).toUpperCase())
// //     }
// //     return count
// // }
// // let result = matn(' codewars ');
// // document.write(result)

// //5-Masala
// // function twoSort(s) {
// //     s.sort()
// //     return s[0].split("").join("***")
// //   }
// // document.write(twoSort(["DOVRONBEK", "AVAZBEK", "SINDOR"]))

// //6-Masala
// // function toNumberArray(string){
// //     return string.split(" ");
// //   }
// // let stringsplit = "I love arrays they are my favorite";
// // console.log(toNumberArray(stringsplit));

// //7-Masala
// // function numbers(arr) {
// //     return arr.split(",").slice(1,-1).join(" ") || null
// // }
// // let result = numbers('1, 2, 3, 4, 5');
// // document.write(result)

// //8-Masala
// // function check (a, x) {
// //     return a.includes(x)
// // }
// // let result = check([1, 2, 3, 4, 5], 3)
// // document.write(result)

// //9-Masala
// function uefaEuro2016(teams, scores){
//     let timeA = teams[0];
//     let timeB = teams[1];
//     let natijaA = scores[0]
//     let natijaB = scores[1]
      
//     if(natijaA > natijaB){
//     return "At match "+ timeA +" - " + timeB + ", " + timeA + " won!";
//     }
//     else if (natijaA < natijaB){
//     return "At match " + timeA + " - " + timeB + ", " + timeB + " won!";
//     }
//     else if (natijaA === natijaB){
//     return "At match " + timeA +" - " + timeB +", teams played draw."
//     }
//     }
//     document.write(uefaEuro2016(['Germany', 'Brazil'], [2, 0]))

// //10-Masala 
// // function text(str) {
// //     for(let i = 0; i< str.length; i++) {
// //          var char = String.fromCharCode(str[i])
// //          if('a, e, i, o, u'.indexOf(char) !== -1) {
// //               str[i] = char
// //          }
// //     }
// //     return str
// // }
// // let result = text(([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);
// // document.write(...result)

// //11-Masala
// // function ArrowFunc(arr){
// //     return arr.map(n => String.fromCharCode(n)).join('');
// // }
// // document.write(ArrowFunc([72, 85, 83, 65, 78, 66, 79, 89]))

                            //ixtiyoriy funksiyalar 2taa
// //12-Masala
// function text(string){
//      var list = {
//        'a': 1, 
//        'e': 2, 
//        'i': 3, 
//        'o': 4, 
//        'u': 5
//      };
//      return text2(string, list);
//    }
//    function text2(string, list) {
//      var array = [];
//      for (i = 0; i <= (string.length); i++) {
//        var char = string.charAt(i);
//        if (char in list) {
//          array.push(list[char]);
//        }
//        else {
//         array.push([char]);
//         }
//      }
//      document.write(array.join(""));
//    }
//    text("How are you today?");

// //13-Masala
// function juftlarbirgalida(number) {
//     const juftSoniQator = [];
//     const toqSoniQator = [];
//     for (let son of number) {
//         if (son % 2 === 0) {
//             juftSoniQator.push(son);
//         } else {
//             toqSoniQator.push(son);
//         }
//     }
//     juftSoniQator.sort((a, b) => a - b);
//     toqSoniQator.sort((a, b) => a - b);
//     const natija = [];
//     const minLength = Math.min(juftSoniQator.length, toqSoniQator.length);
//     for (let i = 0; i < minLength; i++) {
//         natija.push([toqSoniQator[i], juftSoniQator[i]]);
//     }
//     return natija;
// }
// document.write(juftlarbirgalida([1, 2, 3, 4]));