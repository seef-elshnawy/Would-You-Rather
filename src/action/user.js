import {saveQuestionAnswer} from '../utils/api'
import {AddQuestionAnswer} from './questions'
import {AddQuestion} from './questions'
import{saveQuestion} from '../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading'
export const GETUSER='GETUSER'
export const SAVEANSWERSUSERS='SAVEANSWERSUSERS'
export const ADD_QUESTIONUSER='ADD_QUESTIONUSER'

/*this function to get users object from fake database */
export function getusers(users){
return{
    type:GETUSER,
    users
}
}

/*this function to add answers to users object in database */
export function AddAnswersUsers(authUser,qid,answer){
return{
    type:SAVEANSWERSUSERS,
    authUser,
    qid,
    answer,
}
}

/*this function i export it to use when I add answer and this function need to authenticate user and question id and my chosen answer*/
export function handleSaveAnswer(authUser,qid,answer){
return (dispatch)=>{
    const auth=authUser.id
    /*here I'm dispatch raect-redux-loading to show loading before add answer to fake database*/
    dispatch(showLoading())
    dispatch(AddAnswersUsers(auth,qid,answer))
    dispatch(AddQuestionAnswer(auth,qid,answer))
    /*here I'm use action creators in handleSaveAnswer function to use argument who will passed to action creators*/
    /*this function I'm import it from api file and pass same argument to use it in _saveQuestionAnswer function to add answer to fake database*/
    return saveQuestionAnswer(auth,qid,answer).then(()=>{
        dispatch(hideLoading())  
    }).catch(e=>{
        console.warn('faild to save answer:',e)
    })
    
}
}
/*here I'm create action creator to add new question to user object in fake database */
export function AddQuestionUser(question,authUser){
    return{
        type:ADD_QUESTIONUSER,
        question,
        authUser
    }
}

/*here I'm create function to handle save question and this function need to add arguments option-one and option-tow and author and authenticate user */
export function handleSaveQuestion(optionOneText, optionTwoText, author,authUser){
    /*this function is call with formatQuestion in _Data.js to this reason we nedd to this arguments add option's and author and authenticate user*/
    return (dispatch,getState)=>{
        dispatch(showLoading())
        /*in this function I import it from api file and this gfunction use argument question but 
        we need to pass the option's answer so we well dispatch action creator in promise function and send the arguments to 
        actions from saveQuestion*/
        return saveQuestion({optionOneText, optionTwoText, author}).then((question)=>{
            dispatch(AddQuestion(question))
            dispatch(AddQuestionUser(question,authUser))
            dispatch(hideLoading())
        }).catch(e=>{
            console.warn('faild to add question:',e)
        })            
    }
    }

