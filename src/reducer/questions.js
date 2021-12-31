import {GETQUESTIONS,ADDQUESTIONANSWER,ADD_QUESTION} from '../action/questions'

export function questions(state={},action){
switch(action.type){
case GETQUESTIONS:
   return{
       ...state,
       ...action.questions
       /*Here I get all question's*/
   }
   case ADDQUESTIONANSWER:
       const{authUser,qid,answer}=action;
    return{
      /*Here I add authUser to votes in question ,I return all questions and edit questions id and return new object
      I will also edit all answer in question id  in new object and return all answers and add autheticate user in votes*/
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: { 
            ...state[qid][answer],
           votes: state[qid][answer].votes.concat(authUser)
          }
        }
    }   
    case ADD_QUESTION:
        const{question}=action
       return{
         /*Here I'm add new question*/
        ...state,
        [question.id]:question
       } 
default: return state
}
}