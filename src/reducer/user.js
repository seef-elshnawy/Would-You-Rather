import {GETUSER,SAVEANSWERSUSERS,ADD_QUESTIONUSER} from '../action/user'
export function users(state={},action){
    switch(action.type){
        case GETUSER:
          /*in this reducer we nedd to invoke user's */
         return{
         ...state,
         ...action.users
         }
        case SAVEANSWERSUSERS:{
             const { authUser, qid, answer} = action;
       
      return {
        /*in this reducer we return all users and edit authUser and we will return authUser and edit answers
        and return all answers from authenticate user and add the new answer to question
        but I need to question id to add answer to user so I'm use qid*/
        ...state,
        [authUser]:{
          ...state[authUser],
          answers: {
            ...state[authUser].answers,
            [qid]: answer
          }
        }
/* Note that the reducer return error can reed answers of undefiened but idon't have any idea from this error and 
I'm tried to solve it but I can't but if you close error your vote is save in question and the question will be in answered question*/
      }
    }
     case ADD_QUESTIONUSER:{
        const {question,authUser}=action
        return{
        ...state,
        [authUser]: {
         ...state[authUser],
         questions: state[authUser].questions.concat(question.id)
        }
        }
      }
      /*also this reducer return error questions is undefined and idon't know why this error is here but if return to home
        you can see that a new question has been added*/
        default: return state
    }
}


