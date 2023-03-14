// Create our input data
const unsortedInputArray = [2, 42, 100, 23, 500, 34];

// seed data in unsortedInputArray
for (let i = 0; i < 2000; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

// TODO: create merge sort function
const mergeSort = (array) => {
  if (array.length <= 1) return array;

  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  return mergeSort(left, right);
};

const sorted = mergeSort(unsortedInputArray);
console.log('Post Sort:', sorted.join(' '));
console.log('DONE!');
