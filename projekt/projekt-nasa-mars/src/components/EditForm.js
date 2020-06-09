import React from 'react';
import { useFormik } from 'formik';

import '../EditForm.css';

const EditForm = (props) => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            idZdj: props.photoInfo.idZdj,
            nrZdj: props.photoInfo.nrZdj,
            dataZdj: props.photoInfo.dataZdj,
            srcZdj: props.photoInfo.srcZdj,
            roverName: props.photoInfo.roverName,
            nrMisji: props.photoInfo.nrMisji,
            kamera: props.photoInfo.kamera
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            props.callbackFromParent(formik.values)
        },
        onReset: values => {
            props.callbackFromParent(formik.initialValues)
        }
    });
    return (
        <form onSubmit={formik.handleSubmit} className={"photoEdit"}>
            <p>id: {formik.values.idZdj}</p>
            <br />
            <label htmlFor="nrMisji">Numer misji: </label>
            <input
                id="nrMisji"
                name="nrMisji"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.nrMisji}
            />
            <br />
            <label htmlFor="dataZdj">Data: </label>
            <input
                id="dataZdj"
                name="dataZdj"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.dataZdj}
            /><br />
            <label htmlFor="roverName">Data: </label>
            <input
                id="roverName"
                name="roverName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.roverName}
            /><br />
            <label htmlFor="kamera">Data: </label>
            <input
                id="kamera"
                name="kamera"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.kamera}
            /><br />
            <button type="submit">Zatwierdź</button>
            <button type="button" onClick={formik.resetForm}>Anuluj</button>
        </form>
    );
};

export default EditForm;