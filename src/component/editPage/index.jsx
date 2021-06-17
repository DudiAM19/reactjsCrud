import React from 'react';
import { Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";
import Content from '../Content';
import Header2 from '../Header2';

const editPage = () => {
    return (
    
            <Container>
                <Header2
                    name="Edit Page"
                    Link="/"
                    btnName="Cancel"
                />
                <hr />
                <div>
                    <form action="">
                        <div className="form-group">
                            <label for="inputName">Name</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
                        </div>
                        <br />
                        <div className="form-group">
                            <label for="inputName">Name</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
                            <br />
                        </div>
                        <button type="submit" class="btn btn-dark">Submit</button>
                    </form>
                </div>
                <Route path="/" exact component={Content} />

            </Container>
                
    )
}

export default editPage;