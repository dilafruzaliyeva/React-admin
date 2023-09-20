import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

const Listcreat = () => {
      
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [title, titlechange] = useState("");
  const data = {
    id,
    name,
    email,
    title,
  };
  const navigate = useNavigate();


  const handlesubmit = (e) => {
    e.preventDefault();

    fetch(" http://localhost:4000/posts", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(data),
     })
      .then(() => {
        console.log(data);
        alert("Submit");
        console.log(data);
        navigate('/listcreat')
      
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="container">
      <div className="creat">
        <h2>Employee Create</h2>
      </div>
      <form
        onSubmit={handlesubmit}
        style={{ width: "500px", marginTop: "50px" }}
        className="card"
      >
        <div className="form-floating mb-3">
          <input
            value={id}
            onChange={(e) => idchange(e.target.value)}
            type="text"
            className="form-control"
            id="floatingid"
            placeholder="id"
          />
          <label>Id</label>
        </div>
        <div className="form-floating mb-3">
          <input
            value={name}
            onChange={(e) => namechange(e.target.value)}
            type="text"
            className="form-control"
            id="floatingname"
            placeholder="Name"
          />
          <label>Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            value={email}
            onChange={(e) => emailchange(e.target.value)}
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label>Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
            value={title}
            onChange={(e) => titlechange(e.target.value)}
            type="text"
            className="form-control"
            id="floatingtitle"
            placeholder="Title"
          />
          <label>Title</label>
        </div>
     

      <div style={{ marginTop: "20px" }}>
        
          <button type="submit" className="btn btn-success">
            Save
          </button>
        
        <Link to="/">
          <button type="button" className="btn btn-danger">
            Back
          </button>
        </Link>
      </div>
      </form>
    </div>
  );
};

export default Listcreat;