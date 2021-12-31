import '../App.css';
import {connect} from 'react-redux'
import React from 'react'
import {handelintialdata} from '../action/shared'
import {GETQUESTIONS} from '../action/questions'
import {GETUSER} from '../action/user'
import { Dropdown,Form ,Button} from 'semantic-ui-react'
import {Route,Switch,Link} from 'react-router-dom'
import Login from './login'
import Dashboard from './Dashboard';
import Answered from './Answered'
import LoadingBar from 'react-redux-loading'
import QuestionPage from './questionsPage'
import newQuestion from './newQuestion';
import AnsweredLayot from './AnsweredLayot';
import LeaderBoard from './LeaderBoard';
import PageNotFound from './PageNotFound'
import LoginPage from './Loginpage2'

class App extends React.Component{
  componentDidMount(){
    this.props.dispatch(handelintialdata())
  }


    state={
      loading:false
    }
    handlesubmit=(e)=>{
    e.preventDefault()
    const auth=this.state.value
    new Promise().then(()=>this.props.authUser(auth)
      )   
    }
    
    update=({value})=>{
     this.setState({value})
    }

  render(){    
  return (
    <div className="App" style={{'background-color':'whitesmoke'}}>
           <LoadingBar/>

     <header className="App-header">
     <Switch>
     <Route exact path='/notfound' component={PageNotFound}/>
     <Route exact path='/dashboard' component={Dashboard}/>
     <Route exact path='/leaderboard' component={LeaderBoard}/>
        <Route exact path='/add' component={newQuestion}/>
        <Route exact path='/' component={Login}/>
        {this.props.questions.map(d=>(
        <Route exact path={`/questions/${d.id}`} render={()=>{
          return <QuestionPage match={{params:{id:d}}}/>
        }}/>
        ))}
        {this.props.questions.map(d=>(
          <Route exact path={`/viewquestion/${d.id}`} render={()=>{
          return <AnsweredLayot match={{params:{id:d}}}/>
        }}/>
        ))}
        <Route component={LoginPage}/>
        </Switch>
        </header>
         </div>

  );
  }
}

function mapStateToProps({questions}){
return{
  questions:Object.values(questions)
}
}

export default connect(mapStateToProps)(App);
