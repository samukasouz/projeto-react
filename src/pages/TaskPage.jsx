import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";

function Taskpage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-slate-500  p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute laft-0 top-0 bottom-0 text-slate-700"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xL text-slate-100 font-bold text-center">
            Detalhes da tarefa
          </h1>
        </div>

        <div className="bg-slate-200 p-4 rounded-md ">
          <h2 className="text-xl font-bold text-slate-900">{title}</h2>
          <p className="text-slate-900">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Taskpage;
