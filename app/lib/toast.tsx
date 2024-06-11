import React from 'react'
import {toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function Notification() {
 
 return (
    <ToastContainer
    position="top-right"
    autoClose={1500} // Close the toast after 3 seconds
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