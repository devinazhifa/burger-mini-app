import React from 'react'
import style from './burger.module.css'

const Bun = (props) => {

  let bunClass; //pakai let karena akan berubah2 tergantung props

  switch (props.type) {
    case 'top': //jika props typenya top maka stylenya bun_top
      bunClass = style.bun_top
      break
    case 'insert':
      bunClass = style.bun_insert
      break
    default:
      bunClass = ''
  }

  return (
    <div className={ `${style.bun} ${bunClass}` }></div> // import css = namaVariabel.namaClass
  )
}

export default Bun