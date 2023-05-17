import { Image } from 'cloudinary-react';
import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';

const UserCard = ({ profilePicture, userName, onUpdate, onDelete }) => {
  return (
    <Card>
      {/* <CardImg top src={profilePicture} alt="Profile Picture" /> */}
      <Image cloudName="dj6n7kdbr" publicId={profilePicture} width="300" height="300" />
      <CardBody>
        <CardTitle>{userName}</CardTitle>
        <Button color="primary" onClick={onUpdate}>Update</Button>
        <Button color="danger" onClick={onDelete}>Delete</Button>
      </CardBody>
    </Card>
  );
};

export default UserCard;
