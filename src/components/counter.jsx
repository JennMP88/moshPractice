import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0,
        // imageUrl:'http://picsum.photos/200'
        tags: ['tag1','tag2','tag3']
    }

    //functions
    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        //OBJECT DESTRUCTURING
        // const { count }=this.state;
        // return this.state.count ===0? "Zero" : this.state.count;

        const { count } = this.state;
        return { count } === 0 ? 'Zero' : count;
    }

    render() {

        return (
            <>
                {/* <img src = {this.state.imageUrl} alt=""/> */}
                {/* span style={{fontSize:30}} you can do this inside of the span class */}
                <span style={{ fontSize: 30 }} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className='btn btn-secondary btn-sm'>increment</button>
           <ul>
               {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
           </ul>

           
            </>
        )
    }
}

export default Counter;