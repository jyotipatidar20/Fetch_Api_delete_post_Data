const container=document.querySelector(".container")
const ID = document.querySelector('.ID')
const title = document.querySelector('.title')
const category=document.querySelector(".category")
const description = document.querySelector('.description')
const price = document.querySelector('.price')
const submitBtn = document.querySelector('#submitBtn')

const deleteData = async (dataID) => {

    const response = await fetch(`http://localhost:3000/products/${dataID}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'

        }
    })
    getdata()
    return response.json()
}
const displayData = (data) => {
    container.innerHTML = ""
    data.map((item, index) => { 
        container.innerHTML += `<tr>
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.category}</td>
        <td>${item.description}</td>
        <td>${item.price}</td>

        <td><button onclick="deleteData(${item.id})">DELETE</button></td>
        </tr>`
    })

}
API="http://localhost:3000/products"
const getdata=async()=>{
    let response=await fetch(API)
    let result =await response.json()
    displayData(result)
    
}
getdata()




const postData = async () => {
    const data = { "id": ID.value, "title": title.value,"category":category.value ,"description":description.value ,"price":price.value}
    const response = await fetch(`http://localhost:3000/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    getdata()
    return response.json()
}
submitBtn.addEventListener('click', postData)
