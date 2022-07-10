import axios from "axios";

export async function getTodos() {
  try {
    const {
      data: { todos },
    } = await axios.get("http://localhost:3000/api/v1/to-dos");
    //console.log(todos);
    return todos;
  } catch (_error) {
    return [];
  }
}

export async function updateTodoData(todoId, todoData) {
  try {
    console.log("HERE", todoData);
    await axios.patch(`http://localhost:3000/api/v1/to-dos/${todoId}`, {
      ...todoData,
    });
  } catch ({ response }) {
    console.log(response);
    throw new Error(response.data.message);
  }
}