export const Validations = (datas) => {
    const emptyFields = {};
  
    // Itera sobre las claves del objeto
    for (const key of Object.keys(datas)) {
      // Verifica si el valor correspondiente a la clave está vacío
      if (!datas[key]) {
        emptyFields[key] = true;
      }
    }
  
    // Retorna un objeto que indica qué campos están vacíos
    return {
      isValid: Object.keys(emptyFields).length === 0,
      emptyFields: emptyFields,
      styleColor: "border: 1px solid red;"
    };
  };