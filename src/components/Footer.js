import React from 'react'
import {Typography} from "@mui/material"
import {menus,socials} from '../data/footerData'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
     <footer className="relative px-4 pt-8 pb-6 bg-gray-400">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              Brand
            </Typography>
            <Typography className="font-normal text-blue-gray-500">
            We provide Computer related products and services
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <Fab color="white" className="rounded-full">                    
                      <i className={`fa-brands fa-${name}`} />
                      {/* <FontAwesomeIcon icon={`fa-brands fa-${name}`}/>                     */}
                  {/* </Fab> */} 
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              Copyright © {year} Created by{" "}
      <a
        href="https://www.navinpaudel.com.np"
        target="_blank" rel="noreferrer"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      >
        Creative Navin
      </a>
      .
            </Typography>
          </div>
        </div>
      </div>
    </footer>

    </>
  )
}

export default Footer