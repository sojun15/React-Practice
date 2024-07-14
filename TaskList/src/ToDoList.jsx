import { useState } from "react"

const ToDoList = () => {

    let [task,setTask] = useState([]);
    let [element,setElement] = useState('');

    let addItem = () => {
        task.push(element);
        setTask([...task]);
    }

    let Remove = (index) => {
        task.splice(index,1);
        setTask([...task]);
    }
    return(
        <section className="to-do">
            <div className="sub-section">
            <input type="text" placeholder="Input Task here" onChange={(event)=>{setElement(event.target.value)}} required/> <br />
            <button type="submit" onClick={addItem} className="add-item-button">Add task</button>

            <table>
                <tbody>
                    {
                        task.length!=0 ? (task.map((item,index)=>{
                            return(
                                <tr>
                                    <td><li>{item}</li></td>
                                    <td><button className="remove" onClick={()=>{Remove(index)}}>Remove task</button></td>
                                </tr>
                            )
                        })) : (<tr></tr>)
                    }
                </tbody>
            </table>
            </div>
        </section>
    )
}

export default ToDoList