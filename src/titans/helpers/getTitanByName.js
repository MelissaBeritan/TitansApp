import { titans } from "../data/titans"

export const getTitanByName = (name) => {

    const titansFounded = titans.filter(
        titan => titan.titan.trim().toLowerCase().includes(name));
    return titansFounded;
        
}

