// Read existing notes from localstorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    return (SON !== null && todosJSON !== 'undefined' ? JSON.parse(todosJSON) : [])
}

// Save notes to localstorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Delete a note
const deleteTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Toggle complete/incomplete todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => {
        return todo.id === id
    })

    if (todo !== 'undefined') {
        todo.completed = !todo.completed
    }
}

// Render application notes
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach((todo) => {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}


// Generate DOM structure for a note
const generateTodoDOM = (todo) => {
    const div = document.createElement('div')
    const todoText = document.createElement('span')

    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    const button = document.createElement('button')
    button.textContent = 'Delete'
    button.addEventListener('click', () => {
        deleteTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })


    div.appendChild(checkbox)
    todoText.textContent = todo.text
    todoText.appendChild(button)


    div.appendChild(todoText)

    return div
}

// Get the DOM elements for a list summary
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`

    return summary
}