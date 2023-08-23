

import React, { useEffect, useState } from 'react'
import "./Jira.css"

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Jira = () => {

    const obj = {
        id : null, 
        task : ""
    }

    const [allTasks,setAllTasks] = useState([[], [], []]);
    const [input, setInput] = useState("")

    const submitHandler = () => {
        setAllTasks((prev) => {
            const newArr = prev.map((elem, i) => i === 0? [ ...elem, {id : i, task : input}] : elem)
            return newArr
        })
    }
    console.log(allTasks)

    const arrowLeftHandler = (taskToMove, index) => {
        setAllTasks((prev) => {


            let result = prev.map((elem, ind)=>{
                
                return ind ===  taskToMove.id - 1 ? [...elem, {...taskToMove, id : taskToMove.id - 1}]: ind === taskToMove.id ? elem.splice(index,1): elem  })
            return result
    })
    }

    const arrowRightHandler = (taskToMove, index) => {
           

        setAllTasks((prev) => {


            let result = prev.map((elem, ind)=>{
                
                return ind ===  taskToMove.id + 1 ? [...elem, {...taskToMove, id : taskToMove.id + 1}]: ind === taskToMove.id ? elem.splice(index,0): elem
            })
            return result
    })
    }

    // useEffect(() => {

    //     setAllTasks([...allTasks])

    // }, [allTasks])

  return (
    <div>

        <input type="text" onChange={(e) => setInput(e.target.value)}/>
        <button onClick={submitHandler}>Submit</button>

        <div className='tasksContainer'>
            <div className="tasks">
                <h1 className='heading'>Tasks</h1>

                {
                    allTasks[0].map((elem, index) => (
                        <div className='individualTasks'> 
                           {elem.id !== 0 && <FaArrowLeft className='icon' onClick={arrowLeftHandler.bind(this, elem, index)}/> }
                            <h1>{elem.task}</h1>

                            {elem.id !== allTasks.length - 1 &&  <FaArrowRight className='icon' onClick={arrowRightHandler.bind(this, elem, index)}/>}
                         
                           
                        </div>
                    ))
                }
                
            </div>

            <div className="process">
            <h1 className='heading'>Process</h1>

                {
                    allTasks[1].map((elem, index) => (
                        <div className='individualTasks'> 
                        {elem.id !== 0 && <FaArrowLeft className='icon' onClick={arrowLeftHandler.bind(this, elem, index)}/> }
                         <h1>{elem.task}</h1>

                         {elem.id !== allTasks.length - 1 &&  <FaArrowRight className='icon' onClick={arrowRightHandler.bind(this, elem, index)}/>}
                      
                     </div>

                    ))
                }

            </div>

            <div className="finished">
                <h1 className='heading'>Finished</h1>

                {
                    allTasks[2].map((elem, index) => (
                        <div className='individualTasks'> 
                        {elem.id !== 0 && <FaArrowLeft className='icon' onClick={arrowLeftHandler.bind(this, elem, index)}/> }
                         <h1>{elem.task}</h1>

                         {elem.id !== allTasks.length - 1 &&  <FaArrowRight className='icon' onClick={arrowRightHandler.bind(this, elem, index)}/>}
                      
                     </div>
                    ))
                }


            </div>
        </div>
    </div>
  )
}

export default Jira