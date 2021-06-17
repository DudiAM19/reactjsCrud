import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Container } from 'react-bootstrap';
import './styles.css'

import Header from './Header';
import Header2 from './Header2';
import Content from './Content';
import editPage from './editPage';
import addContact from './addContact';

const Home = () => {
    return (
        <div>
            <BrowserRouter>
                <nav class="navbar navbar-expand-lg navbar-dark">
                    <Container>
                        <a class="navbar-brand">Crud</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <Link to="/"><a class="nav-link">Home <span class="sr-only">(current)</span></a></Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/editPage">edit</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/addContact">add</Link>
                                </li>
                            </ul>
                        </div>

                    </Container>
                </nav>
                <div>
                    <Header />
                </div>
                <Route path="/" exact component={Content} />
                <Route path="/editPage" component={editPage} />
                <Route path="/addContact" component={addContact} />
            </BrowserRouter>
        </div>
    )
}

export default Home;