//Botones para acceder a la lista de API
const buttonFetchAll = document.getElementById('fetch-all')
const buttonFetchOne = document.getElementById('fetch-one')

//Botones para editar lista de API
const buttonDelete = document.getElementById('delete-one')
const buttonUpdate = document.getElementById('edit-character-form')
const buttonCreate = document.getElementById('new-character-form')

const charactersAPI = new APIHandler("http://localhost:8000")
//BASE_URL --->>> APIhandler URL que da en la consola


window.onload = () => {

  //FetchAll
  buttonFetchAll.onclick = () => {
    axios.get(charactersAPI.BASE_URL + '/characters')
    .then(({data}) => {
        console.log(data)
    })
    .catch(err => console.log((err)))
}
  
//FetchOne
  buttonFetchOne.onclick = () => {
    id = document.getElementById('character-id').value
    axios.get(`${charactersAPI.BASE_URL}` + `/characters/${id}`)
    .then((data) => {
      console.log(data)
    })
    .catch(err => console.log(err))
  }
  
  //Delete
  buttonDelete.onclick = () => {
    id = document.getElementById('character-id-delete').value
    axios.delete(`${charactersAPI.BASE_URL}` + `/characters/${id}`)
    .then((data) => {
      console.log(data)
    })
    .catch(err => console.log(err))
  }
  
  //Create
  buttonCreate.onclick = () => {
    id = document.getElementById('new-character-form').value

    //inputs
    name = document.querySelector('input[name = "name"]').value
    occupation = document.querySelector('input[occupation = "occupation"]').value
    weapon = document.querySelector('input[weapon = "weapon"]').value
    //cartoon = document.querySelector('input[cartoon] = "checkbox"').value

    axios.post(`${charactersAPI.Base_URL}${id}`, {name, occupation, weapon})
    .then((data) => {
      console.log(data)
    })
    .catch(err => console.log(err))
  }
  
  //Edit
  buttonUpdate.onsubmit = () => {
    id = document.getElementById('')       
  }
  
}
