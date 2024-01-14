/** // -Infinity //**/
/**
I try on the following input and it returned 0.8076027655249286" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15723053, Surname=Lujan, CreditScore=590, Geography=France, Gender=Female, Age=43.0, Tenure=2, Balance=137856.39, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=44203.95.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        // Updated coefficients based on importance
        // ...

    // Coefficients calculation and linear combination
    // ...

    // Probability calculation
    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
