import { useState } from "react";
import style from "./App.module.css";
import TodoList from "./components/TodoList/TodoList";

let tarefasArray = [
	{ nome: "Comprar leite", prioridade: "media" },
	{ nome: "Comprar leite 2", prioridade: "media" },
	{ nome: "Pagar contas", prioridade: "alta" },
	{ nome: "Pagar contas 2", prioridade: "alta" },
	{ nome: "Ligar para o João", prioridade: "baixa" },
	{ nome: "Ligar para o João 2", prioridade: "baixa" },
];

function App() {
	//UseState
	//Paravra "use" indica que estamos perante um Hook ex: useRef // useEffect // useState
	//Hook de React - useState - é uma função
	// Arquitectura do useState
	// parametros: valor inicial (opcional)
	// retorna [] - retorna array
	const [tarefasTodas, setTarefasTodas] = useState(tarefasArray);
	const [tarefas, setTarefas] = useState(tarefasArray);

	const filtrarTarefas = (prioridade) => {
		setTarefas(
			tarefasTodas.filter((tarefa) => tarefa.prioridade === prioridade)
		);
	};

	const addTodo = (evento) => {
		evento.preventDefault();
		console.log(evento.target);

		const formData = new FormData(evento.target);

		//Iterator Values
		// let data = formData.values();

		// data.forEach((value) => {
		// 	console.log("Cenas: ", value);
		// });

		setTarefasTodas([
			...tarefasTodas,
			{
				nome: formData.get("todo_input"),
				prioridade: "baixa",
			},
		]);

		setTarefas([
			...tarefas,
			{
				nome: formData.get("todo_input"),
				prioridade: "baixa",
			},
		]);
	};

	// Renderização
	return (
		<>
			<div>
				<button onClick={() => filtrarTarefas("alta")} className={style.btn}>
					Alta
				</button>
				<button onClick={() => filtrarTarefas("baixa")} className={style.btn}>
					Baixa
				</button>
				<button onClick={() => filtrarTarefas("media")} className={style.btn}>
					Media
				</button>

				<button onClick={() => setTarefas(tarefasTodas)} className={style.btn}>
					Reset
				</button>
			</div>

			<TodoList
				tarefas={tarefas}
				titulo={`Tens ${tarefas.length} tarefas por fazer`}
			/>

			<div
				style={{
					display: "flex",
					gap: "1rem",
				}}
			>
				{/* Uncrontrolled Form Component Input */}
				<form onSubmit={addTodo}>
					<input
						style={{
							background: "#fff",
							padding: "1.5rem",
							borderRadius: "5px",
						}}
						id="todo_input"
						name="todo_input"
						type="text"
						placeholder="Adicionar todo"
					/>
					<button type="submit">Adicionar</button>
				</form>
			</div>
		</>
	);
}

export default App;
