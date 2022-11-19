export const venueValidator = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Pflichtfeld Name'
    }
    else if (values.name.length > 30) {
        errors.name = 'Nicht mehr als 30 Zeichen';
    }

    if (!values.latitude) {
        errors.latitude = 'Pflichtfeld Lat';
    } 

    if (!values.longitude) {
        errors.longitude = 'Pflichtfeld Lon';
    } 
    // else if (!/([0-9.-]+).+?([0-9.-]+).test(values.latitude)

    return errors;
  }