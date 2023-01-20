import React, { useState, } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Information = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState();

    const handleSubmit = () => {

        const url = 'http://localhost/insert.php';
        let fData = new FormData();
        fData.append('name', name);
        fData.append('age', age);
        fData.append('phone', phone);
        fData.append('email', email);
        axios.post(url, fData).then(response => alert("Success")).catch(error => alert(error));

    }

    return <div class="wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="page-header">
                        <h2>Contact Form</h2>
                    </div>

                    <form action="server.php" method="post">
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" name="name" class="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div class="form-group">
                            <label>Age</label>
                            <input type="number" name="age" class="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="text" name="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div class="form-group">
                            <label>Mobile</label>
                            <input type="number" name="phone" class="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>

                        <input type="button" name="submit" id="submit" value="SEND" onClick={handleSubmit} class=" form-control btn btn-success" />
                        <br />
                        <br />
                        <Link to="GetData" class="form-control btn btn-primary"> Get Data</Link>
                        {/* <input type="button" name="submit" id="submit" value="Get Data" class="form-control btn btn-primary" /> */}
                    </form>
                </div>
            </div>
        </div>
    </div >

}
export default Information;