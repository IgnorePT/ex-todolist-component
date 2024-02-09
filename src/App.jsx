import style from "./App.module.css";
import TodoList from "./components/TodoList/TodoList";

const tarefasArray = [
	{ nome: "Comprar leite", prioridade: "media" },
	{ nome: "Pagar contas", prioridade: "alta" },
	{ nome: "Ligar para o João", prioridade: "baixa" },
	{ nome: "Ligar para o João 2", prioridade: "baixa" },
];

function App() {
	let tempArray = tarefasArray;

	const filterTarefas = (prioridade) => {
		console.log(prioridade);
		tempArray = tarefasArray.filter(
			(tarefa) => tarefa.prioridade === prioridade
		);

		console.log(tempArray);
	};

	return (
		<>
			{/* Trabalhar aqui! */}
			<div>
				<button onClick={() => filterTarefas("alta")} className={style.btn}>
					Alta
				</button>
				<button onClick={() => filterTarefas("baixa")} className={style.btn}>
					Baixa
				</button>
				<button onClick={() => filterTarefas("media")} className={style.btn}>
					Media
				</button>
			</div>

			<TodoList tarefas={tempArray} titulo="Meu Titulo" />
			{/* 
        React.createElement("xxx", {
          tarefas: tarefasArray, titulo: "Meu Titulo"
        })
      
      */}
		</>
	);
}

export default App;
