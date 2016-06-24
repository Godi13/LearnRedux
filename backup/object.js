import except from 'expect';
import deepFreeze from 'deep-freeze';

const toggleTodo = (todo) => {
  return {
    ...todo,
    completed: !todo.completed
  }
};

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  }
  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true
  }

  deepFreeze(todoBefore);

  except(
    toggleTodo(todoBefore)
  ).toEqual(todoAfter);
}

testToggleTodo();
console.log('All test pass');
