import React from 'react'
import "./PageNotFound.css"
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>
              <div className="contant_box_404">
                <h3 className="h2">
                  Look like you're lost
                </h3>
                <p>the page you are looking for not avaible!</p>
                <Link to={"/"} className="link_404">Go to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
