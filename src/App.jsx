import { useEffect, useState } from "react";
import AddTask from "./assets/components/AddTask";
import Tasks from "./assets/components/Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [
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
    ]
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)) || [];
  }, [tasks]);

  useEffect(() => {
    // se vc quiser vc pode chamar uma api
    // fetchTasks();
  }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, iscompleted: !task.iscompleted };
      }
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
      id: v4(),
      title,
      description,
      iscompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1>Gerenciador de Tarefas</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
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
