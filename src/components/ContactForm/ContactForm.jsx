import { Formik, Form, Field } from 'formik';
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import css from './ContactForm.module.css'
import { addContact } from '../../redux/contactsOps';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';


const ContactForm = () => {
    
    const dispatch = useDispatch();

    const nameId = useId();
    const numberId = useId();

    const addNewContact = (contact) => {
        dispatch(addContact(contact))
    }

    const initialValues = {
        name: "",
        number: "",
    };

    const handleSubmit = (values, { resetForm }) => {
        addNewContact({
            // name: values.name,
            // number: values.number
            ...values,
            id: nanoid(),
        })
        resetForm()
    }

    const contactSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.number().required("Required")
    })

  return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactSchema}>
          <Form className={css.contForm}>
              <div className={css.allFields}>
                  <div className={css.fieldContainer}> 
                      <p className={css.fieldName}>Name</p>
                      <Field type="name" name="name" id={nameId} />
                      <ErrorMessage name="name" component="span" className={css.errorMes} />
                  </div>
                      
                  <div className={css.fieldContainer}>
                      <p className={css.fieldName}>Number</p>
                      <Field type="number" name="number" id={numberId} />
                      <ErrorMessage name="number" component="span" className={css.errorMes} />
                  </div>
              </div>
              <button type='submit' className={css.formbutton}>Add</button>
          </Form>
    </Formik>
  )
}

export default ContactForm