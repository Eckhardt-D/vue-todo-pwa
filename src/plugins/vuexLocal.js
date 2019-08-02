import localForage from "localforage";
import randomID from "uuid/v4";

const createTodo = async ({ title, status = "incomplete" }, store) => {
  const todo = { id: randomID(), title, status };
  const todos = [...store.state.todos, todo];
  store.commit("UPDATE_TODOS", todos);
  await localForage.setItem("APP_DATA", todos);
};

const updateTodo = async (payload, store) => {
  const todos = store.state.todos;
  todos.forEach(todo => {
    if (todo.id == payload.id) {
      todo.title = payload.title;
      todo.status = payload.status;
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
      default:
        break;
    }
  });

export default subscriber;
