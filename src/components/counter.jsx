import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
    super()
    this.state = {
        count: 0,
        // imageUrl:'http://picsum.photos/200'
        // tags: []
    }};

    

    // ---------------------Helper Functions
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
    
    renderTags(){
        if(this.state.tags.length===0) return <p>There are no tags</p>

        return <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul> 
    }

    handleIncrement=(e)=>{
        console.log("increment clicked", this);
        console.log(e);
        this.setState({count:this.state.count+1})
    }
     


    render() {

        return (
            <>
            {/* <img src = {this.state.imageUrl} alt=""/> */}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
            onClick={ ()=>this.handleIncrement({id:1})}
            className='btn btn-secondary btn-sm'
            >
            increment
            </button>
           {/* {this.state.tags.length ===0 && 'Please create a new tag!'}
           {this.renderTags()} */}

            </>
        )
    }
}

export default Counter;