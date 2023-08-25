

import React, { useEffect, useState } from 'react'
import date from './Date';
import "./Jira.css"

import { FaArrowRight, FaArrowLeft, FaChevronRight } from "react-icons/fa";
import IndividualTask from './IndividualTask';

const Jira = () => {

    const [allTasks, setAllTasks] = useState([[], [], []]);
    const [input, setInput] = useState("")
    const [category, setCategory] = useState("task")
    const [dates, time] = date()

    const submitHandler = () => {
        if (input) {
            setAllTasks((prev) => {
                const newArr = prev.map((elem, i) => i === 0 ? [...elem, { id: i, dates: dates, time: time, task: input, category: category}] : elem)
                return newArr
            })
        }
    }

    const CategoryHandler = (e) => {
        setCategory(e.target.value)
    }

    console.log(allTasks)

    const arrowLeftHandler = (taskToMove, index) => {
        setAllTasks((prev) => {
            let result = prev.map((elem, ind) => {

                if (ind === taskToMove.id) {
                    return elem.filter((_, idx) => idx !== index)
                }
                else if (ind === taskToMove.id - 1) {
                    return [...elem, { ...taskToMove, id: taskToMove.id - 1 }];
                }

                else {
                    return elem;
                }
            })

            return result;
        });
    }

    const arrowRightHandler = (taskToMove, index) => {
        setAllTasks((prev) => {
            let result = prev.map((elem, ind) => {

                if (ind === taskToMove.id) {
                    return elem.filter((_, idx) => idx !== index)
                }
                else if (ind === taskToMove.id + 1) {
                    return [...elem, { ...taskToMove, id: taskToMove.id + 1 }];
                }
                else {
                    return elem;
                }
            })

            return result;
        });
    }
    return (
        <div>
            <div className="inputFields">
                <select name="category" className={category} value={category} id="" onChange={CategoryHandler}>
                    <option value="task">Task</option>
                    <option value="story">Story</option>
                    <option value="bug">Bug</option>
                </select>
                <input type="text" className={`inputText`} onChange={(e) => setInput(e.target.value)} placeholder='Add Task or Story' />

                <button onClick={submitHandler}>Go <FaChevronRight /></button>

            </div>

            <div className='tasksContainer'>
                <div className="tasks">
                    <h1 className='heading'>Tasks</h1>

                    {
                        allTasks[0].map((elem, index) => (
                            <IndividualTask elem = {elem} index = {index} arrowLeftHandler = {arrowLeftHandler} arrowRightHandler ={arrowRightHandler} length={allTasks.length}/>
                        ))
                    }

                </div>

                <div className="process">
                    <h1 className='heading'>Process</h1>

                    {
                        allTasks[1].map((elem, index) => (
                            <IndividualTask elem = {elem} index = {index} arrowLeftHandler = {arrowLeftHandler} arrowRightHandler ={arrowRightHandler} length={allTasks.length}/>
                        ))
                    }

                </div>

                <div className="finished">
                    <h1 className='heading'>Finished</h1>

                    {
                        allTasks[2].map((elem, index) => (
                            <IndividualTask elem = {elem} index = {index} arrowLeftHandler = {arrowLeftHandler} arrowRightHandler ={arrowRightHandler} length={allTasks.length}/>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}

export default Jira