import React, { ReactNode } from 'react'
import * as S from './button.style'

type ChildrenProps = {
  content: ReactNode
  // props: LinkProps
}

const Button = ({ content }: ChildrenProps) => {
  // AVAILABLE sizes: sm, md, lg
  // AVAILABLE types: normal, outlined, normalLink, navLink

  return (
    <>
      {/* <Link passHref {...props}> */}
      <S.aLink size="sm">{content}</S.aLink>
      {/* </Link> */}
    </>
  )
}

export default Button
