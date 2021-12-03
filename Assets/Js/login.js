const Submitlogin = document.getElementById('login')
const email = document.getElementById('email')
const password = document.getElementById('password')
const err = document.getElementById('err')
const inputReg = document.getElementsByClassName('inputReg')

class Login {

    constructor(email, password) {
        this.email = email,
            this.password = password
        console.log(email, password);
    }

    loginAll = async () => {
        let Verified = false
        let resp = await fetch("http://localhost:3000/admin", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        let users = await resp.json()
        users.map(e => {
            if (e.email == this.email && e.password == this.password) {
                localStorage.setItem(e.username, e.id)
                console.log(e);
                window.location.href = "dashboard.html"
                Verified = true
            }
        })

        if (!Verified) {
            err.style.display = "block"
            document.getElementsByClassName("inputReg").className = "errinput";  
        }
        email.value = ""
        password.value = ""
    }
}


Submitlogin.addEventListener("click", async () => {
    let obj = new Login(email.value, password.value)
    obj.loginAll()
})