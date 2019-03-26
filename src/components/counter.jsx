import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){ 
    super(props )
    this.state = {
        value: this.props.counter.value
        // imageUrl:'http://picsum.photos/200'
        // tags: []
    }};

    

    // ---------------------Helper Functions
    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatvalue() {
        //OBJECT DESTRUCTURING
        // const { value }=this.state;
        // return this.state.value ===0? "Zero" : this.state.value;

        const { value } = this.state;
        return { value } === 0 ? 'Zero' : value;
    }
    
    renderTags(){
        if(this.state.tags.length===0) return <p>There are no tags</p>

        return <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul> 
    }

    handleIncrement=(e)=>{
        console.log("increment clicked", this);
        console.log(e);
        this.setState({value:this.state.value+1})
    }
     


    render() {
        console.log('props', this.props);
        return (
            <>
            {/* <img src = {this.state.imageUrl} alt=""/> */}
            {/* {this.props.children} */}
            <h4>{this.props.id}</h4>
            <span className={this.getBadgeClasses()}>{this.formatvalue()}</span>
            <button 
            onClick={ ()=>this.handleIncrement({id:1})}
            className='btn btn-secondary btn-sm'
            >
            increment 
            </button>

            <button onClick={()=>this.props.onDelete(this.props.counter.id)} 
            className='btn btn-danger btn-sm m-2'>
                Delete
            </button>
           {/* {this.state.tags.length ===0 && 'Please create a new tag!'}
           {this.renderTags()} */}

            </>
        )
    }
}

export default Counter;