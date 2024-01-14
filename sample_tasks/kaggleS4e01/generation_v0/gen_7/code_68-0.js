/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15600882, Surname=Kao, CreditScore=752, Geography=France, Gender=Male, Age=40.0, Tenure=0, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=88669.89.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: -0.01,
        Tenure: -0.05,
        Balance: 0.00,
        NumOfProducts: -0.73,
        HasCrCard: -0.35,
        IsActiveMember: -1.73,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.46,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.45,
        CustomParameterImpact: -0.48, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
        UnusedParameterImpact: 0.20,  
        ExtraParameterImpact: 0.78,  
    };

    // Other variable calculations remain the same

    let unusedParameter = 110.01;  
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;

    let linearCombination = (
        // Previous linear combination
        // ...
        + unusedParameterImpact // Adding impact of the unused parameter
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}

// Sample input
console.log(PredictExited(15600882, 'Kao', 752, 'France', 'Male', 40.0, 0, 0.0, 2, 1.0, 0.0, 88669.89)); // Expected result: 0
