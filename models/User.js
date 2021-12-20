const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: {
    /* Un string único que identifica el usuario. Se obtiene a partir de nextauth */
    type: String,
    required: true,
    trim: true,
  },
  email: {
    /* Email del usuario. Se obtiene a partir de nextauth */
    type: String,
    required: true,
    trim: true,
  },
  userName: {
    /* Nombre con el cual el usuario aparecerá en la aplicación. En principio se permite
      repetir, caso contrario hay que poner un método de comprobación de existencia del userName
      en el gui para seleccionar el nombre de usuario */
    type: String,
    required: true,
    trim: true,
    maxLength: [30, "El nombre no puede tener más de 30 caracteres"],
  },
  firstName: {
    type: String,
    required: false,
    trim: true,
    maxLength: [30, "El nombre no puede tener más de 30 caracteres"],
  },
  lastName: {
    type: String,
    required: false,
    trim: true,
    maxLength: [40, "El apellido no puede tener más de 40 caracteres"],
  },
  description: {
    type: String,
    required: false,
    trim: true,
    maxLength: [500, "La descripción no puede sobrepasar los 500 caracteres"],
  },
  picUrl: {
    type: String,
    required: false,
    trim: true,
  },
});
