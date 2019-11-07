let todos = [
    {
        text: 'Order cat food',
        completed: false
    },
    {
        text: 'Clean kitchen',
        completed: true
    },
    {
        text: 'Buy food',
        completed: true
    },
    {
        text: 'Do work',
        completed: false,
    },
    {
        text: 'Exercise',
        completed: true
    }
]

const filters = {
    searchText: '',
    hideCompleted: false
}

const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function(todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    document.querySelector('#todos').innerHTML = ''

    filteredTodos.forEach(function(todo, index) {
        const el = document.createElement('p')
        el.textContent = todo.text
        document.querySelector('#todos').appendChild(el)
    })
}

renderTodos(todos, filters)

document.querySelector('#search').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#create').addEventListener('submit', function(e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })

    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})