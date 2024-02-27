import { contactos } from "./contactos";

function findOneByEmail(email: string) {

    const encontrados = contactos.filter((contacto) => {
        return contacto.email.includes(email)
    }) 
    return encontrados[0] 
} 


export { findOneByEmail }