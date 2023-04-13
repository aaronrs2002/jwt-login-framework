import React, { useState, useEffect } from "react";
import axios from "axios";

const ChangePassword = (props) => {
    let [confirm, setConfirm] = useState("");
    const changePassword = () => {
        const newPasswordElem = document.querySelector("input[name='new-password']");
        let newPassword = "";
        if (newPasswordElem) {
            newPassword = newPassword.value
        }
        if (newPassword !== "") {
            axios.put("/change-password",
                {
                    email: sessionStorage.getItem("email"),
                    password: document.querySelector("input[name='new-password']").value
                },
                props.config
            ).then(
                (res) => {
                    if (res.data.affectedRows > 0) {
                        props.showAlert("Password changed.", "success");
                        document.querySelector("input[name='new-password']").value = "";
                        setConfirm((confirm) => "");
                    } else {
                        props.showAlert("Password change did NOT work.", "danger");
                    }
                }, (error) => {
                    props.showAlert("Password change did NOT work: " + error, "danger");
                }
            )
        } else {
            newPasswordElem.classList.add("error");
        }
    }

    return (<div className="form-group py-2">
        <input type="password" name="new-password" placeholder="New Password" className="form-control" />
        <div className="d-grid">
            {confirm === "changePassword" ?
                <div className="alert alert-danger" role="alert">
                    <h5>Are you sure you want to change your password?</h5>
                    <button className="btn btn-secondary" onClick={() => setConfirm((confirm) => "")}>No</button>
                    <button className="btn btn-warning" onClick={() => changePassword()}>Yes</button>
                </div>
                : <button type="button" className="btn btn-block btn-danger" onClick={() => setConfirm((confirm) => "changePassword")} >Change Password</button>}
        </div>
    </div>)



}
export default ChangePassword;
