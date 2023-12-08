import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { routeNames, generateProductLink } from '@/utils/navigation'
import styles from './MainProduct.module.scss'

interface MainProductProps {
  id: string
  price: number
  title?: string
}

const MainProduct: React.FC<MainProductProps> = ({ id, title, price }) => {
  return (
    <section className={styles.container}>
      <div className={styles.background} />
      <Link
        href={generateProductLink(routeNames.product, id, 'TODO')}
        className={styles.linkWrapper}
      >
        <Image
          className={styles.image}
          width={800}
          height={800}
          quality={80}
          src={
            'https://res.cloudinary.com/dct4oinuz/image/upload/v1683563023/bags2on/prada-black-leather_asdgjb.png'
          }
          alt="самый рекомендуемый товар"
        />
        <div className={styles.priceBox}>
          <p className={styles.price}>
            {price}
            <span>грн.</span>
          </p>
        </div>
        {title && <p className={styles.title}>{title}</p>}
      </Link>
    </section>
  )
}

export default MainProduct
