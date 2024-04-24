import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='main-page'>
        <nav className='navbar'>
        <h1>
        Job<span>Portal</span> 
        </h1>
        
        <ul>
            <li>
                <link to="/home">Home</link>
            </li>
            <li>
                <link to="/jobs">Jobs</link>
            </li>
            <li>
                <link to="/post-job">Post Job</link>
            </li>
            <li>
                <link to="/saved-job">Saved Job</link>
            </li>
            
        </ul>
        </nav>
        
    </div>
    </>
    
  )
}

export default Navbar