import {getintialdata} from '../utils/api'
import {getusers} from './user'
import {getquestions} from './questions'
import {showLoading,hideLoading} from 'react-redux-loading'
/*here I need to connect my action to receive all my data so we well add function to connect them*/
export function handelintialdata(){
    return (dispatch)=>{
        /*here I'm dispatch showloading to show loading when I will call data*/
        dispatch(showLoading())
        /*getintialdata function I import it from api file to get users object and questions object from fake database*/
        return getintialdata().then(
            ({users,questions})=>{
        /*here I'm use users and questions argument to send data to action's creator */
            dispatch(getusers(users))
            dispatch(getquestions(questions))
            /*Hide Loading*/
            dispatch(hideLoading())
            }
        )
    }
}