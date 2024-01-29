import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import Axios from 'axios'

const CreatePost = ({show, handleClose}) => {
    const [post, setpost] = useState()

    const handleInput = (e)=>{
        const
    }
  return (
    <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
            <Modal.Title>Create Post</Modal.Title>
        </Modal.Header> 
        <Modal.Body>
            <form className="createPost">
                <div className="form-group">
                    <label>Topic</label>
                    <input type="text" name="topic" onChange = {handleInput} className='form-control'/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea name="description" onChange = {handleInput} className='form-control'/>
                </div>
                <div className="form-group">
                    <label>Post Category</label>
                    <input type="text" name= "post_category" onChange = {handleInput} className='form-control'/>
                </div>
                
            </form>  
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary mt-2 " size="md" className="create ">Create</Button>
            <Button varient="secondary mt-2" size="md" className="close" onClick={handleClose}>Close</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default CreatePost
