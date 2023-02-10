import React, { useEffect, useState } from 'react';
import {useParams,NavLink} from 'react-router-dom'
import axios from "axios";
import Loading from '../components/Loading'
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
const SingleTodo = () => {
  const[sinTodo,setSinTodo]=useState([])
  const[loading,setLoading]=useState(true);

  const params = useParams()

  //  console.log(params.id)

  const getSingleTodo = () => {
   axios.get(`https://dummyjson.com/todos/${params.id}`).then((res)=>{
    setSinTodo(res.data)
    setLoading(false);

   })
  }

  
  useEffect(()=>{
  getSingleTodo()
  },[])

  if(loading){
    return(
        <>
        <Loading/>
        </>
    )
  }
  return (
    <div className="text-center">
      
      <h1 style={{marginTop:"12%",color:"#fff",paddingTop:"2%"}}>All Todos</h1>
      <NavLink to="/" style={{textDecorationLine:"none" }}>
      <Button variant="info" className='d-flex justify-content-evenly m-2 ' style={{fontSize:"1.5rem" ,fontWeight:"bold"}}>Back</Button>
      </NavLink>
     
          <div className="m-10 p-2 ">
            <Table
              bordered
              variant="light"
              size="sm"
              striped="columns"
              className="text-center  responsive-table "
            style={{cursor:"pointer"}}
            >
              <thead>
                <tr className="">
                  <th width="50">Id</th>
                  <th width="200">Todo</th>
                  <th width="50">UserId</th>
                  <th width="50">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{sinTodo.id}</td>
                  <td>{sinTodo.todo}</td>
                  <td>{sinTodo.userId}</td>
                  {/* <td><Button>{sinTodo.completed.toString().toUpperCase()}</Button></td> */}
                  {sinTodo.completed ? (
                    <td>
                      <Button variant="success">
                      {sinTodo.completed.toString().toUpperCase()}
                      </Button>
                    </td>
                  ) : (
                    <td>
                      <Button variant="danger">
                      {sinTodo.completed.toString().toUpperCase()}
                      </Button>
                    </td>
                  )}
                </tr>
              </tbody>
            </Table>
          </div>
      
    </div>
  )
}

export default SingleTodo