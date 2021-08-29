import React from 'react'
import Link from 'next/link'

type ButtonSizes = 'sm' | 'md' | 'lg'
type ButtonTypes = 'normal' | 'outlined' | 'normalLink' | 'navLink'

type ChildrenProps = {
  type: ButtonTypes
  size: ButtonSizes
  href: string
  content: string
}

const Button = (children: ChildrenProps) => {
  // AVAILABLE sizes: sm, md, lg
  // AVAILABLE types: normal, outlined, normalLink, navLink
  return (
    <>
      <Link href={children.href}>
        <a className={`${children.size} ${children.type}`}>
          {children.content}
        </a>
      </Link>
    </>
  )
}

export default Button
