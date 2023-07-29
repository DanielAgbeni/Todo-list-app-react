/** @format */
import { useEffect, useState } from 'react'
import './style.css'
import { NewToDoForm } from './NewToDoForm'
import { ToDo } from './TodDo'

export default function App() {
	const [todos, setTodos] = useState(() => {
		const localValue = localStorage.getItem('ITEM')
		if (localValue == null) return []
		return JSON.parse(localValue)
	})
	useEffect(() => {
		localStorage.setItem('ITEM', JSON.stringify(todos))
	}, [todos])

	function addToDo(title) {
		setTodos((currentTodos) => {
			return [
				...currentTodos,
				{
					id: crypto.randomUUID(),
					title,
					completed: false,
				},
			]
		})
	}

	function toggleTodo(id, completed) {
		setTodos((currentTodos) => {
			return currentTodos.map((todos) => {
				if (todos.id === id) {
					return { ...todos, completed }
				}
				return todos
			})
		})
	}

	function deleteTodo(id) {
		setTodos((currentTodos) => currentTodos.filter((todos) => todos.id !== id))
	}

	return (
		<>
			<NewToDoForm onSubmit={addToDo} />
			<h1 className='header'>ToDo List</h1>
			<ToDo todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
		</>
	)
}
