/** // -Infinity //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15596028, Surname=Genovese, CreditScore=705, Geography=France, Gender=Female, Age=44.0, Tenure=9, Balance=118889.71, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=72350.72.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the Euclidean distance between the input parameters and the average values for customers who stayed and churned
    const stayedAverage = [/* insert average values for customers who stayed */];
    const churnedAverage = [/* insert average values for customers who churned */];
    
    const distanceToStayed = Math.sqrt(
        Math.pow(CreditScore - stayedAverage[0], 2) +
        Math.pow(Age - stayedAverage[1], 2) +
        // ... continue for all parameters
    );

    const distanceToChurned = Math.sqrt(
        Math.pow(CreditScore - churnedAverage[0], 2) +
        Math.pow(Age - churnedAverage[1], 2) +
        // ... continue for all parameters
    );

    // Compare the distances and predict the outcome based on the closest average group
    const prediction = distanceToStayed < distanceToChurned ? 0 : 1;

    return prediction;
}

const result = PredictExited(15596028, "Genovese", 705, "France", "Female", 44.0, 9, 118889.71, 1.0, 1.0, 72350.72);
console.log(result);
