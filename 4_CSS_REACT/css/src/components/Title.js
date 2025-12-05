import React from 'react'
//esse style é como se fosse um objeto de titu.Module.css instacio ele para usar as coisas que estao dentro do module css
import styles from './Title.Module.css'

const Title = () => {
  return (
    <div>
        <h1 className={styles.my_title}>
            Meu titulo
        </h1>
    </div>
  )
}

export default Title