import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import ModalComponent from '../dialog/ModalComponent';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const LandingContainer = () => {

    const [userList, setUserList] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUserList(data));
    }, [])

    const handleToggle = (element) => {
        setSelectedUser(element);
        setShow(true)
    }

    const handleClick = (element) => {
        navigate(`/${element.id}`);
    }

    return (
        <>
            <Stack gap={2} className="col-md-3 containerDuplicate">
                {
                    userList && userList.map(element => {
                        return <>
                            <Button
                                variant='primary'
                                key={`${element.id}`}
                                onMouseEnter={() => handleToggle(element)}
                                onClick={() => handleClick(element)}
                            >
                                <label key={`label_${element.id}`}>{`Name: ${element.name} `}</label>
                            </Button>
                        </>
                    })
                }
            </Stack>
            {
                Object.keys(selectedUser).length > 0 &&
                <ModalComponent
                    key={`modal_${selectedUser.id}`}
                    keyValue={`modal_${selectedUser.id}`}
                    userInformation={selectedUser}
                    show={show}
                    setShow={setShow}
                />
            }
        </>
    )
}
export default LandingContainer;