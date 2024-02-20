import { contactos } from "./contactos"

function findByEmail(email:string) {
    if (email === "") {
        return contactos
    }
    return contactos.filter((contacto) => {
        return contacto.email.includes(email)
    })
}
export{findByEmail}