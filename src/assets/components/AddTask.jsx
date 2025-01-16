import { useState } from "react";

function AddTask(onAddTaskSubmit) {
  const [title, seTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow ">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Digite descrição da tarefa"
        className="border-slate-300r outline-slate-400 px-4 py-2 rounded-md"
      ></input>
      <button className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">
        {" "}
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
