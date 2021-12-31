import React from 'react'
import { Redirect } from 'react-router-dom'

class PageNotFound extends React.Component{
    state={
     redirect:false
    }
    render(){
        return(
            <div>
                {this.state.redirect===true&&(
                    <Redirect to='/dashboard'/>
                )}
                <h1>Error 404
                Page is not found</h1>
              <button onClick={()=>this.setState({
                  redirect:true
              })}>Return to Home</button>
            </div>
        )
    }
}
export default PageNotFound