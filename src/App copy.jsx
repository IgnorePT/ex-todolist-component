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
	const [tarefas, setTarefas] = useState(tarefasArray);

	// Estado criado para o Input - Controlled Component (= Data Bind)
	// Criamos o estado inputState que ira ser utilizado como valor de
	const [inputState, setInputState] = useState("");

	const filtrarTarefas = (prioridade) => {
		setTarefas(
			tarefasArray.filter((tarefa) => tarefa.prioridade === prioridade)
		);
	};

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
			</div>

			<TodoList tarefas={tarefas} titulo="Meu Titulo" />

			<div
				style={{
					display: "flex",
					gap: "1rem",
				}}
			>
				{/* Controlled Form Component Input */}
				<input
					style={{
						background: "#fff",
						padding: "1.5rem",
						borderRadius: "5px",
					}}
					onChange={(event) => {
						console.log(event.target.value);
						setInputState(event.target.value);
					}}
					value={inputState}
					type="text"
					placeholder="Adicionar todo"
				/>
				<button
					onClick={() => {
						// Action de Submit
						// Neste caso adicionamos o input as nossas tarefas
						setTarefas([
							...tarefas,
							{
								nome: inputState,
								prioridade: "baixa",
							},
						]);
						setInputState("");
					}}
				>
					Adicionar
				</button>
			</div>
		</>
	);
}

export default App;
