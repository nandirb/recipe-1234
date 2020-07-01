const arr = [12, 3, 2, 23, 3];
let fnc = (a) => {
  console.log(`too bol: ${a}`);
};
const arr2 = [...arr, 244];

fnc(arr2[1]);
