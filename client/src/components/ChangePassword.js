import React, { useState, useEffect } from "react";
import axios from "axios";

const ChangePassword = (props) => {



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
        <button type="button" className="btn btn-block btn-danger" onClick={() => changePassword()} >Change Password</button>
    </div>)



}
export default ChangePassword;