import {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'


const Venues = () => {
  const [venues, setVenues] = useState([])
  const [name, setName] = useState('')
  const [isPending, setIsPending] = useState(true)

  const handleChangeName = (ev) => {
    setVenues([])        
    setName(ev.target.value)
    setIsPending(true)
}

  useEffect(() => {
    fetch(`http://localhost:8000/venues?name=${name}`)
      .then(response=>response.json())
      .then(json=>setVenues(json))
      setIsPending(false)
  },[name])

  return (
    <Layout>
      <h2>Spielstätten - {name?name:"Alle"}</h2>
      <div>
        <label htmlFor='venues'>Spielstätte wählen: </label>
        <select name="venues" id="venues" onChange={handleChangeName}>
          <option value="">Alle</option>
          <option value="Poststadion">Poststadion</option>
        </select>
      </div>
      <div>
        {isPending && <div>
          <h2>Loading venues...</h2></div>}
        <div>
          {venues && venues.map(
            (el)=>{
              return (<Card key={el._id} venue = {el} />)
            }
          )}
        </div>
      </div>
    </Layout>

  )
}

export default Venues