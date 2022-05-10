const Validate = (fields) => {
    if (document.querySelectorAll(".error")) {
        [].forEach.call(document.querySelectorAll(".error"), function (e) {
            e.classList.remove("error");
        })
    }

    for (let i = 0; i < fields.length; i++) {
        let value;
        let element = document.querySelector("[name='" + fields[i] + "']");
        if (element !== null) {
            value = element.value
        } else {
            value = ""
        }
        if (value === "" || value === "default") {
            document.querySelector("[name='" + fields[i] + "']").classList.add("error");
        } else {
            document.querySelector("[name='" + fields[i] + "']").classList.remove("error");
        }


    }
}

export default Validate;