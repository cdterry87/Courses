let todos = [
    {
        text: 'my next trip',
        body: 'I would like to go to Japan'
    },
    {
        text: 'habits to work on',
        body: 'Exercise and eating better'
    },
    {
        text: 'office modification',
        body: 'Get new computer monitors'
    }
]

const filters = {
    searchText: '',
}

const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function(note, index) {
        const el = document.createElement('p')
        el.textContent = note.text
        document.querySelector('#notes').appendChild(el)
    })
}

renderNotes(notes, filters)

document.querySelector('#search').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#create').addEventListener('submit', function(e) {
    e.preventDefault()
    
    renderNotes(notes, filters)
    e.target.elements.text.value = ''
})

document.querySelector('#filter-by').addEventListener('change', function(e) {
    
})