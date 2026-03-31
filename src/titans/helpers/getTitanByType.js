import { titans } from "../data/titans"

export const getTitanByType = (type) => {
    const types = ["pure", "shifting"];
    if (!types.includes(type)) {
        return;
    }
    const data = titans.filter(titan => titan.type === type);
    return data;
       
}
