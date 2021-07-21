import React, { Component } from 'react'

export class Profile extends Component {
    constructor(props) {
        super(props)
    console.log("constructor()")
        this.state = {
             count:0
        }
    }
    
    // state = {
    //     count:0
    // }
    componentDidMount(){
        console.log("componentDidMount()")
        setInterval(() => {
            this.increment()
            
        }, 2000);
    }
    componentDidUpdate(){
        console.log("componentDidUpdate()")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount()")
    }
    
    increment= (() =>{
        this.setState({count :this.state.count + 1})
    })
    
        
    render() {
        console.log("render()")
        return (
            
            <div className='hey'>
                <div className='btn' >
                 <button onClick={this.increment}>show me</button>
               <h1>{this.state.count}</h1>
               </div> 
                <img
        src="https://wallpapercave.com/wp/wp7077605.jpg"
        alt=""
        className="im1"
      ></img>
      <div className='pro'>
                <p>fullName:Hamdi Fatma</p>
                <p>bio:xx-xx-199x</p>
                <p>profession:technician metrology</p>
                
                
            </div>
        
            </div>
           
                
        )
    }
}

export default Profile

