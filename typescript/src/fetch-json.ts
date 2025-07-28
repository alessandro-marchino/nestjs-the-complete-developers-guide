import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo: Todo = response.data;
  const { id, title, completed } = todo;
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
});
