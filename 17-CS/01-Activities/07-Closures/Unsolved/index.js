// TODO: Complete the 'counter' function below.
function counter() {
    const students = 10;

    return {
        displayCount: function () {
            console.log(`You have $${students} students in your class`);
        },
    };
}

module.exports = counter;
