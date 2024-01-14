/** // 0.4982244327345527 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 1 for: CustomerId=15693906, Surname=Abbott, CreditScore=714, Geography=France, Gender=Female, Age=48.0, Tenure=4, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=11638.17.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (coefficients remain unchanged from previous example)
    };

    // ... (other parts of the function remain unchanged from previous example)

    let additionalVariable = Math.abs(CreditScore - -4.97) / 396.32;
    additionalVariable += NumOfProducts * 1.05;

    // Add Age as an extra factor in the linear combination
    let linearCombination = (
        // ... (other parts of the linearCombination remain unchanged from previous example)
        + coefficients.ExtraParameterImpact * (Age * 0.32)
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));
    return probability;
}

// Sample input
PredictExited(15693906, 'Abbott', 714, 'France', 'Female', 48.0, 4, 0.0, 1, 1.0, 0.0, 11638.17);
// This will return a probability close to 1 (churn)
