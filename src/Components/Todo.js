import React, { Component } from 'react';

export default class Todo extends Component {
    constructor(){
        super();
        this.state ={
            tasks:[{task:"check mails",id:1},{task:"check whatsapp",id:2},{task:"hey whataspp",id:3}],
            courrentTask:""
        }
    }
    handleChange =(e)=>{
        console.log(e.target.value)
        this.setState({
            courrentTask:e.target.value
        })
    }
    handleSubmit =()=>{
        this.setState({
            tasks:[...this.state.tasks,
                        {task:this.state.courrentTask,id:this.state.length+1}
                  ],
            courrentTask:''
        })
    }
    handleDelete = (id) =>{
        let narr = this.state.tasks.filter((taskOb1)=>{
            return taskOb1.id!==id
        })
        this.setState({
            tasks:[...narr]
        })
    }
  render() {
    return <div>
            <input type="text" value={this.state.courrentTask}  onChange={this.handleChange}/>
            <button onClick={this.handleSubmit}>submit</button>
            <ul>   
                {/* {
                    this.state.tasks.map((taskObj)=>(
                        <li key={taskObj.id}>
                            <p>{taskObj.task}</p> 
                            
                            <button onClick={()=>this.handleDelete(taskObj.id)}>Delete</button>
                        </li>
                    ))
                } */}

                {
                    this.state.tasks.map(function(taskObj){
                        return(
                        <li key={taskObj.id}>
                            <p>{taskObj.task}</p> 
                            
                            <button onClick={()=>this.handleDelete(taskObj.id)}>Delete</button>
                        </li>
                        )}.bind(this)
                    )
                }
            </ul>
          </div>;
  }
}


// export const arr =[1,2,3,4]