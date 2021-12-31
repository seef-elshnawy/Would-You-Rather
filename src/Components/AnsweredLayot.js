import React from 'react'
import {connect} from 'react-redux'
import {formatQuestion2,Data} from '../utils/_DATA'
import {Image,Progress} from 'semantic-ui-react'
import './layot.css'
import {Link} from 'react-router-dom'
import { questions } from '../reducer/questions'
import {Redirect} from 'react-router-dom'
import PageNotFound from './PageNotFound'
import LoginPage from './Loginpage2'

class AnsweredLayot extends React.Component{

  state={
      redirect:false
  }
Datetime=(timestamp)=>{
return Data(timestamp)
}


    render(){
        console.log(this.props.value)
        if(this.props.questions!==undefined){
        const{optionOne,optionTwo,timestamp,avatarURL}=this.props.questions
        const{authUser,value,id}=this.props
        const percentOptionOne=parseInt(value.optionOne.votes.length*100/(value.optionOne.votes.length+value.optionTwo.votes.length))
        const percentOptionTwo=parseInt(value.optionTwo.votes.length*100/(value.optionOne.votes.length+value.optionTwo.votes.length))
        return(
            <>
            {`http://localhost:3000/viewquestion/${id.id}`!==window.location.href?
             <PageNotFound/> 
             : 
             <>
            {authUser===null?
            <PageNotFound/> 
            :

            <div style={{'margin-top':'0px'}}>
            {this.state.redirect===true&&(
                <Redirect to='/dashboard'/>
            )}
           <div className='layot2' style={{'margin-top':'100px','height':'800px'}}>
       <Image src={avatarURL} size='small' circular/>
       <h2 className='Name'>{this.props.questions.name}</h2>
       <h5>{this.Datetime(timestamp)}</h5>
       <br/>
       <h6 style={{'font-size':'25px'}}>{optionOne.text}  {value.optionOne.votes.includes(authUser.id)&&(<span>(your vote)</span>)}</h6>
       <Progress percent={percentOptionOne} progress  color='green'/>
       <h6>{value.optionOne.votes.length} of {Object.values(this.props.users).length}</h6>
       <div style={{'font-size':'30px'}}>or</div>
       <h6 style={{'font-size':'25px'}}>{optionTwo.text}  {value.optionTwo.votes.includes(authUser.id)&&(<span>(your vote)</span>)}</h6>
       <div className='progess' ><Progress percent={percentOptionTwo} progress  color='green'/></div>
       <h6>{value.optionTwo.votes.length} of {Object.values(this.props.users).length}</h6>
      <button onClick={()=>this.setState({
          redirect:true
      })}>Return to Home</button>
     </div>
        </div>
    }
        </>
    }</>
        )
}else{
        return <LoginPage/>

    }
}
}
function mapStateToProps({authUser,questions,users},props){
    if(authUser!==null){
    const {id}=props.match.params
   const question=questions[id.id]
   const value=questions[id.id]
return{
    authUser:authUser[0],
    questions:formatQuestion2(question,users[question.author]),
    users,
    value,
    id
    
}
}else{
    return <Redirect to='/'/>
}
}
export default connect(mapStateToProps)(AnsweredLayot)