import React from 'react'
import {connect} from 'react-redux'
import Questionslayot from './questionlayot'
import {Link,Redirect} from 'react-router-dom'
class UnAnswerd extends React.Component{
    render(){
        const unanswer=this.props.unanswer
        return(
       <div>
{unanswer!==undefined?
     unanswer.map(u=>(
        <div key={u.id}>
        <Questionslayot id={u}/>
        <Link to={`questions/${u.id}`}><button><h6>View Question</h6></button></Link>
                </div>
     ))
    :<Redirect to='/'/>}
     </div>     
        )
    }
}
function mapStateToProps({authUser,users,questions}){
    if(authUser!==null){    
const unanswerId=Object.keys(users[authUser[0].id].answers)
const unanswer=Object.values(questions).filter(q=>!unanswerId.includes(q.id)
).sort((a, b) => b.timestamp - a.timestamp)
return{
    authUser:authUser[0],
    users,
    questions,
    unanswer
}
}else{
    return <Redirect to='/'/>
}
}

export default connect(mapStateToProps)(UnAnswerd)