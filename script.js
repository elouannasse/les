// function bonjour() {
//     console.log("zakaria");
//   }

//   bonjour();

//   function addition(a, b) {
//     return a + b;
//   }

//   console.log(addition(2, 4));

//   function estPair(nbr) {
//     if (nbr % 2 === 0) {
//       console.log("pair");
//     } else {
//       console.log("impair");
//     }
//   }

//   estPair(3);

//   function factorielle(n) {
//     let f = 1;
//       for (let i = n; i > 1; i--) {
//         f *= i;
//       }
//       return f
//   }

//   console.log(factorielle(4));

//   function maximum(a,b){

//       let max=a;

//       if (max>b) {
//           console.log(a)
//       }else{
//           console.log(b)

//       }
//   }

//   console.log(maximum(9,10))

//   function bienvenue(name){
//   return  name
//   }

//   console.log(bienvenue("aminnenenen"))

//   function sommeTble(table){
//       let somme=0;

//       for (let i = 0; i < table.length; i++) {
//       somme+=table[i];

//       }
//       return somme
//   }

//   tb=[5,2,3]

//   console.log(sommeTble(tb));

//   function inversechaine(chaine){

//       let motinverse=""
//       let lengthdemot=chaine.length

//       for (let i =lengthdemot-1 ; i >= 0; i--) {

//           motinverse+=chaine[i];

//       }
//       return motinverse
//   }

//   console.log(inversechaine("bro"))

//   function estpalindrome(chaines){

//       let motIInverse=""
//       let lengthdemottt=chaines.length

//       for (let i = lengthdemottt-1; i >= 0; i-- ){

//           motIInverse+=chaines[i]
//       }
//       return (motIInverse===chaines)
//       ;

//   }

//   console.log(estpalindrome("radar"))

// somaine 2

//facile--------------------------------------

// let nbr = 0;

// if (nbr > 0) {
//   console.log("positive");
// } else {
//   console.log("Négatif ou nul");
// }

// //--------------

// let age = 10;
// if (age > 18) {
//   console.log("majeur");
// } else {
//   console.log("mineur");
// }

// //moyenes---------------------------

// function estAdulte(age) {
//   return age > 18;
// }

// console.log(estAdulte(9));
// //--------------

// let key = 3;

// switch (key) {
//   case 1:
//     console.log("lundi");
//     break;

//   case 2:
//     console.log("mardi");

//     break;
//   case 3:
//     console.log("mercredi");

//     break;
//   case 4:
//     console.log("jeudi");

//     break;
//   case 5:
//     console.log("vendredi");

//     break;
//   default:
//     break;
// }

// //--------------

// var nom = 5;

// if (nom % 2 === 0) {
//   console.log("pair");
// } else {
//   console.log("impair");
// }

// //--------------

// function maxTrois(a, b, c) {
//   let max = a;
//   if (max < b) {
//     max = b;

//     // console.log(max);
//   }

//   if (max>c) {
//     console.log(max);
//   }else{
//     max = c;
//   console.log(max);

//   }
// }

// maxTrois(12,200,3);

// Difficiles

// function calculatrice(a, b, operation) {

//     switch (operation) {
//         case 'plus':
//             return a+b;
//             break;

//             case 'moins':
//                 return a-b;

//             break;
//             case 'sur':
//                 return a/b;

//             break;
//             case 'mult':
//                 return a*b;

//             break;
//         default:
//             console.log("error")
//             break;
//     }
// }

// console.log(calculatrice(3,3,"mult"))

// //---------------
// function bissextile (annee) {

//     if ((annee%4===0 && annee%100!=0)||(annee%400===0) ) {
//         return true
//     }
//     return false

// }

// let ann=2024
// console.log(bissextile(ann))

// jour 4

// facile

//  let t = [1,2,3,4,5] ;
//  console.log(t[2]) ;
//  console.log(t[3]) ;
//  for(let i = 0 ; i< t.length ;i++){
//     console.log(t[i]) ;
//  }

// // moyens
// function sommeTableau(tableau) {
//     let total = 0;
//     for (let i = 0; i < tableau.length; i++) {
//       total += tableau[i];
//     }
//     return total / tableau.length;
//   }

//   let tablee = [2, 2, 4,5,8];
//   console.log(sommeTableau(tablee));

//   let a = 10;
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= a);

// let arrayp = [];
// let arrayimp = [];

// for (let i = 0; i < 20; i++) {
//   if (i % 2 === 0) {
//     arrayp.push(i);
//   } else {
//     arrayimp.push(i);
//   }
// }

// console.log(arrayp);
// console.log(arrayimp);

// let tableinverse = [18, 19, 20];

// for (let i = tableinverse.length - 1; i >= 0; i--) {
//   console.log(tableinverse[i]) ;
// }

// // defficile
// function trouverMax(tableau) {
//     let max = [0];
//     for (let i = 0; i < tableau.length; i++) {
//       if (max > tableau[i]) {
//         console.log(max)
//       } else {
//         max = tableau[i];
//         console.log(max)
//       }
//     }
//     return max;
//   }

//  let array1 = [7, 8, 3];
// let array2 = [2, 4, 2];
// let mergedArray = [];

// for (let i = 0; i < array1.length; i++) {
//   mergedArray.push(array1[i]);
// }
// for (let i = 0; i < array2.length; i++) {
//   mergedArray.push(array2[i]);
// }


// for (let i = 0; i < mergedArray.length; i++) {

//     for (let z = 0; z < mergedArray.length-1; z++) {

//         let swap
//         if (mergedArray[z+1]<mergedArray[z]) {
//             swap=mergedArray[z];
//             mergedArray[z]=mergedArray[z+1];
//             mergedArray[z+1]=swap;
//         }
//     }
    
// }

// tchalnge aziz 

let array = [2, 3, 7, 2, 10, 1, 8, 1, 9, 12, 4];
let plusQueDix = [];
curentSum = 0
sum = 0

for(let i = 0 ; i < array.length;i++){
    curentSum += array[i]
    if (curentSum >= 10) {
        curentSum += sum
        plusQueDix.push(curentSum)
        sum += curentSum
        curentSum = 0
        curentSum += array[i]
    }
    
}

console.log(plusQueDix);


let tabledoblon=[1,2,2,3] ;

for (let i = 0; i < tabledoblon.length; i++) {

if (tabledoblon[i]===tabledoblon[i+1]) {

    tabledoblon.splice(i+1,1)
}
    
}
console.log(tabledoblon) ;
