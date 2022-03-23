import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ModalComponent = ({ keyValue, userInformation, show, setShow }) => {

    return (
        <Modal show={show} onHide={() => setShow(false)} key={keyValue}>
            <Modal.Header closeButton>
                <Modal.Title>Detailed Information</Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Row>
                    <Col md={6}>
                        Username: {userInformation.username}
                    </Col>
                    <Col md={6}>
                        Email: {userInformation.email}
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
}

export default ModalComponent