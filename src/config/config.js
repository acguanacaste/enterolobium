export default Config = {
    api:{
        protocol:"http://",
        server:"localhost",
        port:'8000'
    },
    display:{
        backgroundColoro1:"#AAA",
        fontColor:"#fff",
    
    },
    appInfo:{
        logo:"img/logo.png",
        text:"Buscamos bioalfabetizar a la población por medio de la tecnologia.Esta aplicación para teléfonos móviles es una herramienta mediante la cual queremos poner a disposición de todos información que nos acerque mas a la naturaleza y nos permita conocer las diferentes mariposas que habitan en nuestro territorio. El Area de Conservación Guanacaste es un conjunto de Áreas Protegidas que se encuentra ubicada en el extremo noroeste de la Provincia de Guanacaste. Cuenta con una extensión de 110.000 hectáreas en la sección terrestre y 43.000 hectáreas en la sección marina. Su principal misión es  Conservar la Biodiversidad de los Ecosistemas y el Patrimonio Cultural,ademas de servir como modelo de desarrollo que integra el manejo del Área a la sociedad."
,
        links:{
            link:{
                url:"https://www.acguanacaste.ac.cr",
                label:"Area de Conservacion Guanacaste"
            }
        },
        socialNetworks:{
            net:{
                label:"Facebook",
                img:"/img/facaebook.png",
                url:"https://faceook.com/ACG.CR"
            }
        }
    },
    labels:{
        menu:{
           items:["Especies","Familias","Generos","Información"],
        },
        header:{
            fields: ["scientificname","genus","subFamily","family","order"],
        }
    },
    detailFields:{
        especies:{label_es:"Especies"}

    }
}