import React,{Component} from 'react'

class SignUP extends Component{
    render(){
        return(
            <div>
                <h1>Welcome To The Sign Up Page</h1> <br/>
                <form name="form-reg" id="form-reg" >
                    <input type="text" name="username" id="username" placeholder="Username" /> <br/> <br/>
                    <input type="password" name="password" id="password" placeholder="Password" /> <br/> <br/>
                    <input type="submit" id="submit" name="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default SignUP