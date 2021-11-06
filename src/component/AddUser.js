import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const url = 'https://61571c4b8f7ea600179850ae.mockapi.io/contact';

const AddUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();


    const saveUser = async (e) => {
        e.preventDefault();
        await axios.post(url, {
            name,
            email
        });
        history.push("/");
    }

    return (
        <div className="container mt-5">
            <form onSubmit={saveUser}>
                <div className="field">
                    <label className="label">Nama</label>
                    <input
                        type="text"
                        className="input"
                        placeholder="nama"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <input
                        type="text"
                        className="input"
                        placeholder="email"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="field">
                    <button className="button is-primary">Simpan</button>
                </div>
            </form>
        </div>
    )
}

export default AddUser;