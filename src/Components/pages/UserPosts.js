import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import UpdateModal from '../dialog/UpdateModal';

const UserPosts = ({ userPosts }) => {

  const [userPostComment, setUserPostComment] = useState(userPosts);
  const [userModalDetail, setUserModalDetail] = useState({});
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleSearch = (event) => {
    let value = event.target.value.trim();
    if (value && value.length > 0) {
      const tempPost = userPosts.filter((post) => {
        return post.body.includes(value.toLowerCase());
      })
      if (tempPost.length === 0) {
        setUserPostComment([
          {
            body: "No Matching Posts"
          }
        ]);
      } else setUserPostComment(tempPost);
    }
  }

  const handleUpdate = (event) => {
    event.preventDefault()
    fetch(`https://jsonplaceholder.typicode.com/posts/${userModalDetail.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: userModalDetail.id,
        title: userModalDetail.title,
        body: userModalDetail.body,
        userId: userModalDetail.userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => {
        if (response.status === 200) {
          setShow(false);
        }
      })
  }

  const handleSettingUpdate = (event, singleElement) => {
    event.preventDefault()
    setUserModalDetail(singleElement);
    setShow(true);
  }

  const handleDeleteClick = (e, singleElement) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/posts/${singleElement.id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.status === 200) {
          alert("Successfully Deleted");
        }
      })
  }


  return (
    <>
      <Card>
        <Card.Body>
          <Card.Header>
            <Button
              size="sm"
              variant='light'
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              User Posts and Comments
            </Button>
          </Card.Header>
        </Card.Body>
        <Collapse in={open}>
          <ListGroup variant="flush">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search"
                aria-label="Search Bar"
                aria-describedby="basic-addon1"
                onChange={handleSearch}
              />
            </InputGroup>
            {
              userPostComment.map((singleElement) => {
                return <ListGroupItem
                  key={`albums_${singleElement.id}_${singleElement.userId}`}
                >
                  {`${singleElement.body === 'No Matching Posts' ? '' : 'Post:'} ${singleElement.body}`}
                  <Button
                    size='sm'
                    variant='link'
                    onClick={(e) => handleSettingUpdate(e, singleElement)}
                  >
                    <ion-icon name="create-outline" size="small"></ion-icon>
                  </Button>
                  <Button
                    size='sm'
                    variant='link'
                    onClick={(e) => handleDeleteClick(e, singleElement)}
                  >
                    <ion-icon name="trash-outline"></ion-icon>
                  </Button>
                </ListGroupItem>
              })
            }
          </ListGroup>
        </Collapse>
      </Card>
      {
        userPostComment.length > 0 &&
        <UpdateModal
          key={`modal_${userPostComment[0].id}`}
          keyValue={`modal_${userPostComment[0].id}`}
          commentInfo={userModalDetail}
          show={show}
          setShow={setShow}
          handleUpdate={handleUpdate}
          setUserModalDetail={setUserModalDetail}
        />
      }
    </>
  )
}

export default UserPosts