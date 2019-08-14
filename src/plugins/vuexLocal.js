import localForage from "localforage";
import randomID from "uuid/v4";

const createTodo = async ({ title, complete = false }, store) => {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1); // Only for testing previous

  const todo = {
    created: today,
    id: randomID(),
    title,
    complete
  };
  const todos = [...store.state.todos, todo];
  store.commit("UPDATE_TODOS", todos);
  await localForage.setItem("APP_DATA", todos);
};

const updateTodo = async (payload, store) => {
  const todos = store.state.todos;
  todos.forEach(todo => {
    if (todo.id == payload.id) {
      todo.title = payload.title;
      todo.complete = payload.complete;
    }
  });

  store.commit("UPDATE_TODOS", todos);
  await localForage.setItem("APP_DATA", todos);
};

const deleteTodo = async (payload, store) => {
  const todos = store.state.todos;
  let updated = todos.filter(t => t.id !== payload.id);
  store.commit("UPDATE_TODOS", updated);
  await localForage.setItem("APP_DATA", updated);
};

const syncTodos = async payload => {
  await localForage.setItem("APP_DATA", payload);
};

const subscriber = store =>
  store.subscribe(({ type, payload }, _) => {
    switch (type) {
      case "CREATE":
        createTodo(payload, store).catch(e => console.error(e));
        break;
      case "UPDATE":
        updateTodo(payload, store).catch(e => console.error(e));
        break;
      case "DELETE":
        deleteTodo(payload, store).catch(e => console.error(e));
        break;
      case "SYNC":
        syncTodos(payload).catch(e => console.error(e));
      default:
        break;
    }
  });

export default subscriber;
