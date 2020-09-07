import React from "react";

const Form = (props) => {
  const { inputs, setInputs } = props;
  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form>
      <div className="App">
        <p>
          <label htmlFor="firstName">First Name</label>
          <input onChange={onChange} type="text" name="firstName" />
        </p>
        <p>
          <label htmlFor="firstName">Last Name</label>
          <input onChange={onChange} type="text" name="lastName" />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input onChange={onChange} type="text" name="email" />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input onChange={onChange} type="password" name="password" />
        </p>
        <p>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input onChange={onChange} type="password" name="confirmPassword" />
        </p>
      </div>
    </form>
  );
};
export default Form;
