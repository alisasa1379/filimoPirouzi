async function Menu(){
    let menu = ""
    let data = await fetch("https://alisasa1379.github.io/jsonserver/db.json")
    let res = await data.json()
    menu = res.menu.map((elem)=>{
        return `<li><a href=${elem.href}>${elem.name}</a></li>`
    })
    document.querySelector("#rightMenu ul").insertAdjacentHTML("afterbegin",menu.join(""))

    let login = ""
    let dataLogin = await fetch("https://alisasa1379.github.io/jsonserver/db.json")
    let resLogin = await dataLogin.json()
    login = resLogin.login.map((elem)=>{
        return `<button>${elem.name}</button>`
    })
    document.querySelector(".login").insertAdjacentHTML("afterbegin",login.join(""))

    let sub = ""
    let dataSub = await fetch("https://alisasa1379.github.io/jsonserver/db.json")
    let resSub = await dataSub.json()
    sub = resSub.subscribe.map((elem)=>{
        return `<button>${elem.name}</button>`
    })
    document.querySelector(".subscribe").insertAdjacentHTML("afterbegin",sub.join(""))
}

export default Menu;