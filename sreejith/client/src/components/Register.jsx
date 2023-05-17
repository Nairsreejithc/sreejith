import React, { useState } from 'react';
import { Card, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { userRegister } from '../api/apiService';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [preview, setPreview] = useState(''); // For image preview
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
//errors
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [profilePictureError, setProfilePictureError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [addressError, setAddressError] = useState('');

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
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!name){
        setNameError('Name is required');
    }else{
        setNameError('');
    }
    if(!email){
        setEmailError('Email is required');
    }else{
        setEmailError('');
    }
    if(!profilePicture){
        setProfilePictureError('Profile Picture is required');
    }else{
        setProfilePictureError('');
    }
    if(!password){
        setPasswordError('Password is required');
    }else{
        setPasswordError('');
    }
    if(!address){
        setAddressError('Address is required');
    }else{
        setAddressError('');
    }
    try {
        const res=await userRegister({
            name,
            email,
            data:preview,
            password,
            address
        })
        console.log(res);
        if(!res.ok){
            alert(res?.data?.message)
        }else{
            alert(res?.data?.message)
        }
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <Card>
      <CardBody>
        <h2>Registration Form</h2>
        <Form>
          <FormGroup>
            <Label for="name">Name:</Label>
            <Input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} required />
            {
                nameError && <p className="text-danger">{nameError}</p>
            }
          </FormGroup>
          <FormGroup>
            <Label for="email">Email:</Label>
            <Input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            {
                emailError && <p className="text-danger">{emailError}</p>
            }
          </FormGroup>
          <FormGroup>
            <Label for="profilePicture">Profile Picture:</Label>
            <Input type="file" className="form-control-file" id="exampleFormControlFile1" value={profilePicture} onChange={handleFileInput} />
            {
                profilePictureError && <p className="text-danger">{profilePictureError}</p>
            }
            {preview&&(<div className="form-group mt-3">
                                <img src={preview} alt="blog" style={{width:'200px',height:'200px'}}/>
                            </div>)}
          </FormGroup>
          <FormGroup>
            <Label for="password">Password:</Label>
            <Input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
            {
                passwordError && <p className="text-danger">{passwordError}</p>
            }
          </FormGroup>
          <FormGroup>
            <Label for="address">Address:</Label>
            <Input type="textarea" id="address" value={address} onChange={(e)=>setAddress(e.target.value)} required />
            {
                addressError && <p className="text-danger">{addressError}</p>
            }
          </FormGroup>
          <Button className="btn btn-primary btn-md btn-round" onClick={handleSubmit}>Register</Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default RegistrationForm;
