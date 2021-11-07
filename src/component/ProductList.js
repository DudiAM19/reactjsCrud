import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const url = 'https://61571c4b8f7ea600179850ae.mockapi.io/contact';

const ProductList = () => {
    const [data, setData] = useState([]);

    async function getUser() {
        try {
            const response = await axios.get(url);
            console.log(response.data);
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const Delete = async (id) => {
        await axios.delete(`https://61571c4b8f7ea600179850ae.mockapi.io/contact/${id}`)
        getUser();    
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <div className="container">
            <Link to="/add" className="button is-primary mt-5">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/edit/${user.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={() => Delete(user.id)} className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
        </div>
    )
}

export default ProductList;
