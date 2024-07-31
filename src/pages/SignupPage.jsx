import React from "react";
import useForm from "../hooks/useForm";
import { toast } from "react-toastify";

function SignupPage() {
  const { values, handleChange, handleSubmit } = useForm({
    name: "",
    email: "",
    password: "",
    username: "",
  });

  const handleUser = () => {
    let USER_ACC = "USERS";
    let users = JSON.parse(localStorage.getItem(USER_ACC)) || [];

    
    const userExists = users.some((user) => user.username === values.username);

    if (userExists) {
      toast.error("User already registered");
        values.name = "";
        values.email = "";
        values.password = "";
        values.username = "";
    } else {
      users.push(values);
      localStorage.setItem(USER_ACC, JSON.stringify(users));
      toast.success("User signed up successfully");

      // Reset form values
      values.name = "";
      values.email = "";
      values.password = "";
      values.username = "";
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/3 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        <form onSubmit={handleSubmit(handleUser)}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              value={values.name}
              onChange={handleChange}
              className="border p-2 mb-4 w-full rounded"
            />
          </div>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={values.username}
              onChange={handleChange}
              className="border p-2 mb-4 w-full rounded"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              className="border p-2 mb-4 w-full rounded"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              className="border p-2 mb-4 w-full rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
