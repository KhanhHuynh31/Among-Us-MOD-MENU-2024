import React, { useEffect, useState } from 'react'
import "./BackToTopButton.css"

export default function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    })
  }, [])
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <div>
      {backToTopButton && (
        <div style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          height: "40px",
          width: "40px",
          fontSize: "20px",
        }}
          onClick={scrollUp}
        >
          <div className="arrow"></div>
        </div>
      )
      }
    </div>
  )
}
