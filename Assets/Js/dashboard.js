const btnLogout = document.querySelector('#btnLogout')

class Dashboard extends Register {


    isLogined = async () => {
        let formateurs = await this.loginAll()
        let [{
            id,
            username
        }] = this.isInLocalStorage()
        if (id && username) {
            btnLogout.style.display = "block"
            this.displayProfile(id)
        } else {

            btnLogout.style.display = "none"
            window.location.href = "./Login.html"
        }
        formateurs.map(e => {
            // this.isInLocalStorage(e.username)
        })

    }

    isInLocalStorage = () => {
        let idUser = []
        if (localStorage.length > 0) {
            for (var i = 0; i < localStorage.length; i++) {
                idUser.push({
                    id: localStorage.getItem(localStorage.key(i)),
                    username: localStorage.key(i)
                })
            }
        }

        // localStorage.getItem(username) && idUser.push(...idUser,localStorage.getItem(username))
        if(idUser.length == 0) {
            return [{id: '',username: ''}]
        }
        return idUser

    }

    displayBtn = () => {
        btnLogout.style.display = "none"
        btnLogin.style.display = "block"
        btnRegister.style.display = "block"
    }

    isLogOut = () => {
        localStorage.clear();
        window.location.href = "Login.html"
    }

    displayProfile = async (id) => {
        let resp = await fetch(`http://localhost:3000/admin/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        let {username,email} = await resp.json()

        DisProfile.innerHTML = ""
        
        DisProfile.innerHTML = `
            <div> Full Name is : ${username} <div>
            <div> Email is     : ${email} <div>
        `


    }

}
let objDashboard = new Dashboard()
objDashboard.isLogined()



btnLogout && btnLogout.addEventListener("click",() =>{
    objDashboard.isLogOut()
})