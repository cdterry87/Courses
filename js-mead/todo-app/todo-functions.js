// Read existing notes from localstorage
const getSavedTodos = function() {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null && todosJSON !== 'undefined') {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save notes to localstorage
const saveTodos = function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Delete a note
const deleteTodo = function(id) {
    const todoIndex = todos.findIndex(function(todo) {
        return todo.id === id
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Render application notes
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}


// Generate DOM structure for a note
const generateTodoDOM = function(todo) {
    const div = document.createElement('div')
    const todoText = document.createElement('span')
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    const button = document.createElement('button')
    button.textContent = 'Delete'
    button.addEventListener('click', function() {
        deleteTodo(todo.id)
        saveTodos()
        renderTodos(todos, filters)
    })

    div.appendChild(checkbox)
    todoText.textContent = todo.text
    todoText.appendChild(button)


    div.appendChild(todoText)

    return div
}

// Get the DOM elements for a list summary
const generateSummaryDOM = function(incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`

    return summary
}