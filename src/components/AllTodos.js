import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import SearchTodo from "./SearchTodo";
const AllTodos = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const getAllTodos = () => {
    axios.get(`https://dummyjson.com/todos`).then((res) => {
      console.log(res.data.todos);
      setData(res.data.todos);
      setLoading(false);
    });
  };
  const handelSearch = (e) => {
    setSearchTerm(e.target.value);
   
  };
  useEffect(() => {
    getAllTodos();
  }, []);

  const handleClick = (id) => {
    navigate(`/singleTodo/${id}`);
  };
  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  
  return (
    <div className="text-center">
      <SearchTodo onChange={handelSearch}/>
      <h1 style={{ marginTop: "12%", color: "#fff", paddingTop: "2%" }}>
        All Todos
      </h1>
      {data
        .filter((todo) => todo.id.toString().includes(searchTerm) || todo.todo.toString().includes(searchTerm) || todo.completed.toString().includes(searchTerm))
        .map((todo) => {
          return (
            <div className="m-10 p-2 " key={todo.id}>
              <Table
                onClick={() => handleClick(todo.id)}
                bordered
                variant="light"
                size="sm"
                striped="columns"
                className="text-center  responsive-table "
                style={{ cursor: "pointer" }}
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
                    <td>{todo.id}</td>
                    <td>{todo.todo}</td>
                    <td>{todo.userId}</td>
                    {/* <td><Button>{todo.completed.toString().toUpperCase()}</Button></td> */}
                    {todo.completed ? (
                      <td>
                        <Button variant="success">
                          {todo.completed.toString().toUpperCase()}
                        </Button>
                      </td>
                    ) : (
                      <td>
                        <Button variant="danger">
                          {todo.completed.toString().toUpperCase()}
                        </Button>
                      </td>
                    )}
                  </tr>
                </tbody>
              </Table>
            </div>
          );
        })}
    </div>
  );
};

export default AllTodos;
