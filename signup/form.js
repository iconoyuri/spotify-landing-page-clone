document
    .querySelectorAll("input")
    .forEach((input) => {
        input.addEventListener("blur", (e) => {
            if (e.target.value === "") {
                e.target.style.setProperty("border-color", "red");
                e.target.nextElementSibling?.style.setProperty(
                    "visibility",
                    "visible"
                );
            } else {
                e.target.style.setProperty("border-color", "black");
                e.target.nextElementSibling?.style.setProperty(
                    "visibility",
                    "hidden"
                );
            }
            // console.log(e.target.nextElementSibling);
        });
    });
