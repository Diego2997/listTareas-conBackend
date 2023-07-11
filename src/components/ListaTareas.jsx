import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({tareasBack,setTareasBack}) => {
  return (
    <ListGroup>
      {
        tareasBack.map((tarea, indiceTarea)=> <ItemTarea tarea={tarea} key={indiceTarea} setTareasBack={setTareasBack}></ItemTarea>)
      }
    </ListGroup>
  );
};

export default ListaTareas;
