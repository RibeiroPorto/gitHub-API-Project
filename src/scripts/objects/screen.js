 const screen ={
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        
        this.userProfile.innerHTML = `
        <div class='info'><img src="${user.avatarUrl}" alt="Foto Perfil User">
        <div class="data">
            <h1>${user.name ?? "Não possui nome cadastrado"}</h1>
            <p>${user.bio ?? "Não  possui bio "}</p>
            <div class='folowers-data'>
                <div>
                <p>${user.followers}</p>
                <p>  Followers </p>
                </div>
                <div>
                <p> ${user.following} </p>
                <p>  Following </p>
                </div>
                
            </div>
        </div>
        </div>`
        let repositoriesItens = ''
        user.repositories.forEach(repo =>  repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a>
        <div> 
        <p>🍴 ${repo.forks}</p><p>⭐ ${repo.stargazers_count}</p><p>👀 ${repo.watchers}</p><p>👨‍💻 ${repo.language ?? ""}</p></div></li>`)

        if(user.repositories.length >0){
            this.userProfile.innerHTML+=`<div class='repositories section'>
            <h2>Repositórios</h2>
            <ul>
            ${repositoriesItens}
            </ul>
            </div>`
        }
        let events = ''
        user.events.forEach(event =>events +=`<li><a href="${event.repo.url}" target="_blank">${event.repo.name.replace(/^.*\//, "")}</a> - ${ event.payload.description ?? event.payload.commits[0].message}</li>`)

        if(user.events.length >0){
            this.userProfile.innerHTML+=`<div class='events section'>
            <h2>Eventos</h2>
            <ul>
            ${events}
            </ul>
            </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML ='<h3>Usuario não encontrado</h3>'

    }
 }

 export { screen}