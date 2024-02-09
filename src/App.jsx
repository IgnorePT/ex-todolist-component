import { useState } from "react";
import style from "./App.module.css";
import TodoList from "./components/TodoList/TodoList";

let tarefasArray = [
	{ nome: "Comprar leite", prioridade: "media" },
	{ nome: "Comprar leite", prioridade: "media" },
	{ nome: "Pagar contas", prioridade: "alta" },
	{ nome: "Pagar contas 2", prioridade: "alta" },
	{ nome: "Ligar para o João", prioridade: "baixa" },
	{ nome: "Ligar para o João 2", prioridade: "baixa" },
];

function App() {
	//Paravra "use" indica que estamos perante um Hook ex: useRef // useEffect // useState
	//Hook de React - useState - é uma função
	// Arquitectura do useState
	// parametros: valor inicial (opcional)
	// retorna [] - retorna array
	const [tarefas, setTarefas] = useState(tarefasArray);

	const filtrarTarefas = (prioridade) => {
		setTarefas(
			tarefasArray.filter((tarefa) => tarefa.prioridade === prioridade)
		);
	};

	return (
		<>
			{/* Trabalhar aqui! */}
			<div>
				<button
					onClick={() => filtrarTarefas("alta")}
					// onClick={() => {
					// 	console.log("Antes de Atualizar: ", estado);
					// 	atualizarEstado([]);
					// 	atualizarEstado((estadoAnterior) => {
					// 		return [
					// 			...estadoAnterior,
					// 			{
					// 				nome: "Comprar leite",
					// 				prioridade: "media",
					// 			},
					// 		];
					// 	});

					// 	console.log("Depois de Atualizar: ", estado);
					// }}
					className={style.btn}
				>
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
			{/* 
        React.createElement("xxx", {
          tarefas: tarefasArray, titulo: "Meu Titulo"
        })
      
      */}
		</>
	);
}

export default App;
