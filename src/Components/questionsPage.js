import React from 'react'
import {connect} from 'react-redux'
import {Image} from 'semantic-ui-react'
import {formatQuestion2,Data} from '../utils/_DATA'
import './layot.css'
import {handleSaveAnswer} from '../action/user'
import PageNotFound from './PageNotFound'
import { Redirect } from 'react-router-dom'
import LoginPage from './Loginpage2'

class QuestionPage extends React.Component{
    state={
        answer:'',
        redirect:false,
        redirect2:false
    }

    Submit=(e)=>{
    e.preventDefault()
    const{answer}=this.state
    const{questions,dispatch,authUser}=this.props
 if(this.state.option!==''){
    dispatch(handleSaveAnswer(authUser,questions.id,answer))
}
    this.setState({
        answer:'',
        redirect:true,
        redirect2:true
    })
    }
    
    render(){

        console.log(this.state)
        const {id}=this.props
        console.log(id)
        console.log(window.location.href)
if(this.props.questions!==undefined){
        const{optionOne,optionTwo,timestamp,avatarURL}=this.props.questions
        return(
            <>
            {`http://localhost:3000/questions/${id.id}`!==window.location.href?
            <LoginPage/>
             : 
             <>
            {this.props.authUser===null?
           <LoginPage/>
            :
            <>
                {this.state.redirect===true&&(
                <Redirect to='/dashboard'/>
                )}
                 {this.state.redirect2===true&&(
                <Redirect to={`/viewquestion/${id.id}`}/>
                )}
            <h1 style={{'margin-bottom':'-50px','margin-top':'20px'}}>Would You Rather</h1>
            <div className='layot2'> 
            <Image src={avatarURL} size='small' circular/>
            <h2 className='Name'>{this.props.questions.name}</h2>
            <h5>{Data(timestamp)}</h5>
            <br/>
            <form onSubmit={this.Submit} method='post'>
            <div className='text12'><input className='check' onClick={()=>this.setState({
                answer :'optionOne'
            })}  type='radio' name='options' value={'optionOne'}/>{optionOne.text}</div>
            <div className='line'></div>
            <div className='text12'><input className='check' onClick={()=>this.setState({
                answer :'optionTwo'
            })}type='radio' name='options' value={'optionTwo'}/>{optionTwo.text}</div>
            <button type='submit'>Submit</button>
            </form>
              </div>
              </>
    }
         </>
    }
              </>

        )
    }else{
        return <LoginPage/>

    }
}
}
function mapStateToProps({questions,users,authUser},props){
 if(authUser!==null){   
const {id}=props.match.params
const question=questions[id.id]
return{
    id,
    questions:formatQuestion2(question,users[question.author]),
    authUser:authUser[0],
    users
}
}else{
    return null
}
}

export default connect(mapStateToProps)(QuestionPage)