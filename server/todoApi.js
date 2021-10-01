import { Router } from 'express';

export const todoRoutes = () => {
  const todoRoutes = new Router();
  let todos = [];

  // public API fetch
  async function loadAPI() {
      const url = `https://jsonplaceholder.typicode.com/comments`
      fetch(url)
      .then(response => response.json()) 
      .then(result => {
        todos = result;
      })
  }

  todoRoutes.get('/api/todos', (_req, res) => {
    loadAPI().then(() => 
    {setTimeout(() => {
      res.json(todos);
    }, 300)}
    )
  });

  todoRoutes.post('/api/todos', (req, res) => {
    const newTodo = req.body;
    newTodo.id = Date.now();

    todos.push(newTodo);

    setTimeout(() => {
      res.json(newTodo);
    }, 100);
  });

  return todoRoutes;
};
