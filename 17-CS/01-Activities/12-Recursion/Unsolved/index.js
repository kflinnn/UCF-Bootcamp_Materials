// TODO: Add a comment describing what the `position` parameter means for this function. the position of a value in the fibonacci sequence
const fibonacci = (position) => {
  // TODO: Add a comment describing the purpose of this conditional statement. for all values less than 2, returns the position as the value
  if (position < 2) {
    return position;
  }

  // TODO: Add a comment describing the purpose of this return statement. recursive call finds what the position would be by adding the previoius two positions together to get the value
  return fibonacci(position - 1) + fibonacci(position - 2);
};

// TODO: What will this return? 34
console.log(fibonacci(75));
