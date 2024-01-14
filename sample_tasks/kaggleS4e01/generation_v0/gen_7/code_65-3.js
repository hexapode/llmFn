/** // 0.4983944008369501 //**/
/**
I try on the following input and it returned 0.9900360044463056" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15700801, Surname=Nnanna, CreditScore=746, Geography=France, Gender=Male, Age=41.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=63736.17.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Simplified coefficients
    const coefficients = {
        CreditScoreImpact: 0.01,
        AgeImpact: 0.02,
        TenureImpact: 0.03,
        NumOfProductsImpact: 0.04,
        HasCrCardImpact: 0.05,
        IsActiveMemberImpact: -0.06,
        EstimatedSalaryImpact: 0.07,
        GeographyImpact: {
            'France': 0.08,
            'Germany': -0.09,
            'Spain': -0.1
        },
        GenderImpact: {
            'Male': -0.11,
            'Female': 0.12
        }
    };

    // Calculate the linear combination
    let linearCombination = (
        coefficients.CreditScoreImpact * CreditScore +
        coefficients.AgeImpact * Age +
        coefficients.TenureImpact * Tenure +
        coefficients.NumOfProductsImpact * NumOfProducts +
        coefficients.HasCrCardImpact * HasCrCard +
        coefficients.IsActiveMemberImpact * IsActiveMember +
        coefficients.EstimatedSalaryImpact * EstimatedSalary +
        coefficients.GeographyImpact[Geography] +
        coefficients.GenderImpact[Gender]
    );

    // Apply sigmoid function to get the probability of churn
    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
