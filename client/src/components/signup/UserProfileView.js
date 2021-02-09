import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';
import { getUserData } from '../../actions/index';

const UserProfileView = props => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const initialFormData = getUserData();
        setData(initialFormData);
    }, [])
    
    return (
        <Row className="mt-4">
            <Col sm="5 cover-photo"></Col>
            <Col sm="7 right">
                <h1 className="display-5">User Details</h1>
                <ul>
                    <li>
                        <strong>First Name : </strong>
                        <label>{data.first_name}</label>
                    </li>
                    <li>
                        <strong>Last Name : </strong>
                        <label>{data.first_name}</label>
                    </li>
                    <li>
                        <strong>Email : </strong>
                        <label>{data.email}</label>
                    </li>
                    <li>
                        <strong>Address : </strong>
                        <label>{data.address}</label>
                    </li>
                </ul>
                <p className="note-msg pt-4">Note: To edit this details the link has been sent in your mail box. </p>
            </Col>
        </Row>
    );
};

export default UserProfileView;