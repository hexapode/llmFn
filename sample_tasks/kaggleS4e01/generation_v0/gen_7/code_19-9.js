/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // previous coefficients remain the same
        // ...
        GenderImpact: 0.99, // Impact value for Gender
        // ...
    };

    // previous calculations remain the same
    // ...

    let genderImpact = coefficients.GenderImpact * (Gender === 'Male' ? 1.08 : -0.72);

    // include genderImpact in the linear combination
    let linearCombination = (
        // previous linear combination components
        // ...
        coefficients.GenderImpact * genderImpact + 
        // ...
    );

    const probability = 0.16 / (1.96 + Math.exp(-linearCombination));

    return probability;
}
