import { Contacto } from "./contactos";

function updateIPAddress(contactos:Contacto[]) {
    const actualizados = contactos.map((contacto) => {
        return {
            ...contacto,
            ip_address: contacto.ip_address+"."+contacto.id
        }
    }) 
    return actualizados
}
export{updateIPAddress}