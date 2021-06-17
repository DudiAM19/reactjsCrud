import React from 'react';
import './styles.css';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import Header2 from '../Header2';
import addContact from '../addContact';

const Content = () => {
    return (
        <Container>
            <Header2
                name="Contact List"
                Link="/addContact"
                btnName="add Contact"
            />
            <div className="content">
                <div className="imgSection">
                    <img className="img" src="https://placeimg.com/150/150/animals" alt="" />
                </div>
                <div className="infoSection">
                    <h1>Dudi Ali Murtado</h1>
                    <a href=""><h5>dudiali79@gmail.com</h5></a>
                </div>
                <div className="iconSection">
                    <a href="" ><FontAwesomeIcon icon="trash" size="lg" className="trash" /></a>
                    <Link to="/editPage"><FontAwesomeIcon icon="edit" size="lg" className="edit" /></Link>
                </div>
            </div>
            <hr />
        </Container>
    )
}

export default Content;