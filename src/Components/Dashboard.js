import React from 'react'
import {connect} from 'react-redux'
import {Image, Menu, Segment,Tab } from 'semantic-ui-react'
import {Link, Redirect,NavLink} from 'react-router-dom'
import {authUser, logOut} from '../action/authuser'
import Answered from './Answered'
import Unanswered from './Unanswered'
import Nav from './Nav'
class Dashboard extends React.Component{
    state = { 
      activeItem: 'home',
      loading:false
  }

    handleItemClick = (e, { name }) => {this.setState({ activeItem: name })
}


    render(){
console.log(this.state.loading)
const panes = [
  { menuItem: 'UnAnswered', render: () => <Tab.Pane><Unanswered/></Tab.Pane> },
  { menuItem: 'Answered', render: () => <Tab.Pane><Answered/></Tab.Pane>},
]
        return(
            <div style={{'width':'60%'}}>
        <Nav />
        <Tab panes={panes} renderActiveOnly={'UnAnswered'}/>
        </div>
        )
}
}
function mapStateToProps({authUser}){
  const auth=authUser?authUser[0]:null
return{
   authUser,
   auth
}
  }

export default connect(mapStateToProps)(Dashboard)