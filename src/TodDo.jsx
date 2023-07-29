/** @format */
import { TodoItem } from '../TodoItem'
export function ToDo({ todos, toggleTodo, deleteTodo }) {
	return (
		<ul className='list'>
			{todos.length === 0 && 'No Todos'}
			{todos.map((todos) => {
				return (
					<TodoItem
						{...todos}
						key={todos.id}
						toggleTodo={toggleTodo}
						deleteTodo={deleteTodo}
					/>
				)
			})}
		</ul>
	)
}
