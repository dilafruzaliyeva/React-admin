import { Link, useNavigate  } from "react-router-dom";
import { useState, useEffect } from "react";

const Admin =()=>{
    const [data, setData] = useState("");
    const navigate = useNavigate()
  
    const loadDetails = (id)=>{
        navigate("/details/" + id)
    }
  
    const loadEdit = (id)=>{
      navigate("/edit/"+ id)
    }
  
    useEffect(() => {
      fetch(" http://localhost:4000/posts")
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          setData(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    return(
<div>
      <body>
        <nav class="navbar navbar-inverse visible-xs">
          <div class="container-fluid">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a className="navbar-brand">Logo</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav">
                <li class="active">
                  <a>Table</a>
                </li>
                <li>
                  <a>Age</a>
                </li>
                <li>
                  <a>Gender</a>
                </li>
                <li>
                  <a>Geo</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="container-fluid">
          <div class="row content">
            <div class="col-sm-3 sidenav hidden-xs">
              <h2>Logo</h2>
              <ul class="nav nav-pills nav-stacked">
                <li class="active">
                  <a href="#section1">Dashboard</a>
                </li>
                <li>
                  <a href="#section2">Age</a>
                </li>
                <li>
                  <a href="#section3">Gender</a>
                </li>
                <li>
                  <a href="#section3">Geo</a>
                </li>
              </ul>
            </div>

            <div class="col-sm-9">
              <div>
       <Link to='/listcreat'>
       <button style={{ marginTop: "30px" }} type="button" className="btn btn-success">listcreat</button>
       </Link>
        </div>
              <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">title</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {data &&
            data.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.title}</td>
                <td>
              <button onClick={()=>{loadEdit(item.id)}} type="button"  className="btn btn-warning">Edit</button>
              <button style={{ margin: "20px" }} type="button" className="btn btn-danger">Delete</button>
          <button onClick={()=>{loadDetails(item.id);}} type="button" className="btn btn-success"> Details</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
            </div>
          </div>
        </div>
      </body>
    </div>
    )
}

export default Admin;