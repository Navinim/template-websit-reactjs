import React from "react";
import { Button, Card, CardContent, CardMedia, Typography, TextField } from "@mui/material";
import { GroupOutlined, AddLocationAltOutlined, PhoneInTalkOutlined, MarkEmailReadOutlined } from '@mui/icons-material';
import Fab from '@mui/material/Fab'
import Footer from "./Footer";
import FeatureCard from '../card/FeatureCard'
import Offers from "./Offers";
import ProductCard from "../card/ProductCard";
import { Link } from "react-router-dom";



export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl align-top container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <h1 className="mb-6 text-white text-5xl" >
                Best Product in Town
              </h1>
              <Typography variant="lead" color="white" className="opacity-80">
                This is a simple example of a Landing Page you can build using
                Material Tailwind. It features multiple components based on the
                Tailwind CSS and Material Design by Google.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard />
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <GroupOutlined className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Working with us is a pleasure
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
                <br />
                <br />
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </Typography>
              <Button variant="outlined">read more</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardMedia className="relative h-56">
                  <img
                    alt="Card"
                    src="/img/teamwork.jpg"
                    className="h-full w-full"
                  />
                </CardMedia>
                <CardContent>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-2">
        <div className="container mx-auto">
          <Typography variant='h4' component='div' className="text-center">Our Products</Typography>
          <div className="mt-2 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            <ProductCard />
          </div>
          <div className="mt-8 text-center h-10">
            <Link to='/product'><Button variant="contained" size="lg">All Products</Button></Link>
          </div>
        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 pt-10 pb-10 px-4">
        <div className="container mx-auto mt-1">
          <Offers />
        </div>
        <div id="contact" className="mt-2 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
          <form className=" mx-auto mt-12 max-w-3xl">
            <h2 className="uppercase font-bold">Contact us</h2>
            <div className="mb-8 flex gap-8">
              <TextField variant="standard" size="lg" label="Full Name" />
              <TextField variant="standard" size="lg" label="Email Address" />
            </div>
            <TextField variant="standard" size="lg" label="Message" multiline />
            <Button variant="contained" size="lg" className="">
              Send Message
            </Button>
          </form>
          <div className=" mx-auto mt-12 max-w-3xl">
            <h3 className="uppercase font-bold mb-4">Contact Info</h3>
            <div className="flex gap-3 mb-3">
              <Fab color='error'> <AddLocationAltOutlined /></Fab>
              <div>
                <h1 className="font-bold">Address</h1>
                <span>Hello Nepal Tower,KTM</span>
              </div>
            </div>
            <div className="flex gap-3 mb-3">
              <Fab color='success'> <PhoneInTalkOutlined /></Fab>
              <div>
                <h1 className="font-bold">Phone Number</h1>
                <p>+977-9860000000</p>
                <span>014-5555555</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Fab color='primary'> <MarkEmailReadOutlined /></Fab>
              <div>
                <h1 className="font-bold">Address</h1>
                <span>Hello Nepal Tower,KTM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
