/** // -Infinity //**/
/**
Try to think how Geography parameter could impact the prediction, then add a step in the computation using the parameter Geography. Here as some value it can take: France, France, France, France, Spain, Germany, France, Spain, France, Germany, Germany, Germany, Spain, France, France, France, France, France, Germany, France.
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
        GeographyFranceImpact: -0.89, // Impact of France compared to other countries
        GeographyGermanyImpact: 0.90, // Impact of Germany compared to other countries
        GeographySpainImpact: -1.07, // Impact of Spain compared to other countries
        GenderImpact: -0.15,
        SurnameImpact: 0.05,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.06,
        CustomParameterImpact: -1.01, 
        AgeBalanceImpact: 0.00, 
    };

    // ... (rest of the function remains the same)

    let linearCombination = (
        // ... (previous linear combination part remains the same)
        coefficients.GeographyFranceImpact * (Geography === 'France' ? 1 : 0) +
        coefficients.GeographyGermanyImpact * (Geography === 'Germany' ? 1 : 0) +
        coefficients.GeographySpainImpact * (Geography === 'Spain' ? 1 : 0) +
        // ... (remaining part of the linear combination)
    );

    // ... (remaining part of the function remains the same)
}

