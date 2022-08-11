import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Item } from '../../interfaces'
import { getDeatilItem } from '../../services'
import { formatMoneda } from '../../utils/formatMoneda'
import './style.css'

const INITIAL_STATE: Item = {
  id: '',
  title: '',
  price: {
    aumount: 0,
    currency: '',
    decimals: 0,
  },
  condition: '',
  description: '',
  free_shipping: false,
  picture: '',
  sold_quantity: 0,
}

export const ItemDetail = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [product, setProduct] = useState(INITIAL_STATE)
  const { id = '' } = useParams()

  const clickButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    console.log('Gracias por tu compra!')
  }
  useEffect(() => {
    if (!id) navigate('/')

    getDeatilItem(id)
      .then((res: any) => {
        setProduct(res.product)
        setIsLoading(false)
      })
      .catch(() => setIsLoading(false))
  }, [id])

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className="container item-detail">
            <div className="row">
              <div className="col">
                <img src={product.picture} className="detail-image" />
              </div>
              <div className="col-5 detail-lef">
                <p className="detail-header">{`${product.condition.toUpperCase()} - ${
                  product.sold_quantity
                } vendidos`}</p>
                <p className="detail-title">{product.title}</p>
                <p className="detail-price">
                  $ {formatMoneda(product.price.aumount)}
                </p>
                <button
                  className="btn btn-primary detail-btn"
                  onClick={clickButton}
                >
                  Comprar
                </button>
                <div className="row"></div>
              </div>
            </div>
            <h1 className="detail-titleD">Descripcion del producto</h1>
            <p className="detail-description">{product.description}</p>
          </div>
        </div>
      )}
    </>
  )
}
