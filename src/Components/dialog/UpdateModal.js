import React from 'react'
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const ModalComponent = ({ keyValue, commentInfo, show, setShow, handleUpdate, setUserModalDetail }) => {

    const handleOnChange = (e) => {
        let value = e.target.value;
        let singleElement = commentInfo;

        singleElement.body = value;
        setUserModalDetail(singleElement);
    }

    return (
        <Modal show={show} onHide={() => setShow(false)} key={keyValue}>
            <Modal.Header closeButton>
                <Modal.Title>Detailed Information</Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <InputGroup className="mb-3">
                    <FormControl
                        type='textbox'
                        aria-label="TextBox"
                        aria-describedby="basic-addon1"
                        defaultValue={commentInfo.body}
                        onChange={handleOnChange}
                    />
                </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    type="submit"
                    variant="primary"
                    onClick={(e) => handleUpdate(e)}
                >
                    Update
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalComponent