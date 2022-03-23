import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

const UserProfile = ({ userDetails }) => {

  return (
    <Card>
      <Card.Body>
        <Card.Header>User Profile</Card.Header>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroupItem>{`Name: ${userDetails.name}`}</ListGroupItem>
        <ListGroupItem>{`Email: ${userDetails.email}`}</ListGroupItem>
        <ListGroupItem>{`Username: ${userDetails.username}`}</ListGroupItem>
        <ListGroupItem>{`Company Address: ${userDetails.address.city}`}</ListGroupItem>
        <ListGroupItem>{`Phone: ${userDetails.phone}`}</ListGroupItem>
        <ListGroupItem>{`Website: ${userDetails.website}`}</ListGroupItem>
        <ListGroupItem>{`Company Name: ${userDetails.company.name}`}</ListGroupItem>
      </ListGroup>
    </Card>
  )
}

export default UserProfile