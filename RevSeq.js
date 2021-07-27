const reverseSeq = n => {
    let arr = [];
    let amount = n;
    for (let i = 0; i < amount; i++){
        arr.push(n);
        n = n - 1;
    }
    return arr;
  };


// function reverseSeq(n) {
//     let arr = [];
//     let amount = n;
//     for (let i = 0; i < amount; i++){
//         arr.push(n);
//         n = n - 1;
//     }
//     return arr;
//   };

console.log(reverseSeq(7)); // returns: [5, 4, 3, 2, 1]

