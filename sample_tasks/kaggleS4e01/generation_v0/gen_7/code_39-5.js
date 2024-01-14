/** // -Infinity //**/
/**
I try on the following input and it returned 0.47694808383505827" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15761364, Surname=Nkemjika, CreditScore=689, Geography=Spain, Gender=Female, Age=21.0, Tenure=6, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=157871.55.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous coefficients and parameter manipulations)

    let linearCombination = (
        // ... (previous linear combination calculation)
        coefficients.IsActiveMember * IsActiveMember * -1.5 + // Adjusted IsActiveMember coefficient
        // ... (other parameters and coefficients)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination)); // Changed the denominator to 1

    return probability;
}
