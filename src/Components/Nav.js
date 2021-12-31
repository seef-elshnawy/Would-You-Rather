import React from 'react'
import {connect} from 'react-redux'
import {Image, Menu, Segment } from 'semantic-ui-react'
import {Link, Redirect,NavLink} from 'react-router-dom'
import {authUser, logOut} from '../action/authuser'


class Nav extends React.Component{

    state = { 
        activeItem: '',
        loading:false,
        
    }
    Name=(name)=>{
        return name=this.props.auth.name
    }

    avatarURL=(avatarURL)=>{
        if(this.props.authUser!==null){
          return avatarURL=this.props.auth.avatarURL
        }else{
          return undefined
        }

      }
      handleItemClick = (e, { name }) => {this.setState({ activeItem: name })}

      Logout=()=>{
        return this.props.dispatch(logOut(null))
      }

    details=()=>{
        if(this.props.authUser!==null){
        return(
    <h6 style={{'margin-right':'-1250px','margin-top':'-60px','font-size':'15px'}}>  <Image src={this.avatarURL()} size='mini' circular centered/>Welcome {this.Name()} </h6>
        )}else{
            return  <Redirect to='/'/>
        }
    }
    render(){
        const activeItem=this.state.activeItem

        return(
            <div>
        {this.props.authUser!==null?(  
        <Menu  secondary widths={'150px'} style={{'margin-top':'10px'}}>
          <NavLink to='/dashboard'>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            Editorials
            position='left'
            
           />
           </NavLink>
         <NavLink to='/add'>
          <Menu.Item
            name='Add Question'
            active={activeItem === 'Add Question'}
            onClick={this.handleItemClick}
          />
          
          </NavLink>
          <NavLink to='/leaderboard'>
          <Menu.Item
            name='leaderboard'
            active={activeItem === 'leaderboard'}
            onClick={this.handleItemClick}
          />
          </NavLink>
          <Menu.Menu>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={()=>this.Logout()}
              position='right'
            />
          </Menu.Menu>
        </Menu>
        ):<Redirect to='/'/>}

        {this.details()}
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
export default connect(mapStateToProps)(Nav)