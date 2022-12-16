const sumAll = function(from, to) {
  let sum = 0;
  let small;
  let large;

  if(from < 0 || to < 0 || typeof(from) != 'number' || typeof(to) != 'number') return 'ERROR';
  
  if(from < to){
    small = from;
    large = to;
  }else{
    small = to;
    large = from;
  }

  for(let i = small; i <= large; i++) {
    sum += i;
  }
  return sum
};

// Do not edit below this line
module.exports = sumAll;

