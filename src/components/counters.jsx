import React, { Component } from 'react'
import Counter from './counter';

class Counters extends Component {
 constructor(){
        super()
        this.state={
            counters:[
                {id:1, value:4},
                {id:2, value:0},
                {id:3, value:0},
                {id:4, value:0},
            ]
        }
    }

    handleDelete=counterId=>{
        console.log('Event Handler Called',counterId);
        const counters=this.state.counters.filter(c=>c.id!==counterId)
        this.setState({counters})    //overwrites the counters property 
    }
        
    render() {
        return (
            <>
                {this.state.counters.map(counter=> (
                //note onDelete reference
                <Counter  
                key={counter.id} 
                onDelete={this.handleDelete} 
                // value={counter.value} 
                // id={counter.id} 
                counter={counter} //carries all data from value and id 
                selected={true}>
                    {/* <h4>Counter #{counter.id}</h4> */}
                </Counter>
                ))}

            </>
        )
    }
}


export default Counters;