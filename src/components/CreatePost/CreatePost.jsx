import React, { useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import Axios from 'axios'


const CreatePost = ({show, handleClose}) => {
    const [topic, setTopic] = useState()
    const [description, setDescription] = useState()
    const [postCategory, setPostCategory] = useState()

    const handleInput = (e)=>{
        const {name,value} = e.target
        if(name === 'topic'){
            setTopic(value);
        }
        else if(name === 'description'){
            setDescription(value);
        }
        else if(name === 'post_category'){
            setPostCategory(value);
        }
    }

     const savePost = async () => {

        try{
            console.log("request sent...")
            const response = await Axios.post('http://localhost:8000/post/save', {

                topic,
                description,
                postCategory,
                });
               console.log('Post saved Successfuly', response.data);
               handleClose();
               
            }catch(error){
                console.log('Error saving Post: ', error);
                
            }
            
           
            
            
        
        
    } 


  return (
    <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
            <Modal.Title>Create Post</Modal.Title>
        </Modal.Header> 
        <Modal.Body>
            <form onSubmit={savePost} className="createPost">
                <div className="form-group">
                    <label>Topic</label>
                    <input type="text" name="topic" value = {topic} onChange = {handleInput} className='form-control'/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea name="description" value = {description} onChange = {handleInput} className='form-control'/>
                </div>
                <div className="form-group">
                    <label>Post Category</label>
                    <input type="text" name= "post_category" value = {postCategory} onChange = {handleInput} className='form-control'/>
                </div>
                
            </form>  
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary mt-2 " size="md" className="create " onClick={savePost}>Create</Button>
            <Button variant="secondary mt-2" size="md" className="close" onClick={handleClose}>Close</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default CreatePost
