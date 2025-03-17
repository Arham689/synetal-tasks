// calling a api using async / await 

// fetch('https://api.github.com/users/Arham689')
// .then(res => res.json())
// .then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)})

let user = null 
const para = document.createElement('p');
const img = document.getElementById('img')
const card = document.getElementById('card') 
console.log(card)
async function getData(){
    try {
        const res = await fetch("https://api.github.com/users/Arham689")

        const data = await res.json() ; 

        para.innerText = data.login
        img.setAttribute('src' , data.avatar_url)
        console.log(data)
    } catch (error) {
        console.log(error)
    }   
}
getData() 
console.log(user)

// para.innerHTML = user.login
card.appendChild(para)