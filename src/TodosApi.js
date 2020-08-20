
import request from 'superagent';
const URL = process.env.REACT_APP_API_URL;


export function userSignUp(userData) {
    try {
        return request.post(`${URL}/auth/signup`, userData);

    } catch(e) {
      return { error: e.message }
    }
};
export function userSignIn(userData) {
    try {
        return request.post(`${URL}/auth/signin`, userData)
    }catch(e){
        return { error: e.message }
    }
}

export function getTodos() {
    const token = localStorage.getItem('token');

    try {
        return request
            .get(`${URL}/api/todos`)
            .set('Authorization', token);
    

    }catch(e){
        return { error: e.message }
    }
}

export function createTodo(todoData){
    const token = localStorage.getItem('token');
    return request.post(`${URL}/api/todos`, todoData)
        .set('Authorization', token);
        
}
export function getTodo(id) {
    const token = localStorage.getItem('token');
    return request.get(`${URL}/api/todos/${id}`)
        .set('Authorization', token);
}


export function deleteTodo(id) {
    console.log(id);
    const token = localStorage.getItem('token');
     return request.delete(`${URL}/api/todos/${id}`)
        .set('Authorization', token);
         
     
 }

