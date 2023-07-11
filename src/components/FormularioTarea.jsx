import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";
import { crearTarea, obtenerTareas } from "../helpers/queries";
import {useForm} from 'react-hook-form'

const FormularioTarea = () => {
  const {register,handleSubmit} = useForm()
  // let tareasDelLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || [];
  // const [tareas, setTareas] = useState(tareasDelLocalStorage);
  const [tareasBack, setTareasBack] = useState([]);

  //ciclo de vida
  useEffect(() => {
    // console.log('aqui deberia guardar en localstorage');
    obtenerTareas().then((res) => {
      setTareasBack(res);
      console.log(res);
    }); //TODO
    // localStorage.setItem('listaTareas', JSON.stringify(tareas));
  }, []);

  const onSubmit = (data) => {
    console.log(data)
    crearTarea(data)
      .then((res) => {
        if (res && res.status === 201) {
         setTareasBack([...tareasBack,data])
        }
      })
      .catch((error) => console.log(error));
  
};

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            {...register("nombreTarea",{required:true})}
          />
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas
        tareasBack={tareasBack}
        setTareasBack={setTareasBack}
      ></ListaTareas>
    </>
  );
};

export default FormularioTarea;
