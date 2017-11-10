export function getDataApi(item){
    return fetch(item)
        .then(response => Promise.all([response.text.responseResult,response.json()]))
}

export function getDataApi3(item){
    return fetch(item)
        .then(response => Promise.all([response.text.responseResult,response.json()]))
}

var api = {
   getInfoDetail(item){
    return fetch(item)
    .then(response => Promise.all([response.text.responseResult,response.json()]))
}
}

export default api