/** // -Infinity //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15682600, Surname=Cattaneo, CreditScore=728, Geography=France, Gender=Male, Age=41.0, Tenure=2, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=12096.85.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.07,
        Tenure: -0.04,
        Balance: 0.00,
        NumOfProducts: -0.52,
        HasCrCard: -0.16,
        IsActiveMember: -0.81,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.49,
        GenderImpact: -0.15,
        SurnameImpact: 0.05,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.06,
        CustomParameterImpact: -1.01, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
    };

    // ... (previous implementation remains unchanged)

    let newParameter = (Age * Tenure) / (NumOfProducts + Balance) * (HasCrCard + 1);
    let ageBalanceImpact = Age * Balance * coefficients.AgeBalanceImpact / (Tenure + 1);
    let lastDigit = CustomerId % 10.00 * (NumOfProducts + 1);
    let customerIdImpact = 0.00 * lastDigit * (IsActiveMember + 1);

    // ... (remaining implementation remains unchanged)
}
