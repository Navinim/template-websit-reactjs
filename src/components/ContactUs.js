import React from 'react'
import { Button, TextField } from "@mui/material";

const ContactUs = () => {
    return (
        <>
            <form className=" mx-auto mt-10 max-w-3xl">
                <h2 className="uppercase font-bold">Contact us</h2>
                <div className="mb-8 flex gap-8">
                    <TextField variant="standard" size="lg" label="Full Name" />
                    <TextField variant="standard" size="lg" label="Email Address" />
                </div>
                <div className="mb-8 flex gap-8">
                    <TextField variant="standard" size="lg" label="Message" multiline />
                    <Button variant="contained" size="sm">
                        Send Message
                    </Button>
                </div>

            </form>

        </>
    )
}

export default ContactUs