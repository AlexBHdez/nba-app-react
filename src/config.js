const CURRENT_YEAR = (new Date()).getFullYear();
const API_URL = `http://localhost:3004`

// Si exportamos con default, sólo exportaremos la variable que le digamos en el export, por eso exportamos un objeto, y con ES&, no es necesario especificar propiedad-valor de un objeto, simplemente una de las dos.
export {
  CURRENT_YEAR,
  API_URL,
}