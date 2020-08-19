
import request from 'superagent';
const URL = process.env.REACT_APP_API_URL;


export function userSignUp(userData) {
    try {
        return request.post(`${URL}/auth/signup`, userData);

    } catch(e) {
      throw { error: e.message }
    }
};
export function userSignIn(userData) {
    try {
        return request.post(`${URL}/auth/signin`, userData)
    }catch(e){
        throw { error: e.message }
    }
}




