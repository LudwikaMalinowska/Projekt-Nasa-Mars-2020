import React from 'react';
import { useFormik } from 'formik';
import '../EditForm.css';

const EditForm = (props) => {

    const formik = useFormik({
        initialValues: {
            nazwaZdj: props.photoInfo.nazwaZdj,
            idZdj: props.photoInfo.idZdj,
            nrZdj: props.photoInfo.nrZdj,
            dataZdj: props.photoInfo.dataZdj,
            srcZdj: props.photoInfo.srcZdj,
            roverName: props.photoInfo.roverName,
            roverStatus: props.photoInfo.roverStatus,
            nrMisji: props.photoInfo.nrMisji,
            kamera: props.photoInfo.kamera,
            opisZdj: props.photoInfo.opisZdj,
            bossEmail: props.photoInfo.bossEmail
        },
        onSubmit: values => {

            const dataZdj = formik.values.dataZdj;
            const year = dataZdj.substring(0, 4);
            const month = dataZdj.substring(5, 7);
            const day = dataZdj.substring(8, 10);
            const timeNow = new Date();
            const photoTime = new Date(year, month-1, day);

            if (formik.values.nazwaZdj === "") {
                alert("Nazwa zjęcia nie może być pusta");
            } else if (formik.values.nrMisji === "") {
                alert("Numer misji nie może być pusty");
            } else if (isNaN(formik.values.nrMisji) || formik.values.nrMisji < 0) {
                alert("Podano nieprawidłowy numer misji")
            } else if (timeNow.getTime() - photoTime.getTime() < 0) {
                alert("Wybierz poprawną datę")
            }
            else if (formik.values.bossEmail === "") {
                alert("Email osoby nadzorującej nie może być pusty");
            } else {
                const email = formik.values.bossEmail;
                const emailContainsAt = email.includes("@");
                const emailConstainsDot = email.includes(".");
                const emailLastChar = email[email.length - 1];

                if (emailContainsAt && emailConstainsDot && emailLastChar !== '.') {
                    props.callbackFromParent(formik.values);
                } else {
                    alert("Nieprawidłowy e-mail");
                }
            }



        },
        onReset: values => {
            formik.values = formik.initialValues;
        },

    });

    const onCancel = () => {
            props.callbackFromParent(formik.initialValues);
    }

    return (
        <form onSubmit={formik.handleSubmit} className={"photoEdit"}>
            <p>id: {formik.values.idZdj}</p>
            <div>
            <label htmlFor="nazwaZdj">Nazwa zdjęcia: </label>
            <input
                id="nazwaZdj"
                name="nazwaZdj"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.nazwaZdj}
            />
            </div>
            <div>
            <label htmlFor="nrMisji">Numer misji: </label>
            <input
                id="nrMisji"
                name="nrMisji"
                type="text" //type="number"
                onChange={formik.handleChange}
                value={formik.values.nrMisji}
            />
            </div>

            <div>
            <label htmlFor="dataZdj">Data: </label>
            <input
                id="dataZdj"
                name="dataZdj"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.dataZdj}
            />
            </div>

            <div>
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

            </div>

            <div>
            <label htmlFor="roverStatus"> Status łazika: </label>
            <select
                id="roverStatus"
                name="roverStatus"
                onChange={formik.handleChange}
                value={formik.values.roverStatus}
            >
                <option value="active">active</option>
                <option value="inactive">inactive</option>
                <option value="unknown">unknown</option>
            </select>
            </div>

            <div>
            <label htmlFor="kamera">Kamera: </label>
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
            </div>

            <div>
            <label htmlFor="opisZdj">Opis zdjęcia (opcjonalne): </label>
            <input
                id="opisZdj"
                name="opisZdj"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.opisZdj}
            />
            </div>

            <div>
                <label htmlFor="bossEmail">E-mail osoby nadzorującej: </label>
                <input
                    id="bossEmail"
                    name="bossEmail"
                    type="text" //type="email"
                    onChange={formik.handleChange}
                    value={formik.values.bossEmail}
                />
            </div>

            <div>
            <button type="submit">Zatwierdź</button>
            <button type="button" onClick={formik.resetForm}>Resetuj</button>
            <button type="button" onClick={onCancel}>Anuluj</button>
            </div>
        </form>
    );
};

export default EditForm;