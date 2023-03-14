// Create our input data
const unsortedInputArray = [234, 43, 55, 63, 5, 6, 235, 547];

// seed data in unsortedInputArray
for (let i = 0; i < 2000; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

// TODO: create bubble sort function
const bubbleSort = (array) => {

  for (let i = 0; i < array.length; i++) {
    //the last i elements are already in place
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j+1]) {
        let temp = array[j];
        array[j] = array[j+1];
        array[j + 1 ] = temp;
      }
      
    }
    
  }
  return array;
};

const sorted = bubbleSort(unsortedInputArray);
console.log('Post Sort:', sorted.join(' '));
console.log('DONE!');
