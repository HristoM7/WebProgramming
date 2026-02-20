import "./App.css";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import AdvancedCounter from "./components/AdvancedCounter";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>useState Hook Демонстрация</h1>
        <p className="subtitle">
          Примери за използване на useState в React с TypeScript
        </p>
      </header>

      <main className="app-main">
        <Counter />
        <UserProfile />
        <AdvancedCounter />
        <TodoList />
      </main>

      <footer className="app-footer">
        <p>Примери за React useState Hook</p>
      </footer>
    </div>
  );
};

export default App;
