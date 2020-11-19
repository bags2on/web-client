import React from 'react'
import classes from './MainProduct.module.scss'
import { Link } from 'react-router-dom'
import { generateLink } from '../../utils/links'
import routes from '../../utils/routes'
import imgTEMPsrc from '../../assets/rastr/prada-black-leather.png'

interface MainProductProps {
  id: string
  price: number
  title?: string
}

const MainProduct: React.FC<MainProductProps> = ({ id, title, price }) => {
  return (
    <section className={classes.root}>
      <Link to={generateLink(routes.product, id)}>
        <img className={classes.image} src={imgTEMPsrc} alt="самый рекомендуемый товар" />
        <div className={classes.priceBox}>
          <p className={classes.price}>
            {price}
            <span>грн.</span>
          </p>
        </div>
        {title && <p className={classes.title}>{title}</p>}
      </Link>
    </section>
  )
}

export default MainProduct
