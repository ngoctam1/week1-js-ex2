// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

var dolphinsScores1 = [96, 108, 89];
var koalasScores1 = [88, 91, 110];
var dolphinsScores2 = [97, 112, 101];
var koalasScores2 = [109, 95, 123];
var dolphinsScores3 = [97, 112, 101];
var koalasScores3 = [109, 95, 106];

function calculateAverage(scoreArray) {
    var sum = 0;
    for (let i = 0; i < scoreArray.length; i++) {
        sum += scoreArray[i];
    }
    return sum / scoreArray.length;
}

function determineWinner(dolphinsScores, koalasScores) {
    const dolphinsAverage = calculateAverage(dolphinsScores);
    const koalasAverage = calculateAverage(koalasScores);

    console.log(`Dolphins Average: ${dolphinsAverage}`);
    console.log(`Koalas Average: ${koalasAverage}`);

    if (dolphinsAverage >= 100 || koalasAverage >= 100) {
        if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
            console.log("Dolphins win the trophy!");
        } else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
            console.log("Koalas win the trophy!");
        } else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
            console.log("It's a draw, and both teams win the trophy!");
        } else {
            console.log("No team wins the trophy due to a tie or insufficient score.");
        }
    } else {
        console.log("No team wins the trophy due to insufficient score.");
    }
}
console.log("Test Data 1:");
determineWinner(dolphinsScores1, koalasScores1);
console.log("\nTest Data Bonus 1:");
determineWinner(dolphinsScores2, koalasScores2);
console.log("\nTest Data Bonus 2:");
determineWinner(dolphinsScores3, koalasScores3);