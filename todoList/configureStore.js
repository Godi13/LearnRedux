import { createStore } from 'redux'
import todoApp from './reducers'
import { saveState, loadState } from './localStoreage'
import throttle from 'lodash/throttle'

const configureStore = () => {
  const persistedState = loadState()
  const store = createStore(
    todoApp,
    persistedState
  )

  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    })
  }, 1000))

  return store
}

export default configureStore
