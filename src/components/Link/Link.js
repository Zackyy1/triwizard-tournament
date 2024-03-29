import React from 'react'
import './Link.scss'

const Link = ({children, href, target, rel}) => {
  return (
    <a className='custom-link' href={href} rel={rel || 'noreferrer'} target={target}>{children}</a>
  )
}

export default Link