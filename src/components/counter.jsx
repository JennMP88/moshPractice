import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count:0,
        // imageUrl:'http://picsum.photos/200'
    }

    styles={
        fontSize:50,
        fontWeight:"bold"
    }
    render() {
        return (
            <>
                {/* <img src = {this.state.imageUrl} alt=""/> */}
                <span style={this.styles} className='badge badge-primary m-2'>{this.formatCount()}</span>
                <button className='btn btn-secondary btn-sm'>increment</button>
            </>
        )
    }
    
    formatCount (){ 
        //OBJECT DESTRUCTURING
        // const { count }=this.state;
        // return this.state.count ===0? "Zero" : this.state.count;
        
        const { count }=this.state;
        return {count} ===0? 'Zero' : count; 
    }


}

export default Counter;