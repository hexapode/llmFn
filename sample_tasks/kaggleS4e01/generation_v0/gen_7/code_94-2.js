/** // -Infinity //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15785559, Surname=De Luca, CreditScore=645, Geography=France, Gender=Male, Age=43.0, Tenure=1, Balance=133237.21, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=111032.79.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.01,  // Changed the coefficient for CreditScore
        Age: 0.01,  // Changed the coefficient for Age
        Tenure: -0.05,
        Balance: 0.02,  // Changed the coefficient for Balance
        NumOfProducts: -0.74,
        HasCrCard: -0.36,
        IsActiveMember: -1.75,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.46,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.46,
        CustomParameterImpact: -0.48,
        AgeBalanceImpact: 0.00,
        CreditScoreImpact: 0.00,
        UnusedParameterImpact: 0.21,
        ExtraParameterImpact: 0.77,
    };

    // ... (rest of the function remains the same)
}
