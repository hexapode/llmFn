/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15649060, Surname=Hs?, CreditScore=662, Geography=Spain, Gender=Male, Age=32.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=182076.97.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as before)
        NewCombinationImpact: 0.05, // New combination impact coefficient
    };

    // ... (same as before)

    let newCombination = (Age * 1.05 - Tenure * 0.98) * (IsActiveMember === 1.00 ? 2.00 : 1.00); // New combination of variables
    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1.00 ? 2.00 : 1.00); 
    let lastDigit = CustomerId % 10.05;
    let customerIdImpact = 0.01 * lastDigit;
  
    // ... (same as before)

    let linearCombination = (
        // ... (same as before)
        coefficients.NewCombinationImpact * newCombination, // Adding the impact of the new combination
        // ... (same as before)
    );

    // ... (same as before)

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
