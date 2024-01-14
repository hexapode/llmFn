/** // -Infinity //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15581388, Surname=Y?an, CreditScore=487, Geography=Spain, Gender=Male, Age=33.0, Tenure=8, Balance=145729.71, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=41365.85.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    if (Geography === 'France') {
        if (NumOfProducts < 2) {
            if (CreditScore < 600) {
                return 1; // High probability of churning
            } else {
                if (Age > 30 && Age < 40) {
                    return 0; // Low probability of churning
                } else {
                    return 1; // High probability of churning
                }
            }
        } else {
            if (Balance > 100000) {
                return 1; // High probability of churning
            } else {
                if (Tenure > 5) {
                    return 0; // Low probability of churning
                } else {
                    return 1; // High probability of churning
                }
            }
        }
    } else if (Geography === 'Germany') {
        // Define decision rules for Germany
        // ...
    } else {
        // Define decision rules for Spain
        // ...
    }
}

// Test the function with the provided sample input
const result = PredictExited(15581388.00, "Y?an", 487.00, "Spain", "Male", 33.00, 8.00, 145729.71, 1.00, 1.00, 41365.85);
console.log(result); // Output should be 0
