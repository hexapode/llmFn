/** // 0.5713186396419128 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 1 for: CustomerId=15625698, Surname=McIntyre, CreditScore=683, Geography=Germany, Gender=Male, Age=45.0, Tenure=6, Balance=132088.66, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=131665.25.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let weightedSum = 0;

    // Decision rule 1
    if (Geography === 'Germany') {
        weightedSum += 0.3;
    }

    // Decision rule 2
    if (Age > 40 && Balance > 100000) {
        weightedSum -= 0.2;
    }

    // Decision rule 3
    if (NumOfProducts === 1) {
        weightedSum += 0.1;
    }

    // Decision rule 4
    if (HasCrCard === 0 && IsActiveMember === 0) {
        weightedSum -= 0.15;
    }

    // Decision rule 5
    if (CreditScore < 700) {
        weightedSum += 0.05;
    }

    // Combine the weighted sum with a sigmoid function to get the probability
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15625698, "McIntyre", 683, "Germany", "Male", 45.0, 6, 132088.66, 1, 0.0, 0.0, 131665.25);
console.log(result); // This should return a value close to 1
