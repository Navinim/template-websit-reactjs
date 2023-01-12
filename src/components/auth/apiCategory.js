import {API} from '../../config'


// for add category
export const createCategory=async (category)=>{
    try {
        const res = await fetch(`${API}/postcategory`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json",
                // Authorization: `Bearer ${token}`
            },
            body:JSON.stringify(category)
        })
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}
//to get all category
export const getCategories=async ()=>{
    try {
        const res = await fetch(`${API}/categorylists`, {
            method: "GET",
        })
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}