import React, { useState, useEffect } from "react";
import axios from "axios";

const DeleteUser = (props) => {




    let [infoMessage, setInfoMessage] = useState("");

    const deleteUser = () => {

        axios.delete("/delete-user/" + props.userEmail, props.config).then(
            (res) => {
                if (res.data.success === 0) {
                    props.showAlert("There was a problem: " + res.data.message, "danger");
                }
                else if (res.data.email === sessionStorage.getItem("email")) {
                    props.showAlert(props.userEmail + " was deleted successfully.", "success");
                    props.validateUser(0, "logged out", null, "logged out");
                }

            }, (error) => {
                props.showAlert("User was NOT deleted.", "danger");
            }
        )
    }



    return (
        <div>
            <button className="btn btn-danger btn-block" onClick={() => setInfoMessage((infoMessage) => "delete-user")}>
                Delete User
            </button>
            {infoMessage === "delete-user" ?
                <div className="alert alert-danger" role="alert">
                    Are you sure you want to delete {props.userEmail} ?
                    <button className="btn btn-block btn-danger" onClick={() => deleteUser()}>Yes</button>
                    <button className="btn btn-block btn-info" onClick={() => setInfoMessage((infoMessage) => "")}>No</button>
                </div>
                : null
            }
        </div>
    )


}

export default DeleteUser;