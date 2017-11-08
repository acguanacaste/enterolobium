import _ from 'lodash'

export const replaceUrl = name =>{
    var newUrl = ''
    if(name ==='Especies' )
    {
        newUrl =  'http://localhost:8000/api/especies'
    }
    else if(name === 'Familias')
    {
        newUrl = 'http://localhost:8000/api/taxonomias/tipoTaxonomia/family' 
    }
    else
    {
        newUrl = 'http://localhost:8000/api/taxonomias/tipoTaxonomia/genus'
    }
    
return newUrl
}


export const replaceRequest = (name,item) =>{
    var newRequest = ''
    if(name ==='Especies' )
    {
        newRequest =  'http://localhost:8000/api/Observaciones/especie/' + item
    }
    else if(name === 'Familias')
    {
        newRequest = 'http://localhost:8000/api/Observaciones/familia/' + item
    }
    else
    {
        newRequest = 'http://localhost:8000/api/Observaciones/genero/' + item
    }
    
return newRequest
}