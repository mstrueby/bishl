import {useState, useEffect} from 'react'
import Layout from '../../components/Layout'
import { Link, useLocation, useNavigate } from "react-router-dom"
import LmSidebar from '../components/LmSidebar'
// import navigation from './LeagueManager'

const LmVenues = () => {
  const [venues, setVenues] = useState([])
  const location = useLocation();
  const navigate = useNavigate();

  let msg = location.state ? location.state.message : null;

  const routeChange = () =>{ 
    let path = `/admin/newvenue`; 
    navigate(path);
  }

  useEffect(() => {
    fetch(`http://localhost:8000/venues`)
      .then(response=>response.json())
      .then(json=>{setVenues(json)})
  },[])

  
  return (
    <Layout>
      <LmSidebar/>
      <div>
        <h2>Admin - Spielstätten</h2>
        <p>{msg}</p>
        <div>
          {venues && venues.map(
            (el)=>{
              return (
                <Link to={`/admin/venues/${el._id}`}>
                  <p>{el.name}</p>
                </Link>)
            }
          )}
        </div>
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={routeChange}
        >
          Neue Spielfläche
        </button>
      </div>
    </Layout>

  )
}

export default LmVenues