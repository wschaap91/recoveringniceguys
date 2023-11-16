export function generateDateFromDutchString(
    dutchDateString: string,
    year?: number
) {
    // Map Dutch month names to numerical representations
    const dutchMonths = {
        januari: 0,
        februari: 1,
        maart: 2,
        april: 3,
        mei: 4,
        juni: 5,
        juli: 6,
        augustus: 7,
        september: 8,
        oktober: 9,
        november: 10,
        december: 11,
    };

    // Split the Dutch date string into day and month
    const splitArray = dutchDateString.split(" ") as [
        string,
        keyof typeof dutchMonths
    ];

    const dayString = splitArray[0];
    const monthString = splitArray[1].toLowerCase() as keyof typeof dutchMonths;

    // Convert the month to its numerical representation
    const month = dutchMonths[monthString];

    // Create a new Date object
    const currentDate = new Date();

    // Set the day and month
    currentDate.setDate(parseInt(dayString));
    currentDate.setMonth(month);
    currentDate.setFullYear(year || new Date().getFullYear());

    return currentDate;
}

export function getDayOfYear(date: Date) {
    const start = new Date(date.getFullYear(), 0, 0) as any;
    const diff =
        date -
        start +
        (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    // console.log("Day of year: " + day);

    return day;
}

export function areDatesOnSameDayOfYear(date1: Date, date2: Date) {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        getDayOfYear(date1) === getDayOfYear(date2)
    );
}
