import { Button, ListGroup } from "react-bootstrap";
import { borrarTarea, obtenerTareas } from "../helpers/queries";

const ItemTarea = ({tarea,setTareasBack}) => {

    const borrarTareaBD = ()=>{
        borrarTarea(tarea._id).then(res=>{
            if(res && res.status === 200){
            console.log("tarea eliminada")
            obtenerTareas().then(res=>setTareasBack(res))
            }else{
            console.log("la tarea no pudo ser eliminada")
            }
        })
      }
    return (
        <ListGroup.Item className="d-flex justify-content-between">
            {tarea.nombreTarea}
            <Button variant="danger" onClick={borrarTareaBD}>Borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;