import style from "./ListItem.module.css";

const ListItem = ({ nome, prioridade }) => {
	// a mesma coisa qus isto
	//const  { nome, prioridade } = props
	//pros -- nome, prioridade

	return (
		<li
			className={`${style.item} ${style.item}`}
			style={{
				color: prioridade === "alta" ? "red" : "black",
			}}
		>
			{nome} - {prioridade}
		</li>
	);
};

export default ListItem;
