import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { Navbar } from '../components/navbar/Navbar'
import { ItemsScreen } from '../components/listItems/ItemsScreen'
import '../index.css'
import { ItemDetail } from '../components/listItems/ItemDetail'
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-4 back">
        <Routes>
          <Route path="items" element={<ItemsScreen />} />
          <Route path="items/:id" element={<ItemDetail />} />
          <Route path="/*" element={<></>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
