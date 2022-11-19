import React from 'react'
import { useFormik} from 'formik'
import { getFormItemValidateStatus, getFormItemError } from "../../utils"

const VenueForm = ({
    initialValues,
    onSubmit,
    validate,
    // or validateSchema
    isNew
}) => {
 
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
        // validateSchema
    });

    const {
        handleSubmit,
        values,
        errors,
        getFieldProps,
        getFieldValue,
        setFieldValue,
        handleBlur,
        dirty,
        isValid,
        isSubmitting
    } = formik;

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='text'>Name</label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}

            <label htmlFor='text'>Kurzname</label>
            <input
                id="shortName"
                name="shortName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.shortName}
            />
            {formik.touched.shortName && formik.errors.shortName ? <div>{formik.errors.shortName}</div> : null}
            
            <label htmlFor='text'>Latitude</label>
            <input
                id="latitude"
                name="latitude"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.latitude}
            />
            {formik.touched.latitude && formik.errors.latitude ? <div>{formik.errors.latitude}</div> : null}
            
            <label htmlFor='text'>Longitude</label>
            <input
                id="longitude"
                name="longitude"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.longitude}
            />
            {formik.touched.longitude && formik.errors.longitude ? <div>{formik.errors.longitude}</div> : null}
            
            <label htmlFor='text'>Aktiv</label>
            <input
                id="active"
                name="active"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.active}
            />

            <button type="submit">Speichern</button>
        </form>
    )
}

export default VenueForm