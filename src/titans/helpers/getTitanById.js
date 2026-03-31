
import { titans } from "../data/titans"

export const getTitanById = (id) => {
    const titanFounded = titans.find(
        titan => titan.id === id
    );
    return titanFounded;
}