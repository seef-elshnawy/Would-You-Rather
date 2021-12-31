import React from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import {Data} from '../utils/_DATA'
import {handleSaveQuestion} from '../action/user'
import Nav from './Nav'
import { Progress } from 'semantic-ui-react'
import PageNotFound from './PageNotFound'

class newQuestion extends React.Component{
    state={
        optionOne:'',
        optionTwo:'',
        redirect:false,
        alert:false
    }

    change1=(e)=>{
        this.setState({
            optionOne:e.target.value,
        })

    }
    change2=(e)=>{
        this.setState({
            optionTwo:e.target.value,
        })
    }
    submit=(e)=>{
        e.preventDefault()
        const{optionOne,optionTwo}=this.state
        const{handleSaveQuestion}=this.props
        if(this.props.authUser!==null){
      handleSaveQuestion(optionOne,optionTwo,this.props.authUser.id,this.props.authUser.id)
      setTimeout(()=>(
        this.setState({
            alert:true,         
            redirect:true,
        })),1000)
      this.setState({
        optionOne:'',
        optionTwo:'',
      })
        }else{
            return <Redirect to='/'/>
        }
    }
    render(){
        const disabled=this.state.optionOne.length===''?true:false
        return(
            <>        
            {`http://localhost:3000/add`!==window.location.href?
            <PageNotFound/> 
             : 
         <div>
            {this.state.alert===true&&(
                    alert('save question successfully')
                )}
                {this.state.redirect===true&&(
                <Redirect to='/dashboard'/>
                )}
             <div style={{'margin-top':'-200px'}}>
             <Nav/>
             <>
            <h1 style={{'margin-bottom':'100px','margin-top':'70px'}}>Would You Rather</h1>
            </>
             </div>
             {this.props.authUser!==null?
             <form className='add question' onSubmit={this.submit}>
                 <h1>Option One</h1>
                 <input style={{'margin-bottom':'50px','width':'600px','border-radius':'10px'}} type='text' value={this.state.optionOne} onChange={this.change1} className='optionOne' name='optionOne'/><br/>
                 <h1>Option Two</h1>
                 <input style={{'margin-bottom':'50px','width':'600px','border-radius':'10px'}} type='text' value={this.state.optionTwo} onChange={this.change2} className='optionTwo' name='optionTwo'/><br/>
            <button disabled={disabled} type='submit'>submit</button>
             </form>
    :<Redirect to='/'/>}
         </div>
    }</>
        )
    }
}

function mapStateToprops({authUser}){
    if(authUser!==null){
    return{  
        authUser:authUser[0]
    }
}else{
    return undefined
}
}
export default connect(mapStateToprops,{handleSaveQuestion})(newQuestion)