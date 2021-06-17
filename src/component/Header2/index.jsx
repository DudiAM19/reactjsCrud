import React from 'react';
import { Button } from 'react-bootstrap';
import './styles.css';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import addContact from '../addContact';

const Header2 = (props) => {
    return (
        <div className="header2">
            <h3>{props.name}</h3>
            <div className="div-btnSection">
                <Link to={props.Link}><Button>{props.btnName}</Button></Link>
            </div>
        </div>
    )
}

export default Header2;
