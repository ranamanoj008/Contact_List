import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  let history = useHistory();
  let { id } = useParams();
  let [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;

  const inputVal = (event) => {
    let { name, value } = event.target;

    setUser((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  useEffect(()=>{
      loadUser();
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/user/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/user/${id}`);
    // console.log(result.data)
    setUser(result.data)
  };

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
                type="text"
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
            <button className="btn btn-primary">Update User</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUser;
