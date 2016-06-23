import except from 'expect';
import deepFreeze from 'deep-freeze';

const addCounter = (list) => {
  return [...list, 0]
}

const removeCounter = (list, index) => {
  return list
    .slice(0, index)
    .concat(list.slice(index + 1));
}

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);

  except(
    addCounter(listBefore)
  ).toEqual(listAfter);
};

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];

  deepFreeze(listBefore);

  except(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter);
}

testAddCounter();
testRemoveCounter();
console.log('All tests pass');
