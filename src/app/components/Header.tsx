import React from 'react'
import logo from '../../assets/images/logo.png'
import Image from 'next/image'
type Props = {}

function Header({}: Props) {
  return (
    <div className="logo">
        <div className="logo-icon">
            <Image
                src={logo}
                alt="logo"
                width={32}
                height={63}
                quality={100}
                object-fit= "contain"
              />
        </div>
        <div className="logo-text">
            Trimba.
        </div>
    </div> 
  )
}

export default Header