import React from "react";
import VenueForm from "../components/VenueForm";
import { wait } from "../../utils";
import { venueValidator } from "../venueValidators";

const NewVenueForm = ({ setVenue }) => {
  const initialValues = {
    name: '',
    shortName: '',
    latitude: '',
    longitude: '',
    active: false,
  };

  const onSubmit = async (values, actions) => {
    try {
      console.log("Submitting: ", values);
      await wait(2000);
      setVenue(values);
      alert("Success");
    } catch (error) {
      alert("Fail");
    }
  };

  const validate = (values) => {
    const errors = venueValidator(values);
    return errors;
  };

  const formProps = {
    initialValues,
    validate, // or validationSchema. Check example validation schema in validators.js file
    onSubmit,
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