// import { getButtonListOpts } from "sweetalert/typings/modules/options/buttons";

const type = document.getElementById("type-question")
const choices = document.querySelector(".choices")

const btntype = () => {
    // points.value = level.value
    // points.disabled = true;
    console.log(type.value);
    if (type.value == "mult") {
        choices.innerHTML = ""
        choices.innerHTML = `
            <input style='border: 1px solid green; background: green; opacity: 50%; width: 100%; color:white;'  type='text' placeholder='Add correct answer'>
            <input style='border: 1px solid green; background: green; opacity: 50%; width: 100%; color:white;'  type='text' placeholder= 'Add correct answer'>
            <input style='border: 1px solid red; background: red; opacity: 50%; width: 100%; color:white;'  type='text' placeholder= 'Add incorrect answer'>   
            <button id='SendInput' class='button btn1 alternative'
            style=' box-shadow: -1px 11px 11px -14px black;'>Send</button>
            <button id="hello">test</button>
              `
            }  

        // getButtonLi


        else if (type.value == "TF") {
            choices.innerHTML = ""
            choices.innerHTML = `
                <button style='border: 1px solid green; padding: 5px 25px; background: green; margin: 10px 0px; opacity: 50%; width: 100%; color:white; width: 300px; border-radius:30px;'   type='text'>True</button>
                <button style='border: 1px solid red ; padding: 5px 25px; margin: 10px 0px; background: red; opacity: 50%; width: 100%; color:white; width: 300px; border-radius:30px;'  type='text'>False</button>
                <button id="hello">test</button>
            `
        }
}