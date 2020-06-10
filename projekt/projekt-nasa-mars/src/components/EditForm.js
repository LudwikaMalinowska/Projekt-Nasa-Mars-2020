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
            // props.callbackFromParent(formik.initialValues)
            formik.values = formik.initialValues
        },

    });

    const onCancel = () => {
            props.callbackFromParent(formik.initialValues)
    }

    return (
        <form onSubmit={formik.handleSubmit} className={"photoEdit"}>
            <p>id: {formik.values.idZdj}</p>
            <br />
            <label htmlFor="nrMisji">Numer misji: </label>
            <input
                id="nrMisji"
                name="nrMisji"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.nrMisji}
            />
            <br />
            <label htmlFor="dataZdj">Data: </label>
            <input
                id="dataZdj"
                name="dataZdj"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.dataZdj}
            /><br />
            <label htmlFor="roverName">Łazik: </label>
                <select
                        id="roverName"
                        name="roverName"
                        onChange={formik.handleChange}
                        value={formik.values.roverName}
                >
                    <option value="Curiosity">Curiosity</option>
                    <option value="Opportunity">Opportunity</option>
                    <option value="Spirit">Spirit</option>
                </select>


            <br />
            <label htmlFor="kamera">Kamera: </label>
            {/*<input*/}
            {/*    id="kamera"*/}
            {/*    name="kamera"*/}
            {/*    type="text"*/}
            {/*    onChange={formik.handleChange}*/}
            {/*    value={formik.values.kamera}*/}
            {/*/>*/}

            <select
                id="kamera"
                name="kamera"
                onChange={formik.handleChange}
                value={formik.values.kamera}
            >
                <option value="Front Hazard Avoidance Camera">Front Hazard Avoidance Camera</option>
                <option value="Rear Hazard Avoidance Camera">Rear Hazard Avoidance Camera</option>
                <option value="Mast Camera">Mast Camera</option>
                <option value="Chemistry and Camera Complex">Chemistry and Camera Complex</option>
                <option value="Mars Hand Lens Imager">Mars Hand Lens Imager</option>
                <option value="Mars Descent Imager">Mars Descent Imager</option>
                <option value="Navigation Camera">Navigation Camera</option>
                <option value="Panoramic Camera">Panoramic Camera</option>
                <option value="Miniature Thermal Emission Spectrometer">Miniature Thermal Emission Spectrometer</option>
            </select>

            <br />
            <button type="submit">Zatwierdź</button>
            <button type="button" onClick={formik.resetForm}>Resetuj</button>
            <button type="button" onClick={onCancel}>Anuluj</button>
        </form>
    );
};

export default EditForm;