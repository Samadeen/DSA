const nemo = ['nemo'];
const large = new Array(100).fill('nemo');

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found Nemo');
      break;
    }
  }
  let t1 = performance.now();
  console.log('Call to find Nemo took ' + (t1 - t0) + ' ms');
}

const findNemo2 = (array) => {
  array.forEach((fish) => {
    if (fish === 'nemo') {
      console.log('Found NEMO!');
    }
  });
};

const findNemo3 = (array) => {
  for (let fish of array) {
    if (fish === 'nemo') {
      console.log('Found NEMO!');
    }
  }
};

findNemo(large); //0(n) --> Linear Time
