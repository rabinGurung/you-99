import React,{Component} from 'react'
import Signup from './SignUp/Signup'

class Main extends Component{
/*   constructor(){
       super()
       this.state = {
           customers:[]
       }
   }  */
    render(){
        return (
            <div>
                <Signup/>
            </div>
        )
    }

     componentDidMount(){
        fetch('/login')
        .then(res=>res.json())
        .then(customers =>this.setState({customers},()=>{
            console.log('Customers fetched...',customers)
        }))
    } 
}


export default Main