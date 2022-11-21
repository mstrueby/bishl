import {useState, useEffect} from 'react'
import Layout from '../../components/Layout'
import { Link, useLocation } from "react-router-dom"

const AdmVenues = () => {
  const [venues, setVenues] = useState([])
  const location = useLocation();
  let msg = location.state ? location.state.message : null;

  useEffect(() => {
    fetch(`http://localhost:8000/venues`)
      .then(response=>response.json())
      .then(json=>{setVenues(json)})
  },[])

  
  return (
    <Layout>
      <h2>Admin - Spielstätten</h2>
      <div>
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
      </div>
    </Layout>

  )
}

export default AdmVenues