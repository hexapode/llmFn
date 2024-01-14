/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/


// Adding gender impact to the computation
// Gender impact is set to 2.06 for Male and -1.07 for Female

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code)

    let genderImpact = (Gender === 'Male') ? 2.06 : -1.07;

    let linearCombination = (
        // ... (previous code)
        coefficients.GenderImpact * genderImpact +
        // ... (previous code)
    );

    // ... (previous code)
}
