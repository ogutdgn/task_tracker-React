import Button from "./Button"

const Header = ({title, showAddTask, toggleShow}) => {
  return (
    <div className="header">
        {/* <h1>Task Tracker</h1> */}
        <h1>{title}</h1>
        {/* <Button handleClick={handleClick} color="purple" text="Show Add Task Bar"/> */}
        <Button color={showAddTask ? "red" : "purple"} text={showAddTask ? "Close Add Task Bar" : "Show Add Task Bar"} toggleShow={toggleShow}/>
    </div>
  )
}

export default Header