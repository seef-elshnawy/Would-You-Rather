import React from 'react'
import {connect} from 'react-redux'
import {formatQuestion2,Data} from '../utils/_DATA'
import {Image} from 'semantic-ui-react'
import './layot.css'
import {Link} from 'react-router-dom'
class Questionslayot extends React.Component{

Datetime=(timestamp)=>{
return Data(timestamp)
}
    render(){
        console.log(this.props.questions)
        const{auth,optionOne,optionTwo,timestamp,avatarURL}=this.props.questions
        return(
            <div className='layot'>
          <Image src={avatarURL} size='mini' circular/>
          <h4>{this.props.questions.name}</h4>
          <h5>{this.Datetime(timestamp)}</h5>
          <br/>
          <h6 style={{'font-size':'25px'}}>{optionOne.text}...</h6>
            </div>

    )}
}
function mapStateToProps({authUser,questions,users},{id}){
   const question=questions[id.id]
return{
    authUser,
    questions:formatQuestion2(question,users[question.author]),
    users
    
}
}
export default connect(mapStateToProps)(Questionslayot)