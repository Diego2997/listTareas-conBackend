const URL_TAREAS = import.meta.env.VITE_API_TAREAS;

export const obtenerTareas = async () => {
  try {
    const tareas = await fetch(URL_TAREAS);
    const data = await tareas.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const crearTarea = async (nombreTarea) => {
  try {
    const respuesta = await fetch(URL_TAREAS,{
      method: "POST",
      headers:
      {
      "Content-Type":"application/json"
      },
      body: JSON.stringify(nombreTarea),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarTarea = async (id) => {
    try {
      const respuesta = await fetch(URL_TAREAS+"/"+id, {
        method: "Delete"
      });
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };
