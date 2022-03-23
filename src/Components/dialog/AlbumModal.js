import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image'

const ModalComponent = ({ keyValue, albumInfo, show, setShow }) => {
    return (
        <Modal
            size="lg"
            show={show}
            onHide={() => setShow(false)}
            key={keyValue}>
            <Modal.Header closeButton>
                <Modal.Title>Album Image</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image
                    src={albumInfo[0].url}
                    alt='Album Image' />
            </Modal.Body>
        </Modal>
    )
}

export default ModalComponent