import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios'

const AddUser = () => {

    let history = useHistory();

  let [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const {name, username, email, phone, website} = user;

  const inputVal = (event) => {
    
    let {name, value} = event.target;

    setUser((preVal)=>{
        return {
            ...preVal,
            [name] : value,
        }
    })
};

const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3001/user', user);
    history.push('/');
}

  return (
    <>
      <div className="d-flex flex-wrap justify-content-center">
        <div className="border shadow w-50 my-5">
          <form className="m-5" onSubmit={onSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                  onChange={inputVal}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Your UserName"
                name="username"
                value={username}
                onChange={inputVal}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Your Email"
                name="email"
                value={email}
                onChange={inputVal}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="Enter Your Phone Number"
                name="phone"
                value={phone}
                onChange={inputVal}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Your Website Name"
                name="website"
                value={website}
                onChange={inputVal}
              />
            </div>
            <button className="btn btn-primary">Add User</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUser;
