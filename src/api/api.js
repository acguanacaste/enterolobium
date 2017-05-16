export default () =>{
    return fetch('http://localhost:8000/api/especies')
        .then(response => Promise.all([response.text.responseResult,response.json()]))
}

export function getDataApi2(){
    return fetch('http://localhost:8000/api/taxonomias/tipoTaxonomia/genus')
        .then(response => Promise.all([response.text.responseResult,response.json()]))
}
