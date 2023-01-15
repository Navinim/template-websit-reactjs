import React, { useEffect, useState } from 'react'
import '../css/newproduct.css'
import { getCategories } from './auth/apiCategory'
import {createProduct} from './auth/apiProduct'

const AddProduct = () => {
    const [values, setValues] = useState({
        title: '',
        desc: '',
        img: '',
        categories: [],
        category: '',
        error: '',
        success: false,
        formData:'',
    })
    //object destructering
    const { title, desc, categories,category,error, success, formData } = values
    //load categories and set form data
    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            }
            else {
                setValues({ ...values, categories: data, formData:new FormData() })
            }
        })
    }
    //to semd formData
    useEffect(() => {
        init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const handleChange = name => event => {
        const value = name === 'img' ? event.target.files[0] : event.target.value
        formData.set(name, value)
        setValues({ ...values, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setValues({ ...values, error: '' })
        createProduct(formData)
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error })
                }
                else {
                    setValues({ ...values, title:'', desc:'',category, success: true, error: '' })
                }
            })
    }
    //to show error
    const showError = () => (
        <span style={{ color: 'red', display: error ? '' : 'none' }}>{error}</span>
    )
    //to show success message
    const showSucc = () => (
        <span style={{ color: 'green', display: success ? '' : 'none' }}>
            New Product has been Created.
        </span>
    )
    return (
        <>
            <div className="newProductContainer">
                <h1 className="addProductTitle">New Product</h1>
                {showError}
                    {showSucc}
                <form className="addProductForm" >
                    
                    <div className="addProductItem" >
                        <label>Title</label>
                        <input type="text" placeholder="Apple Airpods" onChange={handleChange('title')} value={title} />
                    </div>
                    <div className="addProductItem" >
                        <label>Description</label>
                        <textarea type="text" placeholder="Description about item" onChange={handleChange('desc')} value={desc} />
                    </div>
                    <div className="addProductItem" >
                        <label>Image</label>
                        <input type="file" id="file" onChange={handleChange('img')} accept="image/*" />
                    </div>
                    <div className="addProductItem" >
                        <label>Category</label>
                        <select onChange={handleChange('category')}>
                            <option>Choose Category</option>
                            {categories && categories.map((c, i) => (
                                <option key={i} value={c._id}>
                                    {c.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button className="addProductButton" onClick={handleSubmit}>Create</button>
                    <h3 id='h3blink'>If you don't have Category Add from Right form.</h3>
                </form>
            </div>
        </>
    )
}

export default AddProduct