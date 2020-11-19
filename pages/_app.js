import React from 'react'
import App from "next/app"
import Head from "next/head"

import Nav from "../components/Nav"
import Footer from "../components/Footer"
import "../assets/css/index.css"

export default function CMApp({ Component, pageProps }) {
   return (
      <div>
         <Head>
            <title>index</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" />
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" ></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" ></script>
         </Head>
         <Nav />
         <div className="index-content">
            <Component {...pageProps} />
         </div>
         <Footer />
         <style jsx>
            {
               `
                  .main-content{
                     margin-top: 30px
                  }
                  `
            }

         </style>
      </div>
   )
}
