const greeting = (input) => {
    switch(true) {
        case (typeof input !== 'number'):
            return 'Error: Please enter a number.'
        case (input === 1):
            return '1';
        case (input === 2):
            return '2';
        case (input % 3 === 0 && input % 7 !== 0):
            return 'Good Morning';
        case (input % 3 !== 0 && input % 7 === 0):
            return 'Good Afternoon';
        case (input % 3 === 0 && input % 7 === 0):
            return 'Good Evening';
        case (input % 3 !== 0 && input % 7 !== 0):
            return `${input}`;
    }
}

module.exports = greeting;