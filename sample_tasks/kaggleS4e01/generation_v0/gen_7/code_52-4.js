/** // -Infinity //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15590993, Surname=Findlay, CreditScore=579, Geography=Germany, Gender=Male, Age=37.0, Tenure=5, Balance=152212.88, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=120219.14.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: -0.01,
        Tenure: -0.05,
        Balance: 0.00,
        NumOfProducts: -0.60,
        HasCrCard: -0.35,
        IsActiveMember: -1.71,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.46,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.45,
        CustomParameterImpact: -0.48, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
        UnusedParameterImpact: 0.10,  
        ExtraParameterImpact: 0.77,  
        AdditionalFactorImpact: 0.03,  // Adding new parameter impact
    };

    // ... (previous code remains the same)

    // Introducing a new input parameter called 'AgeBalanceFactor'
    let ageBalanceFactor = (Age * 0.02) + (Balance / 10000);  
    let ageBalanceImpact = ageBalanceFactor * coefficients.AgeBalanceImpact * (IsActiveMember === 1.00 ? 2.00 : 1.00); 

    // ... (previous code remains the same)

    // Incorporating the new 'AgeBalanceFactor' into the linear combination
    let linearCombination = (
        // ... (other coefficients remain the same)
        ageBalanceFactor * coefficients.AdditionalFactorImpact +   // Introducing new factor
        // ... (other coefficients remain the same)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
