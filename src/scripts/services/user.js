import { baseUrl } from "../variables.js"
async function getUser(userNmae) {
    const response = await fetch(` ${baseUrl}${userNmae}`);

    return await response.json();

}
export {getUser}
