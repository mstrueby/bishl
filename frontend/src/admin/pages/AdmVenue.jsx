import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../components/Layout'
import VenueForm from '../components/VenueForm'
import { useFormik} from 'formik'
import NewVenueForm from '../container/NewVenueForm'

const AdmVenue = () => {

  // let { id } = useParams()

  // const validate = values => {
  //   const errors = {};
  //   if (!values.name) {
  //     errors.name = 'Pflichtfeld Name'
  //   }
  //   else if (values.name.length > 30) {
  //     errors.name = 'Nicht mehr als 30 Zeichen';
  //   }

  //   if (!values.latitude) {
  //     errors.latitude = 'Pflichtfeld Lat';
  //   }

  //   if (!values.longitude) {
  //     errors.longitude = 'Pflichtfeld Lon';
  //   }
  //   // else if (!/([0-9.-]+).+?([0-9.-]+).test(values.latitude)

  //   return errors;
  // }

  // const formik = useFormik({
  //   initialValues: {
  //       name: '',
  //       shortName: '',
  //       latitude: '',
  //       longitude: '',
  //       active: false,
  //   },
  //   validate,
  //   onSubmit: values => {
  //       alert(JSON.stringify(values, null, 2));
  //   },
  // });

  const [venue, setVenue] = useState(null);
  
  return (
    <Layout>
      { !venue ? (
        <NewVenueForm setVenue={setVenue} />
      ) : (
        <p>Call EditVenueForm</p>
      )}
    </Layout>
  )
}

export default AdmVenue