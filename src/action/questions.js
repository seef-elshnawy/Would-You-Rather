
export const GETQUESTIONS='GETQUESTIONS'
export const ADDQUESTIONANSWER='ADDQUESTIONANSWER'
export const ADD_QUESTION='ADD_QUESTION'

/*this function to get questions*/ 
export function getquestions(questions){
return{
    type:GETQUESTIONS,
    questions
}
}
/*We need to add Action creator to add Answer tto question*/
export function AddQuestionAnswer(authUser,qid,answer){
return{
    type:ADDQUESTIONANSWER,
    authUser,
    qid,
    answer
}
}

/*and add another function to add question to question object in fake database*/
export function AddQuestion(question){
return{
    type:ADD_QUESTION,
    question,
}

}

