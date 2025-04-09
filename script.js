
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