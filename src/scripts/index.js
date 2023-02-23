import { getUser } from "./services/user.js"
import { getRepositories } from "./services/repositories.js"

import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"


document.getElementById('btn-search').addEventListener("click", () => {
    let userName = document.getElementById('input-search').value
    if(validateEmptyInput(userName)) return

    getUserData(userName)

})
document.getElementById('input-search').addEventListener("keyup", (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13
    if (isEnterKeyPressed) {
        if(validateEmptyInput(userName)) return

        getUserData(userName)
    }

})
function validateEmptyInput(Input){
    if(Input.length === 0){
        return true
    }

}



async function getUserData(userName) {
    const userResponse = await getUser(userName)
    console.log(userResponse)
    if(userResponse.message ==="Not Found"){
        screen.renderNotFound()
        return
    }
    const repositoriesResponse = await getRepositories(userName)
    
    
    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    console.log(user)

    screen.renderUser(user)
    
}