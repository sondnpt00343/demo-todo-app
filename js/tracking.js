document.addEventListener("slideshow", (event) => {
    const type = event.detail.type;

    switch (type) {
        case "prev":
            console.log("Thực hiện log prev");
            break;
        case "next":
            console.log("Thực hiện log next");
            break;
    }
});
