import { titans } from "../data/titans"

export const getTitanByType = (type) => {
    const type_ = "pure";
    const data = titans.filter(titan => titan.type === type_);
    console.log(data);
    return data;
    
}
