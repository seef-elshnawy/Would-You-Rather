import { SETAUTH_USER ,LOG_OUT} from "../action/authuser";
export function authUser(state=null,action){
  /*here  I set state null because I want in logout the authUser reducer return to null*/

switch(action.type){
 case SETAUTH_USER:
    return action.user
  case LOG_OUT:
    return action.logout    
default: 
    return state
}
}