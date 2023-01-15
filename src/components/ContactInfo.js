import React from 'react'
import {AddLocationAltOutlined, PhoneInTalkOutlined, MarkEmailReadOutlined } from '@mui/icons-material';
import Fab from '@mui/material/Fab'

const ContactInfo = () => {
  return (
    <>
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

    </>
  )
}

export default ContactInfo