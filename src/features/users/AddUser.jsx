import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { useState } from "react";
import { userAdded } from "./usersSlice";

export function AddUser() {

  // const options = ["UP", "KA", "MH"];

  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const [cattel, setcattel] = useState();
  const [age, setAge] = useState();
  const [error, setError] = useState(null);
  const [state, setState] = useState();

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  
  const handleCattel = (e) => setcattel(e.target.value);
  const handleAge = (e) => setAge(e.target.value);
  const handelState = (e) => setState(e.target.value);

  const usersAmount = useSelector((state) => state.users.entities.length);

  const handleClick = () => {
    if (name && email  && cattel && age && state) {

      dispatch(
        userAdded({
          id: usersAmount + 1,
          name,
          email,
          state,
          
          cattel,
          age
        })
      );

      setError(null);
      history.push("/");
    } else {
      setError("Fill in all fields");
    }

    setName("");
    setEmail("");
    setState("");
    
    setcattel("");
    setAge("");
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Add Farmer</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label htmlFor="nameInput">Name</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Enter Name"
            id="nameInput"
            onChange={handleName}
            value={name}
          />
          <label htmlFor="emailInput">Address</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Enter Address"
            id="emailInput"
            onChange={handleEmail}
            value={email}
          />
          <label htmlFor="state">Select State</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Enter State"
            id="selected"
            onChange={handelState}
            value={state}
          />

          <label htmlFor="cattel">Number of Cattel</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Enter cattel number"
            id="cattel"
            onChange={handleCattel}
            value={cattel}
          />

          <label htmlFor="age">Enter Age</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Enter Age"
            id="age"
            onChange={handleAge}
            value={age}
          />

          {error && error}
          <button onClick={handleClick} className="button-primary">
            Add user
          </button>
        </div>
      </div>
    </div>
  );
}
