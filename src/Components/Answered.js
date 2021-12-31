import React from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import Questionslayot from './questionlayot'
import {Link} from 'react-router-dom'
import AnsweredLayot from './AnsweredLayot'
class Answered extends React.Component{

    details=()=>{
        if(this.props.authUser===null){
         return(
            <Redirect to='/'/>
         )
        }else{
            return(
                <h1 style={{'margin-top':'0px'}}>Answered Questions</h1>
            )
        }
    }
    render(){
        console.log(this.props.authUser)
        const {questions,authUser,unanswered,answered,users}=this.props
        return(
            <div >
               {authUser!==null?
                answered.map(d=>(
                    <div key={d.id}>
               <Questionslayot id={d} answered={answered}/>
               <Link to={`viewquestion/${d.id}`}><button><h6>View Question</h6></button></Link>
                    </div>
                ))
               :<Redirect to='/'/>}
            </div>
        )
    }
}

function mapStateToProps({questions,authUser,users}){
    if(authUser!==null){
    const answerId = Object.keys(users[authUser[0].id].answers);
    const answered = Object.values(questions)
      .filter(question => answerId.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp)
    
return{
    authUser:authUser[0],
    answered,
    questions
}
}else{
    return <Redirect to='/'/>
}
}
export default connect(mapStateToProps)(Answered)