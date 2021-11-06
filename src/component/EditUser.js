import axios from "axios";
import { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router";

const EditUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();
    const {id} = useParams();
    const urlId = `https://61571c4b8f7ea600179850ae.mockapi.io/contact/${id}`;

    const updateUser = async (e) => {
        e.preventDefault(); 
        await axios.put(urlId, {
            name,
            email
        });
        history.push("/");
    }

    const getUser = async () => {
        const response = await axios.get(urlId);
        setName(response.data.name);
        setEmail(response.data.email);
    }

    useEffect(() => {
        getUser()
    }, [])

    return(
        <div className="container mt-5">
            <form onSubmit={updateUser}>
                <div className="field">
                    <label className="label">Nama</label>
                    <input 
                        type="text"
                        className="input"
                        placeholder="nama"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="field"> 
                    <label className="label">Email</label>
                    <input 
                        type="text"
                        className="input"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="field">
                    <button className="button is-primary">Edit</button>
                </div>
            </form>
        </div>
    )
} 

export default EditUser;