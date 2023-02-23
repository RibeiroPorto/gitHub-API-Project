import { baseUrl,repositoriesQauntity } from "../variables.js"
async function getRepositories(userNmae) {
    const response = await fetch(` ${baseUrl}${userNmae}/repos?per_page=${repositoriesQauntity}`);

    return await response.json();
}

export {getRepositories}