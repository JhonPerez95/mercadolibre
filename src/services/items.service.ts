import axios from 'axios'
import { ItemDetailInterface } from '../interfaces'

export const getDeatilItem = async (id: string) => {
  const url = `${import.meta.env.VITE_URL_API}/${id}`
  try {
    const { data } = await axios.get<ItemDetailInterface>(url)

    return { product: data.item }
  } catch (error) {
    console.log(error)
  }
}

export const searchItems = async (search: string) => {
  const url = `${import.meta.env.VITE_URL_API}${search}`
  try {
    const res = await axios({ url, method: 'GET' })
    return { categories: res.data.categories, items: res.data.items }
  } catch (error) {
    console.log(error)
  }
}
