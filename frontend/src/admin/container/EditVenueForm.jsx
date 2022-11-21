import {useState, useEffect} from 'react'
import {useParams, useNavigate} from "react-router-dom"
import VenueForm from "../components/VenueForm";
import { wait } from "../../utils";
import { venueValidator } from "../venueValidators";


let BASE_URL = "http://localhost:8000/venues/"

// const EditVenueForm = ({ venue, setVenue }) => {
const EditVenueForm = () => {

  let {id} = useParams()
  const [venue, setVenue] = useState({})
  const [error, setError] = useState([])
  const navigate = useNavigate();

  const initialValues = { ...venue }

  // const getVenue = async () => {
  //   const res = await fetch(`${BASE_URL}${id}`)
  //   if (!res.ok) {
  //     setError("Error fetching venue")
  //   } else {
  //     const data = await res.json()
  //     setVenue(data)
  //     // console.log("getVenue (setVenue): ", venue, data.name)
  //     // setPrice(data.price)
  //   }
  //   // setIsPending(false)
  // }

  const onSubmit = async (values, actions) => {
    const response = await fetch(`${BASE_URL}${id}`,{
      method:"PATCH",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(values)
    })

    const data = await response.json()
    if(!response.ok) {
      let errArray = data.detail.map(el=>{
        return `${el.loc[1]} -${el.msg}`
      })
      setError(errArray)
    } else {
      setError([])
      navigate('/admin/venues')
    }
    // try {
    //   console.log("Updating: ", values);
    //   await wait(2000);
    //   setVenue(values);
    //   alert("Success");
    // } catch (error) {
    //   alert("Fail");
    // }
  };

  const validate = (values) => {
    const errors = venueValidator(values);
    return errors;
  };

  const formProps = {
    initialValues,
    validate,
    onSubmit,
    enableReinitialize: true,
    isNew: false,
  };

  useEffect(()=>{
    async function getVenue() {
      const res = await fetch(`${BASE_URL}${id}`)
      if (!res.ok) {
        setError("Error fetching venue")
      } else {
        const data = await res.json()
        setVenue(data)
        // console.log("getVenue (setVenue): ", venue, data.name)
        // setPrice(data.price)
      }
    }
    getVenue();
    // setIsPending(false)
  }, [id])
  
  return (
    <div>
      <h2>Spielfläche ändern</h2>
      <VenueForm {...formProps} />
    </div>
  );
}

export default EditVenueForm