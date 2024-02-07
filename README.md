# Lista de Tarefas com Destaque

Objetivo: Construir uma aplicação em React que exiba uma lista de tarefas com a capacidade de destacar tarefas com prioridade **alta**.

## Descrição:

Você deve criar um componente `TodoList` que recebe uma `prop` tarefas, que é um array de objetos onde cada objeto representa uma tarefa. Cada tarefa tem duas propriedades: `nome` (string) que descreve a tarefa e `prioridade` (string) que pode ser "alta", "media" ou "baixa".

O componente deve renderizar uma lista não ordenada (<ul>) de itens de lista (<li>). Cada item deve exibir o nome da tarefa. Além disso, tarefas com prioridade "alta" devem ser destacadas de alguma forma (por exemplo, texto em vermelho).

## Requisitos:

**Renderização Condicional:** Utilize renderização condicional para alterar a cor do texto das tarefas com prioridade "alta". Você pode usar operadores ternários ou if dentro do JSX para isso.

**Iteração de Arrays:** Utilize o método .map() para iterar sobre o array tarefas e renderizar cada tarefa como um item de lista.

## Exemplo de prop tarefas:

```js
const tarefas = [
	{ nome: "Comprar leite", prioridade: "media" },
	{ nome: "Pagar contas", prioridade: "alta" },
	{ nome: "Ligar para o João", prioridade: "baixa" },
];
```

**Dica:** Para a renderização condicional, você pode adicionar uma classe CSS dinamicamente ou alterar o estilo inline do `<li>` com base na prioridade da tarefa.

**Bonus (Opcional):**

- Implemente uma funcionalidade para filtrar as tarefas por prioridade através de botões ou seletores. Este bônus pode introduzir conceitos básicos de manipulação de eventos em React.

- Crie mais um Componente `ListItem` num ficheiro ao lado e utilizem no componente `TodoList` este componente recebe como props o `nome` e a `prioridade`.

- Adiciona estilos a tua aplicação

**Boas praticas (Opcional):** Os componentes devem ser criados numa pasta **`components`** dentro da pasta **`src`**
