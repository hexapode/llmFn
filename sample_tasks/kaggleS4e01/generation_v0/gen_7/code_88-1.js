/** // -Infinity //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15671630, Surname=T'ang, CreditScore=710, Geography=France, Gender=Female, Age=36.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=185599.34.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.00,
        Tenure: -0.05,
        Balance: 0.00,
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

    // ... (previous code remains the same)

    let newParameter = (Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 426.44) + (balance / 100.00)) / (NumOfProducts + Balance - 1);
    // Added 'balance / 100.00' to the newParameter calculation to incorporate Balance as an extra factor.
    
    // ... (remaining code remains the same)

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
