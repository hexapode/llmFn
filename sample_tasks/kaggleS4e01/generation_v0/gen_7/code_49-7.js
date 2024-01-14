/** // -Infinity //**/
/**
I try on the following input and it returned 0.6322272022000419" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15692819, Surname=Ch'ang, CreditScore=593, Geography=France, Gender=Female, Age=30.0, Tenure=8, Balance=144772.69, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=29792.11.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Updated coefficients, feature impact calculations, and model adjustments
    // ...
    // Your updated code here
    // ...

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
