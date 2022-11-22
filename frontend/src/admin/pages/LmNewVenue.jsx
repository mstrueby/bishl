import {useState} from 'react'
import VenueForm from "../components/VenueForm";
import { venueValidator } from "../venueValidators";
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';

let BASE_URL = "http://localhost:8000/venues/"

const LmNewVenue = () => {

  const [error, setError] = useState([])
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    shortName: '',
    street: '',
    zipCode: '',
    city: '',
    country: 'Deutschland',
    latitude: '',
    longitude: '',
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
      navigate("/admin/venues", { state: { message: "Erfolgreich gespeichert" } });
    }
  };

  const validate = (values) => {
    const errors = venueValidator(values);
    return errors;
  };

  const handleCancel = () => {
    navigate('/admin/venues')
  }

  const formProps = {
    initialValues,
    validate, // or validationSchema. Check example validation schema in validators.js file
    onSubmit,
    enableReinitialize: false,
    handleCancel,
    isNew: true,
  };

  return (
    <Layout>
      <div>
        <h2>Neue Spielfläche</h2>
        <VenueForm {...formProps} />
      </div>
    </Layout>
  );
}

export default LmNewVenue