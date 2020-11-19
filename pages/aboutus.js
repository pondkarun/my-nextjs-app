import React from 'react'
import Head from "next/head"

import styles from "../assets/css/alert.module.css"

export default function aboutus() {
    return (
        <div>
            <Head>
                <title>aboutus</title>
            </Head>
            <h1>AboutUs</h1>
            <p className={styles.error}>Error</p>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </div>

        </div>
    )
}
