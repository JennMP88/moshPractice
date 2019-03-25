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
        
    render() {
        return (
            <>
                {this.state.counters.map(counter=> 
                <Counter  key={counter.id} value={counter.value} selected={true}/>)}

            </>
        )
    }
}


export default Counters;