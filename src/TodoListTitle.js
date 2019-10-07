import React from 'react';
import './App.css';

class TodoListTitle extends React.Component {
    state = {
        editMode: false,
        todoListTitle:this.props.title
    };

    onTodolistClick = () => {
        this.setState({editMode: true})
    };
    onTodoTitleChange = (e) => {
        this.setState({todoListTitle: e.currentTarget.value})
    };
    onUpdateTodoListTitle = () => {
        this.setState({editMode: false})
        this.props.updateTodoTitle(this.state.todoListTitle)
    };
    render = () => {
        return (

            <div className="todoList-header">
                <h3 className="todoList-header__title" onClick={this.onTodolistClick}>{this.state.todoListTitle}</h3>
                <button className="delete-todoList "  onClick={this.props.onDelete}></button>

            <div className="todoList-newTaskForm ">
                {this.state.editMode
                    ? <input type="text" placeholder="New task name"
                             value={this.state.todoListTitle}
                             onChange={this.onTodoTitleChange}
                             onBlur={this.onUpdateTodoListTitle}
                    />
                    : <div>
                    </div>

                }

            </div>
            </div>
        );
    }
}

export default TodoListTitle;

