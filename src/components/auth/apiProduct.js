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
export const getProduct=()=>{
    return fetch(`${API}/productlist`,{
        method:"GET"
    })
    .then(res=>{
        return res.json()
    })
    .catch(error=>console.log(error))
}
// to filter product by category
export const filterProduct=async ()=>{
    try {
        const res = await fetch(`${API}/productlist/:name`, {
            method: "GET"
        });
        return await res.json();
    } catch (error) {
        return console.log(error);
    }
}

