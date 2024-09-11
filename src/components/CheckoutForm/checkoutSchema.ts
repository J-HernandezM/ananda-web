import * as Yup from 'yup';

const checkoutSchema = Yup.object({
  name: Yup.string()
    .required('El nombre es obligatorio')
    .max(50, 'El nombre es demasiado largo')
    .strict(true),
  lastname: Yup.string()
    .required('El apellido es obligatorio')
    .max(50, 'El apellido es demasiado largo')
    .strict(true),
  documentType: Yup.string()
    .required('El tipo de identificación es obligatorio')
    .oneOf(['cc', 'ce', 'nit'], 'Tipo de identificación inválido'),
  documentNumber: Yup.string()
    .required('El número de identificación es obligatorio')
    .min(5, 'El número de identificación es demasiado corto')
    .max(12, 'El número de identificación es demasiado largo'),
  email: Yup.string()
    .required('El correo electrónico es obligatorio')
    .email('Correo electrónico inválido'),
  phone: Yup.string()
    .required('El teléfono es obligatorio')
    .min(8, 'Formato de teléfono incorrecto')
    .max(12, 'El teléfono es demasiado largo'),
  region: Yup.string().required('La región es obligatoria'),
  city: Yup.string().required('La ciudad es obligatoria'),
  address: Yup.string()
    .required('La dirección es obligatoria')
    .min(5, 'La dirección es demasiado corta')
    .max(100, 'La dirección es demasiado larga'),
  'address-complement': Yup.string().max(100, 'El complemento de la dirección es demasiado largo'),
});

const initialValues = {
  name: '',
  lastname: '',
  documentType: 'cc',
  documentNumber: '',
  email: '',
  phone: '',
  region: '',
  city: '',
  address: '',
  'address-complement': '',
};

export { checkoutSchema, initialValues };
