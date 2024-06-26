import React from 'react'
import {ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function Notification() {
 
 return (
    <ToastContainer
    position="top-right"
    autoClose={1500}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
  )
}

export default Notification
