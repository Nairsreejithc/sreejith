import React, { useEffect, useState } from 'react';
import { Card, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { getUser, updateTheUser, userRegister } from '../api/apiService';

const UpdateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [preview, setPreview] = useState(''); // For image preview
  const [address, setAddress] = useState('');
  const id=localStorage.getItem('userId');

  const handleFileInput=(e)=>{
        const file=e.target.files[0]
        previewFile(file)
        console.log(file);
    }

    const previewFile=(file)=>{
        const render=new FileReader()
        render.readAsDataURL(file)
        render.onloadend=()=>{
            setPreview(render.result)
        }
    }
    const getUserData=async()=>{
        try {
            const res=await getUser(id);
            console.log(res?.data);
            setName(res?.data?.name);
            setEmail(res?.data?.email);
            setAddress(res?.data?.address);
        } catch (error) {
            console.log(error);
        }
    }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const res=await updateTheUser(id,{
            name,
            email,
            data:preview,
            address
        });
        console.log(res?.data);
        if(!res.ok){
            alert(res?.data?.message)
        }else{
            alert(res?.data?.message)
        }
    } catch (error) {
        console.log(error);
    }
  };
  useEffect(() => {
        getUserData();
    }, [])

  return (
    <Card>
      <CardBody>
        <h2>Update Form</h2>
        <Form>
          <FormGroup>
            <Label for="name">Name:</Label>
            <Input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} required />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email:</Label>
            <Input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
          </FormGroup>
          <FormGroup>
            <Label for="profilePicture">Profile Picture:</Label>
            <Input type="file" className="form-control-file" id="exampleFormControlFile1" value={profilePicture} onChange={handleFileInput} />
            {preview&&(<div className="form-group mt-3">
                                <img src={preview} alt="blog" style={{width:'200px',height:'200px'}}/>
                            </div>)}
          </FormGroup>
          <FormGroup>
            <Label for="address">Address:</Label>
            <Input type="textarea" id="address" value={address} onChange={(e)=>setAddress(e.target.value)} required />
          </FormGroup>
          <Button className="btn btn-primary btn-md btn-round" onClick={handleSubmit}>Update</Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default UpdateUser;
