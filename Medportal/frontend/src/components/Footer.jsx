import React from 'react'

const Footer = () => {
  return (
    <>  
    <footer className="bg-dark text-light py-4">
        <div className="container text-center">
          <p>&copy; 2024 Med-Portal</p>
          <ul className="list-inline">
            <li className="list-inline-item"><a className="text-light" href="#">Privacy</a></li>
            <li className="list-inline-item"><a className="text-light" href="#">Terms</a></li>
            <li className="list-inline-item"><a className="text-light" href="#">Support</a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer;
