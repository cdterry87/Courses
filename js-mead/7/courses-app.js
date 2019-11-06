import courses from './../courses.js'

const filters = {
    searchText: ''
}

const renderCourses = function(courses, filters) {
    const filteredCourses = courses.filter(function(course) {
        return course.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#courses').innerHTML = ''

    filteredCourses.forEach(function(course, index) {
        const el = document.createElement('p')
        el.textContent = course.title
        document.querySelector('#courses').appendChild(el)
    })
}

renderCourses(courses, filters)

document.querySelector('#filter').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderCourses(courses, filters)
})