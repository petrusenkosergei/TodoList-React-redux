import React from 'react';
import './App.css';

class TodoListTask extends React.Component {

    state = {
        editMode: false,
        taskTitle: this.props.title
    }

    onIsDoneChanged = (e) => {
        let status = e.currentTarget.checked ? 2 : 0;
        this.props.changeStatus(this.props.task.id, status);
    }

    onTitleChanged = (e) => {
        this.setState({taskTitle: e.currentTarget.value})
        // this.props.changeTitle(this.props.task.id, e.currentTarget.value);
    }



    activateEditMode = () => {
        this.setState({editMode: true});
    }

    deactivateEditMode= () => {
        this.setState({editMode: false});
        this.props.changeTitle(this.props.task.id, this.state.taskTitle);

    }
    onDeleteTask = () => {
        this.props.deleteTask(this.props.task.id);
    }
    render = () => {
        let containerCssClass = this.props.task.isDone ? "todoList-task done" : "todoList-task";
        let priotityTitle = "";
        switch (this.props.task.priority) {
            case 0: priotityTitle = "Low"; break;
            case 1: priotityTitle = "Middle"; break;
            case 2: priotityTitle = "High"; break;
            case 3: priotityTitle = "Urgently"; break;
            case 4: priotityTitle = "Later"; break;
        }
        return (
                <div className={containerCssClass}>
                    <input type="checkbox" checked={this.props.task.status == 2}
                           onChange={this.onIsDoneChanged}/>
                    { this.state.editMode
                        ? <input onBlur={this.deactivateEditMode}
                                 onChange={this.onTitleChanged}
                                 autoFocus={true} value={this.state.taskTitle} />
                        : <span onClick={this.activateEditMode}>{this.props.task.title}</span>
                    }, priority: {priotityTitle} <button onClick={this.onDeleteTask}>XXX</button>
                </div>
        );
    }
}

export default TodoListTask;

