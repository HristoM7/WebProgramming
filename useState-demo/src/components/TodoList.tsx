import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() === '') return;
    
    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false
    };
    
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInput('');
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Списък със задачи</h2>
      
      <div style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Добави нова задача..."
          style={{
            padding: '8px',
            flex: 1,
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
        />
        <button
          onClick={addTodo}
          style={{
            padding: '8px 16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Добави
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              padding: '10px',
              marginBottom: '8px',
              backgroundColor: todo.completed ? '#e8f5e9' : '#f5f5f5',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#666' : '#000'
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              style={{ cursor: 'pointer' }}
            />
            <span style={{ flex: 1 }}>{todo.text}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{
                padding: '4px 8px',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Изтрий
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p style={{ textAlign: 'center', color: '#999' }}>Няма задачи. Добави първата си задача!</p>
      )}
    </div>
  );
}
