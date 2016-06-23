import except from 'expect';

const addCounter = (list) => {
  list.push(0);
  return list;
}

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  except(
    addCounter(listBefore)
  ).toEqual(listAfter);
};

testAddCounter();
console.log('All tests pass');
