import {connect} from 'react-redux'
import React from 'react'
import { Dropdown,Form ,Button} from 'semantic-ui-react'
import {authUser} from '../action/authuser'
import { users } from '../reducer/user'
import {Link,Route,Redirect} from 'react-router-dom'


class Login extends React.Component{
    userinformation=(users)=>{
        return users.map(d=>(
           {key:d.id,
             text: d.name,
             value: d.id,
             image: { avatar: true, src:`./${d.avatarURL}`},
          }
         ))
           
         }
     
         state={
           value:'',
           redirectdash:false,
           loading:false
         }
         handlesubmit=(e)=>{
         e.preventDefault()
         const auth=this.state.value
         this.setState({
          loading:true
        })
         const userId=this.props.users.filter(f=>(
            f.id===auth
         ))
         this.props.dispatch(authUser(userId)) 
         this.setState({redirectdash:true})
         }
         
         update=(e,{value})=>{
             e.preventDefault()
          this.setState({value})
         }
     
     
    render(){
        const {value}=this.state
        console.log(this.props)
        const users=this.props.users
        const disabled=this.state.value.length===0?true:false
        console.log(value)  
       
        console.log(this.state.redirectdash)
        return(
        <Form onSubmit={this.handlesubmit}>  
        <Form.Dropdown
        placeholder='Select User'
        fluid
        selection
        value={value}
        onChange={this.update}
        options={this.userinformation(users)}
        multiple={false}
        required={true}
      />
      {this.state.redirectdash===true &&(
        <Redirect to='/dashboard'/>
      )}
      
      <Form.Button content='submit' positive disabled={disabled} fluid />
      </Form>  
        
        )}
}
function mapstateToProps({users,authUser}){
return {
    users:Object.values(users),
    authUser
}
}
/*function mapDispatchToProps(dispatch){
return authUser:dispatch()
}*/
export default connect(mapstateToProps)(Login)