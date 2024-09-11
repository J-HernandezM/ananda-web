'use client';

// @packages
import { useEffect, useState } from 'react';
import { checkoutSchema, initialValues } from './checkoutSchema';

// @styles
import './checkoutForm.scss';

// @components
import { ErrorMessage, Field, Form, Formik } from 'formik';

type Location = {
  name: string;
  id: string;
};

export default function CheckoutForm() {
  // const [isSubmitted, setIsSubmitted] = useState(false);
  const [departments, setDepartments] = useState<Location[]>([]);
  const [cities, setCities] = useState<Location[]>([]);

  useEffect(() => {
    fetch('https://api-colombia.com/api/v1/Department')
      .then(response => response.json())
      .then(data => {
        const deparments: Location[] = data
          .map((d: Location) => ({
            name: d.name,
            id: d.id,
          }))
          .sort((a: Location, b: Location) => a.name.localeCompare(b.name));
        setDepartments(deparments);
      });
  }, []);

  const handleDepartmentChange = (
    e: InputEvent,
    setFieldValue: (field: string, value: string, shouldValidate?: boolean) => void
  ) => {
    const input = e.target as HTMLSelectElement;
    const selectedOption = input.options[input.selectedIndex];
    const regionId = selectedOption.getAttribute('data-id');
    const regionName = input.value;
    setFieldValue('region', regionName);

    fetch(`https://api-colombia.com/api/v1/Department/${regionId}/cities`)
      .then(response => response.json())
      .then(data => {
        const cities: Location[] = data
          .map((c: Location) => ({
            name: c.name,
            id: c.id,
          }))
          .sort((a: Location, b: Location) => a.name.localeCompare(b.name));

        setCities(cities);
      });
  };

  const handleNumericInputChange = (
    e: InputEvent,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  ) => {
    const input = e.target as HTMLInputElement;
    const value = input.value.replace(/[^0-9]/g, '');
    setFieldValue(input.name, value);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        console.log('submitted: ', values);
        setIsSubmitted(true);
      }}
      validationSchema={checkoutSchema}
    >
      {({ setFieldValue }) => (
        <Form className="form">
          <div className="form--data-user">
            <div className="form--field">
              <label htmlFor="name">Nombre *</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" className="form--error" component={'span'}></ErrorMessage>
            </div>
            <div className="form--field">
              <label htmlFor="lastname">Apellidos *</label>
              <Field type="text" id="lastname" name="lastname" />
              <ErrorMessage
                name="lastname"
                className="form--error"
                component={'span'}
              ></ErrorMessage>
            </div>
            <div className="form--field">
              <label htmlFor="documentType">Tipo de identificación *</label>
              <Field as="select" id="documentType" name="documentType">
                <option value="cc">Cédula de ciudadanía</option>
                <option value="ce">Cédula de extranjería</option>
                <option value="nit">NIT</option>
              </Field>
            </div>
            <div className="form--field">
              <label htmlFor="documentNumber">Número de identificación *</label>
              <Field
                onChange={(e: InputEvent) => handleNumericInputChange(e, setFieldValue)}
                type="text"
                id="documentNumber"
                name="documentNumber"
              />
              <ErrorMessage
                name="documentNumber"
                className="form--error"
                component={'span'}
              ></ErrorMessage>
            </div>
            <div className="form--field">
              <label htmlFor="email">Correo electrónico *</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" className="form--error" component={'span'}></ErrorMessage>
            </div>
            <div className="form--field">
              <label htmlFor="phone">Teléfono *</label>
              <Field
                onChange={(e: InputEvent) => handleNumericInputChange(e, setFieldValue)}
                type="tel"
                id="phone"
                name="phone"
              />
              <ErrorMessage name="phone" className="form--error" component={'span'}></ErrorMessage>
            </div>
          </div>
          <div className="form--data-address">
            <div className="form--field">
              <label htmlFor="region">Departamento *</label>
              <Field
                onChange={(e: InputEvent) => handleDepartmentChange(e, setFieldValue)}
                id="region"
                name="region"
                as="select"
              >
                {departments.map(department => (
                  <option key={department.id} data-id={department.id} value={department.name}>
                    {department.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="region" className="form--error" component={'span'}></ErrorMessage>
            </div>
            <div className="form--field">
              <label htmlFor="city">Ciudad *</label>
              <Field id="city" name="city" as="select" disabled={!cities.length}>
                {cities.map(city => (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="city" className="form--error" component={'span'}></ErrorMessage>
            </div>
            <div className="form--field field--address">
              <label htmlFor="address">Direccion de entrega *</label>
              <Field
                type="text"
                id="address"
                name="address"
                placeholder="Dirección completa"
              ></Field>
              <ErrorMessage
                name="address"
                className="form--error"
                component={'span'}
              ></ErrorMessage>
              <Field
                type="text"
                id="address-complement"
                name="address-complement"
                placeholder="Barrio, edificio o apartamento"
              ></Field>
              <ErrorMessage
                name="address-complement"
                className="form--error"
                component={'span'}
              ></ErrorMessage>
            </div>
            <button type="submit">Enviar</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
