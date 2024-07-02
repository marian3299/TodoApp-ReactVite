import {useState} from "react";
import Form from './Form';
import Task from './Task';
import '../styles/TaskList.css';

export default function TaskList() {
    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
      if(tarea.text.trim()) {
        tarea.text = tarea.text.trim();
        const tareasActualizadas = [tarea, ...tareas];
        setTareas(tareasActualizadas);
      }
    };
  
    const eliminarTarea = id => {
      const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
  
      setTareas(tareasActualizadas);
    };
  
    const completarTarea = id => {
      const tareasActualizadas = tareas.map(tarea => {
        if(tarea.id === id){
          tarea.completada = !tarea.completada;
        }
  
        return tarea;
      });
      setTareas(tareasActualizadas);
    }
  
    return(
      <>
        <Form onSubmit={agregarTarea}/>
        <div className="tareas-lista-contenedor">
          {
            tareas.map((tarea) =>
              <Task
                key={tarea.id}
                id={tarea.id}
                texto={tarea.text}
                completada = {tarea.completada}
                eliminarTarea={eliminarTarea}
                completarTarea={completarTarea}
              />
            )
          }
        </div>
      </>
    );
}
