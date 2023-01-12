import React from 'react'
import AddCategory from './AddCategory'
import AddProduct from './AddProduct'
import Footer from './Footer'

const AddData = () => {
    return (
        <>
            <div className="bg-[url('https://img.freepik.com/free-photo/abstract-ocean-art-natural-luxury-style-incorporates-swirls-marble-ripples-agate-ve_1258-128973.jpg?w=996&t=st=1673188922~exp=1673189522~hmac=e746bc909d5bb8f86380bcdf14b5b62f9718c18bcd74b1f4b62d541c3596da10')] bg-cover bg-center">
                <div className="relative flex content-center items-center justify-center py-10 bg-black/75">
                    {/* <div className="absolute top-0 w-full" /> */}
                    <div className="absolute top-0 h-full w-full" />

                </div>
            </div>
            <div className="homeWidgets w-full bg-[url('https://img.freepik.com/free-photo/dirty-pattern-paint-room-block_1203-5709.jpg?w=740&t=st=1673189236~exp=1673189836~hmac=e8136042a03ee8e13f6e553405380dd50fdfd9b779901869a0baf20665f91e84')] bg-cover bg-center">
                <div className='ml-6 justify-center grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-2 xl:items-center'>
                    <AddProduct />
                    <AddCategory />

                </div>
            </div>
            <Footer />
        </>
    )
}

export default AddData