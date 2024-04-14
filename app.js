var inputField = document.getElementById('user_inputed_age')
var year = document.getElementById('year')
var month = document.getElementById('month')
var day = document.getElementById('day')


function calcUserAge() {

    let userAge = inputField.value

    if (!userAge) {
        return alert("Please Select Your Birth Date!")
    }

    let currentCalender = new Date()

    let currentYear = currentCalender.getFullYear()
    let currentMonth = currentCalender.getMonth() + 1 //month starts with zero in that date obj so thats why we add 1 in current month
    let currentDate = currentCalender.getDate()

    let userBirthDate = new Date(userAge)

    let userAgeYear = currentYear - userBirthDate.getFullYear()
    let userAgeMonth = currentMonth - userBirthDate.getMonth()
    let userAgeDate = currentDate - userBirthDate.getDate()

    year.innerHTML = userAgeYear
    month.innerHTML = userAgeMonth
    day.innerHTML = userAgeDate

}


