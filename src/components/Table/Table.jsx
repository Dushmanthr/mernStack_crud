import React, { useEffect } from 'react'
import {useState} from 'react'
import {Link} from "react-router-dom"
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import CreatePost from '../CreatePost/CreatePost'
import Axios from 'axios'


const MyTable = () => {

 /*  const dummyData = [
    {
      id: 1,
      topic: 'Mern STACK',
      description: 'Use for web Development',
      postCategory: 'Blog'
    },
    {
      id: 2,
      topic: 'ReactJS',
      description: 'Use for front-end Development',
      postCategory: 'Blog'
    },
  ] */

  const [postdata,setpostdata] = useState([])
  const [modal, setModal] = useState(false);

  useEffect(()=>{
      const fetchData = async () => {
        try{
          const response = await Axios.get('http://localhost:8000/posts');
          setpostdata(response.data);
        }catch(error){
          console.log("Error fetching data:", error);
        }
      };
      fetchData();
  },[])

  const handleClose =()=>{
    setModal(false);
  }
  return (
    <div className="container align-items-center justify-content-center">
      <div className="card">
        <div className="card_title ">
          <h2>Post List</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Button variant="primary" onClick= {()=>setModal(true)}>ADD+</Button>
          </div>

          <Table className="table table-bordered mt-5">
            <thead className="bg-dark text-white">
              <tr>
                <td>#</td>
                <td>Topic</td>
                <td>Description</td>
                <td>Post Category</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {postdata && postdata.map(item => (
                 <tr key ={item.id}>
                    <td>{item.id}</td>
                    <td>{item.topic}</td>
                    <td>{item.description}</td>
                    <td>{item.postCategory}</td>
                    <td >
                      <Button className='primary mx-2'>UPDATE</Button>
                      <Button className = 'delete mx-2' variant='danger'>DELETE</Button>
                    </td>
                 </tr>
              ))}
            </tbody>
          </Table>

        </div>
      </div>
      <CreatePost show={modal}  handleClose={()=>handleClose()}/>
    </div>
  )
}

export default MyTable
