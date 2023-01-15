import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import { mobile } from "../responsive";
import Product from './Product';
import Footer from './Footer'
import { getCategories } from '../components/auth/apiCategory'


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductList = () => {
    // const location=useLocation()
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState()

    const loadCategory = () => {
        getCategories().then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                setCategories(data)
            }
        })
    }
    useEffect(() => {
        loadCategory()
    }, [])
    const handleFilters = (e) => {
        const value = e.target.value
        setSelectedCategory({
            [e.target.name]: value,
        })
    };
    // console.log(location)
    // console.log(selectedCategory)
    return (
        <>
            <div className="relative flex content-center items-center justify-center py-16 bg-[url('https://img.freepik.com/free-photo/abstract-ocean-art-natural-luxury-style-incorporates-swirls-marble-ripples-agate-ve_1258-128973.jpg?w=996&t=st=1673188922~exp=1673189522~hmac=e746bc909d5bb8f86380bcdf14b5b62f9718c18bcd74b1f4b62d541c3596da10')]">
                <div className="absolute top-0 w-full  bg-gray-500" />
                <div className="absolute top-0 h-full w-full bg-black/75" />

            </div>
            <section className="bg-gray-50 px-4 pb-20 pt-4">
                <Container>
                    <Title></Title>
                    <FilterContainer>
                        <Filter>
                            <FilterText>Category:</FilterText>
                            <Select name='category' onChange={handleFilters}>
                                <Option default>All</Option>
                                {categories.map((c, i) => (
                                    <Option key={i} value={c._id}>
                                        {c.name}
                                    </Option>
                                ))}
                            </Select>
                        </Filter>
                    </FilterContainer>
                    <div className="mt-2 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-3">
                        <Product category={selectedCategory} />
                    </div>
                </Container>
            </section>
            <Footer />

        </>
    )
}

export default ProductList