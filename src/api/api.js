export default () =>{
    return fetch('http://localhost:8000/api/especies')
        .then(response => Promise.all([response.text.responseResult,response.json()]))
}