function FindWeeksInMonth() {

    let year = 2018;
    let month = 9;
    let countOfWeeks = 0;
    
    let lastDayInMonth = new Date(year, month, 0);
    let currentMonthDaysCount = lastDayInMonth.getDate();
    let prevMonthDays = new Date(year, month - 1, 0).getDay();
    let nextMonthDays = (7 - new Date(year, month, 0).getDay() % 7) % 7;

    countOfWeeks = (currentMonthDaysCount + prevMonthDays + nextMonthDays)/7;
	
    console.log(currentMonthDaysCount);
    console.log(prevMonthDays);
    console.log(nextMonthDays);
    console.log(countOfWeeks);
}

FindWeeksInMonth();