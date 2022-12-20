import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { useState } from "react";
import { userUpdated } from "./usersSlice";

export function EditUser() {
  const { pathname } = useLocation();
  const userId = parseInt(pathname.replace("/edit-user/", ""));

  const user = useSelector((state) =>
    state.users.entities.find((user) => user.id === userId)
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const [cattel, setcattel] = useState(user.cattel);
  const [age, setAge] = useState(user.age);
  const [error, setError] = useState(null);
  const [state, setState] = useState(user.state);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleCattel = (e) => setcattel(e.target.value);
  const handleAge = (e) => setAge(e.target.value);
  const handelState = (e) => setState(e.target.value);


  const handleClick = () => {
    if (name && email  && cattel && age && state) {
      dispatch(
        userUpdated({
          id: userId,
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
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Edit Farmer</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label htmlFor="nameInput">Name</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Name"
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
            Save user
          </button>
        </div>
      </div>
    </div>
  );
}
