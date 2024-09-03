import React from 'react'
import Task from './Task'

const Tasks = ({taskList, setTaskList}) => {
  return (  
    <div>
      {taskList.map((task, index) => (
        <div key={task.id}>
          <Task task={task} taskList={taskList} setTaskList={setTaskList}/>
        </div>
    ))} 
    </div>
  )
}

export default Tasks
