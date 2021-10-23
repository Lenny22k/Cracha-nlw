const links = {
    gihtub: "Lenny22k",
    youtube: "Lenny",
    facebook: "Lenny Zin",
    instagram: "Lenny22k",
    twitter: "Lenny22k"
}
function showMeSomething() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')
        const resultado = li.children[0].href = `https://${social}.com/${links[social]}`
    }
}
showMeSomething()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${links.gihtub}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        //let nome1 = document.getElementById('nome')
        //nome1.innerHTML = data.name

        nome.textContent =  data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userPhoto.src = data.avatar_url
        userLogin.textContent = data.login
    })

}
    getGitHubProfileInfos()
    
