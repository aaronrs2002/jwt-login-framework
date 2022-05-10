import React, { useState } from "react";
import Validate from "./Validate.js";


const Login = (props) => {


    const onHandleChange = (e) => {
        if (document.querySelector("button.ckValidate.hide")) {
            document.querySelector("button.ckValidate").classList.remove("hide");
        }

        if (props.newUser === false) {
            Validate(["email", "password"]);
        } else {
            Validate(["email", "password1", "password2"]);
        }

    }

    const ckNewPassword = () => {
        localStorage.setItem("email", document.querySelector("input[name='email']").value.toLowerCase());
        localStorage.setItem("password", document.querySelector("input[name='password2']").value);
        onHandleChange();

        let pass1 = "";
        if (document.querySelector("input[name='password1']")) {
            pass1 = document.querySelector("input[name='password1']").value;
        }

        let pass2 = "";
        if (document.querySelector("input[name='password2']").value) {
            pass2 = document.querySelector("input[name='password2']").value;
        }

        if (pass1 === pass2) {
            document.querySelector("button[name='newUser']").classList.remove("hide");
            document.querySelector("input[name='password2']").classList.remove("error");
        } else {
            document.querySelector("button[name='newUser']").classList.add("hide");
            document.querySelector("input[name='password2']").classList.add("error");

        }
    }



    return (<div className="container">
        <div className="row">
            <div className="col-md-12">
                <div>
                    {props.newUser === false ?
                        <React.Fragment>
                            <h2>Tutorial Login</h2>
                            <input type="text" className="form-control" name="email" placeholder="Email" maxLength="75" onChange={onHandleChange} />
                            <input type="password" className="form-control" name="password" placeholder="Password" maxLength="75" onChange={onHandleChange} />
                            <button className="btn btn-block btn-success ckValidate hide" onClick={() => props.login()}>Login</button>
                            <i><a href="#" onClick={() => props.setNewUser((newUser) => true)}>Create New Account</a></i>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <h2>Create Account</h2>

                            <input type="text" className="form-control" name="email" placeholder="Email" maxLength="75" onChange={onHandleChange} />
                            <select className="form-control" name="level">
                                <option value="employee">Employee</option>
                                <option value="manager">Manager</option>
                            </select>
                            <input type="password" className="form-control" name="password1" placeholder="Password" maxLength="75" onChange={ckNewPassword} />
                            <input type="password" className="form-control" name="password2" placeholder="Password" maxLength="75" onChange={ckNewPassword} />

                            <button className="btn btn-block btn-success ckValidate hide" name="newUser" onClick={() => props.createUser()}>Create User</button>

                            <i><a href="#" onClick={() => props.setNewUser((newUser) => false)}>Already have an account</a></i>
                        </React.Fragment>}
                </div>
            </div>
        </div>
    </div>)

}

export default Login;