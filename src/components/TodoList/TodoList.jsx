import "./TodoList.css";
import ListItem from "../ListItem";

const TodoList = (props) => {
	//pros -- tarefas, titulo

	const listElement = props.tarefas.map((tarefa) => (
		<ListItem
			key={tarefa.nome}
			nome={tarefa.nome}
			prioridade={tarefa.prioridade}
		/>
	));

	return (
		<div className="todo-app">
			<h2>{props.titulo}</h2>
			<ul>{listElement}</ul>
		</div>
	);
};

export default TodoList;
