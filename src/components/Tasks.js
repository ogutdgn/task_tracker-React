import Duty from "./Duty"

const Tasks = ({tasks, deleteTask, toggleDone}) => {
  return (
    <div>
        {tasks.map((duty) => (
            <Duty duty={duty} deleteTask={deleteTask} toggleDone={toggleDone}/>
        ))}
    </div>
  )
}

export default Tasks