import { contactos } from "./contactos";
function findOneByEmail(contacto:any) {
    if (email === "") {
        return contactos
    }
    return contactos.filter((contacto) => {
        return contacto.email.includes(email)
    })
}

export{findOneByEmail}