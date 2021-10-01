import React, { useState, useEffect } from 'react';

import { api } from '../api';
import Card  from './Card'
import { useServerData } from '../state/serverDataContext';

const Home = () => {
  const [todos, setTodos] = useState([]);

  // search
  const [search, setSearch] = useState(undefined);

  // get data from server
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTodos(tasksFromServer)
    }

    getTasks()
  }, [])

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:3000/api/todos')
    const data = await res.json()
    return data
  }

  return (
    <>

      <div className="container">
        <h1>Home</h1>
      </div>

      <div className="container search_bar">
        <main>
          <div className="srch_wrpr">
            <input type="checkbox" name="" className="checkbox" />
            <div className="srch_sb_cnt">
              <input type="text" name="text_bar" id="" className="sech_txt_inpt" placeholder="Type to search..." 
                value={search} onChange={(e) => setSearch(e.target.value)}
              />
              <button className="srch_btn">
                  <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </main>
      </div>

      <div className="container">

      {search === undefined ? (todos.map((todo) => (

        <Card id={todo.id} postId={todo.postId} name={todo.name} body={todo.body} />

      ))
      ) : ('')
      }

      {search !== undefined ? (
        todos.filter((todo) => (
          todo.name.toLowerCase().includes(search.toLowerCase()))).map((todo) => (

            <Card id={todo.id} postId={todo.postId} name={todo.name} body={todo.body} />
          
        ))
      )
      : ('')
      }

      {todos.length === 0 ? (
        <div class="example">
          <span class="smooth spinner" />
        </div>
 ) : ('')
      }

      </div>
      
    </>
  );
};

Home.fetchData = () => {
  return api.todos.all().then(todos => {
    return {
      todos
    };
  });
};

export default Home;
