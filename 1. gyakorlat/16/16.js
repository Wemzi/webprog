const tombocske = [[1,2,3],[4,5,6],[7,8,9]];
const ikszde = [[2,2,2],[2,2,2],[4,4,4]];
console.log(tombocske.every(kistomb => kistomb.every( elem => elem % 2 === 0)));
console.log(ikszde.every(kistomb => kistomb.every( elem => elem % 2 === 0)));

