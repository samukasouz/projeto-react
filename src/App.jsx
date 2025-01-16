import { useState } from "react";
import AddTask from "./assets/components/AddTask";
import Tasks from "./assets/components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "estudar programação",
      description: "estudar programação para ganhar muito bem ",
      iscompleted: false,
    },
    {
      id: 2,
      title: "estudar ingles",
      description: "estudar ingles para ganhar muito bem ",
      iscompleted: false,
    },
    {
      id: 3,
      title: "estudar trading",
      description: "estudar trading para ganhar muito bem ",
      iscompleted: false,
    },
  ]);
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //preciso atualizar essa tarefa
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      //nao preciso atualizar  essa tarefa
      return task;
    });
    setTasks(newTasks);
  }
  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: tasks.length
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask])
  }
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center Gerenciador de Tarefas">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
