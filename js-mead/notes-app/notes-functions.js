// Read existing notes from localstorage
const getSavedNotes = function() {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Save notes to localstorage
const saveNotes = function(notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Delete a note from the list
const deleteNote = function(id) {
    const noteIndex = notes.findIndex(function(note) {
        return note.id === id
    })

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate DOM structure for a note
const generateNoteDOM = function(note) {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')

    button.textContent = 'Delete'
    noteEl.appendChild(button)
    button.addEventListener('click', function() {
        deleteNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }
    textEl.setAttribute('href', 'edit.html#' + note.id)

    noteEl.appendChild(textEl)

    return noteEl
}

// Sort notes by one of three ways
const sortNotes = function(notes, sortBy) {
    console.log('sorting')

    if (sortBy === 'byEdited') {
        console.log('byedited')
        return notes.sort(function(a, b) {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        console.log('bycreated')

        return notes.sort(function(a, b) {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if(a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        console.log('alphabetical')

        return notes.sort(function(a, b) {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if(a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    }

    return notes
}

// Render application notes
const renderNotes = function (notes, filters) {
    notes = sortNotes(notes, filters.sortBy)

    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach(function (note) {
        const noteEl = generateNoteDOM(note)
        
        document.querySelector('#notes').appendChild(noteEl)
    })
}

// Generate last updated message
const generateLastEdited = function(timestamp) {
    return `Last updated ${moment(timestamp).fromNow()}`
}