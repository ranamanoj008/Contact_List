import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Contact = () => {
  let [user, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/user");
    setUser(result.data);
  };

  const deleteUser = async(id) => {
    await axios.delete(`http://localhost:3001/user/${id}`)
    loadUsers();
  }

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                <h1 className="text-center py-4">Contacts</h1>
      <table className="table border shadow">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">UserName</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
            <th>Action</th>
          </tr>
          {user.map((val, ind) => {
            return (
              <tr>
                <th>{ind + 1}</th>
                <td>{val.username}</td>
                <td>{val.phone}</td>
                <td>{val.email}</td>
                <td className="">
                  <Link className="btn btn-primary" to={`/user/view/${val.id}`}>view</Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/user/edit/${val.id}`}
                  >
                    Edit
                  </Link>
                  <Link className="btn btn-danger" onClick={()=>deleteUser(val.id)}>Delete</Link>
                </td>
              </tr>
            );
          })}
        </thead>
      </table>

                </div>
                
            </div>
        </div>
    </>
  );
};

export default Contact;
