import React from 'react'
import {connect} from 'react-redux'
import { Card, Icon, Image } from 'semantic-ui-react'
import Nav from './Nav'
import {Redirect} from 'react-router-dom'
class LeaderBoard extends React.Component{
    render(){
        const{users}=this.props
        console.log(users)
        return(
            <div>
             <Nav/>
             {this.props.authUser!==null?
            users.map(u=>(
            <Card key={u.id}>
            <Image src={u.avatarURL} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{u.name}</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                  <h3>questions</h3>
                  {u.questions.length}
                  <h3>Answers</h3>
                  {Object.values(u.answers).length}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <h4>Point </h4>
                 {u.questions.length+Object.values(u.answers).length}
            </Card.Content>
          </Card>
            ))

    :<Redirect to='/'/>}
          </div>
        )
    }
}
function mapStateToProps({users,questions,authUser}){
return{
    users:Object.values(users).map(q=>({
      id:q.id,
      name:q.name,
      avatarURL:q.avatarURL,
      questions:q.questions,
      answers:q.answers,
      point:q.questions.length+Object.values(q.answers).length
    })).sort((a,b)=>b.point-a.point),
    authUser
}
}
export default connect(mapStateToProps)(LeaderBoard)