import except from 'expect';

const toggleTodo = (todo) => {
  todo.completed = !todo.completed;
  return todo;
};

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    test: 'Learn Redux',
    completed: false
  }
  const todoAfter = {
    id: 0,
    test: 'Learn Redux',
    completed: true
  }

  except(
    toggleTodo(todoBefore)
  ).toEqual(todoAfter);
}

testToggleTodo();
console.log('All test pass');
