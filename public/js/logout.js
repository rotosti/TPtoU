const logoutButtonHandler = async () => {

    const response = await fetch("/api/logout", {
        method: "POST",
        headers: {"Content-Type": "application/json"}
    });

    if (response.ok) {
        document.location.replace("/");
    }
}


document
.querySelector("#logout")
.addEventListener("click", logoutButtonHandler);
