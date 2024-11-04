import './style.css'

const textInput = document.querySelector("#textInput") as HTMLInputElement;
const seperationInput = document.querySelector("#seperationInput") as HTMLInputElement;
const seperateFront = document.querySelector("#seperateFront") as HTMLInputElement;
const btn = document.querySelector("#btn") as HTMLElement;
const frontPartOutput = document.querySelector("#frontPartOutput") as HTMLElement;
const endPartOutput = document.querySelector("#endPartOutput") as HTMLElement;

btn?.addEventListener("click", () => {
    const textInputValue:string[] = textInput.value.split("")
    const seperationInputValue:string = seperationInput.value;

    textInputValue.forEach((char, index) => {
        if(char === seperationInputValue) {
            if (seperateFront.checked) {
                frontPartOutput.textContent = textInputValue.splice(0, index).join("").trim()
                endPartOutput.textContent = textInputValue.join("").trim()
            } else {
                frontPartOutput.textContent = textInputValue.splice(0, index + 1).join("").trim()
                endPartOutput.textContent = textInputValue.join("").trim()
            }

        }
    })

} )
