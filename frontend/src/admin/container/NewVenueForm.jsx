import {useState, useEffect} from 'react'
import VenueForm from "../components/VenueForm";
import { wait } from "../../utils";
import { venueValidator } from "../venueValidators";
import { useNavigate } from 'react-router-dom';

let BASE_URL = "http://localhost:8000/venues/"

const NewVenueForm = () => {

  const [venue, setVenue] = useState({})
  const [error, setError] = useState([])
  const navigate = useNavigate();

  const initialValues = {
    name: 'TEST',
    shortName: 'te',
    street: 's',
    zipCode: '12',
    city: 'b',
    country: 'Deutschland',
    latitude: '1',
    longitude: '2',
    active: false,
  };

  const onSubmit = async (values, actions) => {

    const response = await fetch(BASE_URL,{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(values)
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
    //   console.log("Submitting: ", values);
    //   //await wait(2000);
    //   setVenue(values);
    //   console.log("Venue: ", venue)
    //   alert("Success");
    // } catch (error) {
    //   alert("FailXXX");
    // }
  };

  const validate = (values) => {
    const errors = venueValidator(values);
    return errors;
  };

  const formProps = {
    initialValues,
    validate, // or validationSchema. Check example validation schema in validators.js file
    onSubmit,
    enableReinitialize: false,
    isNew: true,
  };

  return (
    <div>
      <h2>Neue Spielfläche</h2>
      <VenueForm {...formProps} />
    </div>
  );
}

export default NewVenueForm