import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import AlbumModal from '../dialog/AlbumModal';
import Collapse from 'react-bootstrap/Collapse';

const UserAlbums = ({ userAlbums }) => {

  const [albumsPhotos, setAlbumsPhotos] = useState([]);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleAlbumButton = (singleElement) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${singleElement.id}/photos`)
      .then(response => response.json())
      .then(data => {
        setAlbumsPhotos(data);
        setShow(true);
      });
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
              User Albums
            </Button>
          </Card.Header>
        </Card.Body>
        <Collapse in={open}>
          <ListGroup variant="flush">
            {
              userAlbums.map((singleElement) => {
                return <Button
                  key={`albums_${singleElement.id}_${singleElement.userId}`}
                  variant="light"
                  onClick={() => handleAlbumButton(singleElement)}>
                  <ListGroupItem>{`Album Name: ${singleElement.title}`}</ListGroupItem>
                </Button>
              })
            }
          </ListGroup>
        </Collapse>
      </Card>
      {
        albumsPhotos.length > 0 &&
        <AlbumModal
          key={`modal_${albumsPhotos[0].id}`}
          keyValue={`modal_${albumsPhotos[0].id}`}
          albumInfo={albumsPhotos}
          show={show}
          setShow={setShow}
        />
      }
    </>
  )
}

export default UserAlbums