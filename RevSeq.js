// const reverseSeq = n => {
//     for (let i = 0; i < n.length; i++){
//         return [];
//     }
//   };


function reverseSeq(n) {
    let text = "";
    for (let i = 0; i <= n; i++){
        text += "The number is " + i + "\n";
    }
    return text;
  };

console.log(reverseSeq(5)); // returns: [5, 4, 3, 2, 1]