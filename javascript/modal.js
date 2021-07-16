const btn = document.getElementById("button-addon2");


btn.addEventListener("click", () => {
    swal({
        title: "Thanks for Sign Up",
        text: "You have been added to the adventure!",
        icon: "success",
        button: "Continue",
    });
})