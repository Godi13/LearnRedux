import except from 'expect';
import deepFreeze from 'deep-freeze';

const addCounter = (list) => {
  return list.concat(0);
}

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore)

  except(
    addCounter(listBefore)
  ).toEqual(listAfter);
};

testAddCounter();
console.log('All tests pass');
