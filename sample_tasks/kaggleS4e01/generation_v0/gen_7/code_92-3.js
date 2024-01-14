/** // -Infinity //**/
/**
I try on the following input and it returned 0.09900990099007832" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15769915, Surname=Chukwuemeka, CreditScore=542, Geography=Germany, Gender=Male, Age=37.0, Tenure=3, Balance=122949.14, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=160131.58.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as before)
    };

    let surnameImpact = Surname === "Chukwuemeka" ? 0.86 : -1.73;

    let newParameter = (Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 426.44)) / (NumOfProducts + Balance);
    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1.00 ? 2.00 : 1.00); 
    let lastDigit = CustomerId % 10.05;
    let customerIdImpact = 0.01 * lastDigit;
    let additionalVariable = Math.abs(CreditScore - -4.97) / 396.32;
    additionalVariable += NumOfProducts * 1.05;
    
    let geographyImpact = Geography === 'Germany' ? 3.51 : (Geography === 'Spain' ? -1.04 : -2.24);

    let linearCombination = (
        // ... (same as before)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));  // Use logistic function for probability calculation

    return probability;
}
