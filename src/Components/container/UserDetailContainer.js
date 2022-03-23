import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useParams, useNavigate } from "react-router-dom";
import Loader from '../pages/Loader';
import UserAlbums from '../pages/UserAlbums';
import UserPosts from '../pages/UserPosts';
import UserProfile from '../pages/UserProfile';

const UserDetailContainer = () => {

    const [userDetails, setUserDetails] = useState({});
    const [userPosts, setUserPosts] = useState([]);
    const [userAlbums, setuserAlbums] = useState([]);
    let params = useParams();
    let navigate = useNavigate();

    const fetchData = async () => {
        //return object
        const userDet = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`).then(response => response.json());
        //return array
        const userPost = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}/posts`).then(response => response.json());
        //return array
        const userAlbum = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}/albums`).then(response => response.json());

        setUserDetails(userDet);
        setUserPosts(userPost);
        setuserAlbums(userAlbum);
    };

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='containerDuplicate'>
            <span onClick={() => navigate('/')}>Back</span>
            <Container className='p-0'>
                <Row>
                    <Col className='section' md={3}>
                        {
                            Object.keys(userDetails).length > 0
                                ? <UserProfile userDetails={userDetails} />
                                : <Loader />
                        }
                    </Col>
                    <Col className='section' md={4}>
                        {
                            Object.keys(userPosts).length > 0
                                ? <UserPosts userPosts={userPosts} />
                                : <Loader />
                        }
                    </Col>
                    <Col className='section' md={5}>
                        {
                            Object.keys(userAlbums).length > 0
                                ? <UserAlbums userAlbums={userAlbums} />
                                : <Loader />
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UserDetailContainer