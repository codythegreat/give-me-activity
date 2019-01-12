import React from 'react'

export default function Navbar() {
  return (
    <div style={navStyle}>
        <p style={brandStyle}><b>Give Me Activity</b></p>
        {/* <p style={aboutStyle}><b>About</b></p> */}
    </div>
  )
}

const navStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    padding: '0',
    background: '#448',
    height: '10vh',
    width: '100%',
}

const brandStyle = {

    padding: '0 5px',
};
// const aboutStyle = {
//     padding: '0 5px',
//     textAlign: 'right',
// };
