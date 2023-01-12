import { API } from '../../config';

//to add product
export const createProduct=async (product)=>{
    try {
        const res = await fetch(`${API}/postproduct`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                // "Content-Type": "application/json",
                // Authorization: `Bearer ${token}`
            },
            body:product
        })
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}
// to get product by arrival date and sort ,limit,
export const getProduct=(sortBy)=>{
    return fetch(`${API}/productlist?sortBy=${sortBy}&order=desc&limit=6`,{
        method:"GET"
    })
    .then(res=>{
        return res.json()
    })
    .catch(error=>console.log(error))
}
// to filter product by category
export const filterProduct=()=>{
    return fetch(`${API}/productlist/:categoryName`,{
        method:"GET"
    })
    .then(res=>{
        return res.json()
    })
    .catch(error=>console.log(error))
}

