import axios from "axios";

const instatce = axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.0/todo-lists",
    withCredentials: true,
    headers: {"API-KEY": "0664f420-b861-4c2f-8ccf-f47b83f9a094"}
});
export const api = {
    createTask(todolistId, newTaskTitle){
        return instatce.post(`/${todolistId}/tasks`, {title: newTaskTitle});
    },
    createTodolist(todolistTitle){
        return instatce.post("", {title: todolistTitle})
    },
    getTodolists(){
        return  instatce.get("")
    },
    getTasks(todolistId){
        return instatce.get(`/${todolistId}/tasks`)
    },
    updateTask(task){
       return instatce.put ('/tasks', task)
    },
    deleteTodolist(todolistId){
        return instatce.delete(`/${todolistId}`)
    },
    deleteTask(taskId){
      return  instatce.delete(`/tasks/${taskId}`)
    },
    updateTitleTodoList(todoListId, newTodoListTitlte){
        return instatce.put(`https://social-network.samuraijs.com/api/1.0/todo-lists/${todoListId}`,
            {title:newTodoListTitlte});
    }
};