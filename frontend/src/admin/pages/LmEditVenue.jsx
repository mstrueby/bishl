import { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import VenueForm from "../components/VenueForm";
import { venueValidator } from "../venueValidators";
import Layout from '../../components/Layout';
import LmSidebar from '../components/LmSidebar'

let BASE_URL = "http://localhost:8000/venues/"

const LmEditVenue = () => {

  let { id } = useParams()
  const [venue, setVenue] = useState({})
  const [error, setError] = useState([])
  const navigate = useNavigate();

  const initialValues = { ...venue }

  const onSubmit = async (values, actions) => {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    const data = await response.json()

    if (!response.ok) {
      let errArray = data.detail.map(el => {
        return `${el.loc[1]} -${el.msg}`
      })
      setError(errArray)
    } else {
      setError([])
      navigate("/admin/venues", { state: { message: "Erfolgreich gespeichert" } });
    }

    //actions.setSubmitting(false);
    //actions.setStatus({message: response.data.message});

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
    validate,
    onSubmit,
    enableReinitialize: true,
    handleCancel,
    isNew: false,
  };

  useEffect(() => {
    async function getVenue() {
      const res = await fetch(`${BASE_URL}${id}`)
      if (!res.ok) {
        setError("Error fetching venue")
      } else {
        const data = await res.json()
        setVenue(data)
      }
    }
    getVenue();
    // setIsPending(false)
  }, [id])

  return (
    <Layout>
      <div>
        <LmSidebar />
      </div>
      <div>
        <h2>Spielfläche ändern</h2>
        <VenueForm {...formProps} />
      </div>
    </Layout>
  );
}

export default LmEditVenue