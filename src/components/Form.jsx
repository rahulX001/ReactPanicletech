import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";

export default function MyForm() {
  const navigate = useNavigate();
  const formData = useSelector((state) => state.formData);
  const dispatch = useDispatch();

  function handleInputChange(event) {
    console.log(formData);

    const { name, value } = event.target;
    dispatch({ type: "UPDATE_FORM_DATA", field: name, value: value });
  }
  function Submit(e) {
    e.preventDefault();
    navigate("/formCart");
  }

  const isFormValid = () => {
    return (
      formData.name !== "" &&
      formData.age !== "" &&
      formData.gender !== "" &&
      formData.email !== ""
    );
  };

  return (
    <form onSubmit={Submit} className="formcontainer">
      <Card style={{ padding: "3rem", backgroundColor: "#FDF5E6",borderRadius:"1rem" }}>
        <div style={{fontSize:"3rem",fontWeight:"600",paddingLeft:"2rem"}}>Form</div>
        <div>
          <label htmlFor="name">Name:</label> <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label> <br />
          <input
            type="Number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label> <br />
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label> <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="submit"
            disabled={!isFormValid()}
            style={{
              backgroundColor: "rgb(112, 200, 238)",
              disabled: "true",
              width: "6rem",
              height: "2rem",
              borderRadius: ".4rem",
              fontSize: "1rem",
              marginTop: "1rem",
            }}
          />
        </div>
      </Card>
    </form>
  );
}
