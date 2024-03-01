const buttons = document.querySelectorAll(".button");

buttons.forEach( (button) => {
    button.addEventListener("click", (event) => {
        // console.log(event);
        // console.log(event.target);
        console.log(event.target.id);
        
        const bgColor = event.target.id;
        switch (bgColor) {
            case event.target.id:
                document.body.style.backgroundColor = event.target.id;
                break;
        
            default:
                document.body.style.backgroundColor = white;
                break;
        }
    })
})