import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'


function App() {

  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  useEffect(()=>{
    axios.get('http://localhost:8080/tasks')
      .then(({data})=>{
        setTasks(_tasks =>{
          console.log(data)
          return data
        })
      })
  },[])

  const createTask = () =>{
    axios.post('http://localhost:8080/savetask', {})
      .then(({data}) =>{
        console.log('newTask', data)
      })
  }

  return (
    <>
      <section className='row justify-content-center align-items-center mt-5'>
        <div className="col-md-6 col-xl-4 text-center">
          <div className='d-flex align-items-center justify-content-center gap-3 mb-3'>
            <h1 className='mb-3'>ToDo APP</h1>
            <img className='img-fluid' src={"prueba.png"} alt="logo" />
          </div>
          <form action="">
            <div className="mb-3 input-group">
              <input type="text" placeholder='Ingrese una nueva tarea' className="form-control" id="exampleInputEmail1"/>
              <button className='btn btn-success fw-bold'>+</button>
            </div>
          </form>
          {
            tasks.map(task =>(
              <div className="card" key={task.id}>
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div className='fw-bold'>{task.title}</div>
                  <button className=" btn btn-danger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"    fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                   </svg>
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default App
