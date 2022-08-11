import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ItemResponse } from '../../interfaces'
import { formatMoneda } from '../../utils/formatMoneda'
import { searchItems } from '../../services'
import shipping from '../../assets/ic_shipping.png'
import './style.css'

export const ItemsScreen = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [categories, setCategories] = useState([])
  const { search } = useLocation()
  const navigate = useNavigate()

  const clikItem = (id: string) => {
    navigate(`/items/${id}`)
  }

  useEffect(() => {
    if (!search || search.length <= 8) navigate('/')
    searchItems(search)
      .then((res: any) => {
        setCategories(res.categories)
        setData(res.items)
        setIsLoading(false)
      })
      .catch(() => setIsLoading(false))
  }, [search])

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className="container ">
            <span className="item-categories">
              {' '}
              {categories.map((item) => ` ${item} >`)}
            </span>
          </div>
          <div className="container item-screen">
            {data.map((item: ItemResponse) => (
              <div
                key={item.id}
                className="row mt-1 item-card"
                onClick={() => clikItem(item.id)}
              >
                <div className="col-2">
                  <img src={item.picture} className="img-item" />
                </div>
                <div className="col m-2">
                  <p className="item-price">
                    $ {formatMoneda(item.price.amount)}{' '}
                    {item.free_shipping && (
                      <span>
                        <img src={shipping} alt="" />
                      </span>
                    )}
                  </p>
                  <p className="item-title"> {item.title}</p>
                </div>
                <div className="col-2">
                  <p className="item-addres mt-4">{item.addres}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
