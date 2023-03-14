// Create our input data
const unsortedInputArray = [2, 42, 100, 23, 34];
// seed data in unsortedInputArray
for (let i = 0; i < 2000; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

// TODO: create quick sort function
const quickSort = (array) => {
  const a = [...array];
  if (a.length < 2) return a;
  const pivotIndex = Math.floor(array.length / 2);
  const pivot = a[pivotIndex];
  const [lo, hi] = a.reduce (
    (acc, val, i) => {
      if (val < pivot || (val === pivot && i != pivotIndex)) {
        acc[0].push(val);
      } else if (val > pivot) {
        acc[1].push(val);
      }
      return acc;
    },
    [[],[]]
  );
  return [...quickSort(lo), pivot, ...quickSort(hi)];
};

const sorted = quickSort(unsortedInputArray);
console.log('Post Sort:', sorted.join(' '));
console.log('DONE!');
