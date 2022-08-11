import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import logo from '../../assets/Logo_ML.png'
import buscar from '../../assets/ic_Search.png'
import './style.css'

export const Navbar = () => {
  const navigate = useNavigate()

  const { value, resetInput, handleInputChange } = useForm({ search: '' })
  const { search } = value
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault()
    navigate(`items?search=${search}`)

    resetInput()
  }

  const clikBrand = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.preventDefault()
    navigate(`/`)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" onClick={clikBrand} />
        </a>
        <form
          className="d-flex nav-search"
          role="search"
          onSubmit={handleSubmit}
        >
          <div className="input-group">
            <input
              className="form-control "
              name="search"
              type="text"
              autoComplete="off"
              onChange={handleInputChange}
              value={search}
              placeholder="No dejes de buscar..."
            />
            <button
              className="btn nav-search-btn"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              <img src={buscar} alt="" />
            </button>
          </div>
        </form>
      </div>
    </nav>
  )
}
