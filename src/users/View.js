import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const View = () => {
  let [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  let { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:3001/user/${id}`);
    setUser(result.data);
  };

  return (
    <>
    <div className="container py-5">
      <div className="row">
        <div className="col-12 d-flex flex-wrap justify-content-center">
        <ul className="list-group shadow w-50">
        <li className="list-group-item">id : {user.id}</li>
          <li className="list-group-item">name : {user.name}</li>
          <li className="list-group-item">username : {user.username}</li>
          <li className="list-group-item">email : {user.email}</li>
          <li className="list-group-item">phone : {user.phone}</li>
          <li className="list-group-item">website : {user.website}</li>
        </ul>
        </div>
      </div>
        
      </div>
    </>
  );
};

export default View;
