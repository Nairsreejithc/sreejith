import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'
import {deleteTheUser, getAllUsers } from '../api/apiService';

export default function Home() {
    const [users, setUsers] = useState([]);
    const [openModal, setOpenModal] = useState(false)
    const [userId, setUserId] = useState('')
    const toggle = () => {
        setOpenModal(!openModal)
    }

    const deleteUser = async () => {
        toggle()
        try {
            console.log(userId);
            const res = await deleteTheUser(userId);
            console.log(res?.data);
            if (!res?.ok) {
                alert(res?.data?.message)
            } else {
                alert(res?.data?.message)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getAllU=async()=>{
        try {
            const res=await getAllUsers();
            // console.log(res?.data);
            setUsers(res?.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllU();
    }, [users])
  return (
    <div className="content">
         <Modal isOpen={openModal} toggle={toggle} className="modal-dialog-centered">
                <ModalHeader toggle={toggle}>Delete User</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete this user?
                </ModalBody>
                <ModalFooter>
                    <Button className="btn-round" color="danger" onClick={deleteUser}>Delete</Button>{' '}
                    <Button className="btn-round" color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        <Row className="justify-content-center">
            {users?.map((user)=>{
                return(
                    <Col md={3} key={user?._id}>
                        <UserCard 
                        profilePicture={user?.image}
                        userName={user?.name}
                        onUpdate={()=>{
                            localStorage.setItem('userId',user?._id)
                            window.location.href='/update'
                        }}
                        onDelete={()=>{setOpenModal(!openModal);setUserId(user?._id)}}

                        />
                    </Col>
                )
            })
            }
        </Row>
    </div>
  )
}
