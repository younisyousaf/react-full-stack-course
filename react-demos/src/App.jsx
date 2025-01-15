import Counter from "./components/Counter";
import Profile from "./components/Profile";
import ShoppingList from "./components/ShoppingList";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <>
      <Counter />
      <TodoList />
      <Profile />
      <ShoppingList />
    </>
  );
};

export default App;
