import {useState} from 'react';
import React from 'react';
import './TaskManager.css';

const TaskManager = (props) => {
    const [value, setValue] = useState('');

    const [todos] = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value === ''){
            return;
        }
        //setTodos(todos.push(value));
        setValue('');
    }

    const handleChange = (e) => {
        e.preventDefault();
        console.log(`input:${e.target.value}`);
        setValue(e.target.value);
    }

    return (<>
        <div className="TaskManagerCtn">
            <form onSubmit={handleSubmit}>
            <label htmlFor="task_new">Nouvelle tâche</label>
                <input type="text" name="task_new" value={value} onChange={handleChange} />
                <input type="submit" name="submitTask" value="Ajouter"/>
            </form>
            <ul>{}</ul>
        </div>
        </>);
}

export default TaskManager;