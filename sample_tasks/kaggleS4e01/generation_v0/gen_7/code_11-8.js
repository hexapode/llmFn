/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15787693, Surname=Shih, CreditScore=653, Geography=Spain, Gender=Male, Age=29.0, Tenure=7, Balance=100471.34, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=124598.99.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (coefficients remain the same)
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.06,
        NovelCombinationImpact: 0.03, // Adding a new coefficient for novel combination
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -0.09;
    } else {
        surnameImpact = 1.27;
    }

    let newParameter = (Age * Tenure) / (NumOfProducts + Balance);

    let novelCombination = newParameter * Balance / Math.max(1, Age);

    // ... (remaining code remains the same)

    let linearCombination = (
        // ... (same as before)
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact +
        coefficients.AdditionalImpact * additionalVariable +
        coefficients.NovelCombinationImpact * novelCombination // Including the novel combination impact
    );

    const probability = 0.16 / (20.21 + Math.exp(-linearCombination));

    return probability;
}

// Using the given sample input:
console.log(PredictExited(15787693, 'Shih', 653, 'Spain', 'Male', 29.0, 7, 100471.34, 2, 1.0, 1.0, 124598.99)); // Output will be the predicted probability
