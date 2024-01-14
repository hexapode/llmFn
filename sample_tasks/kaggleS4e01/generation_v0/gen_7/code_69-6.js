/** // 0.7056070838877447 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15619343, Surname=T'ien, CreditScore=627, Geography=France, Gender=Female, Age=35.0, Tenure=1, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=182536.22.
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
    };

    // Determine the length of the surname
    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    // Update the surname impact based on the length of the surname
    if (surnameLength <= 5) {
        surnameImpact = -2.31;
    } else {
        surnameImpact = 1.37;
    }

    // Introduce a new parameter based on additional variables
    let additionalVariable = (CreditScore - 22.76) / 397.43 + NumOfProducts * 1.05;

    // Calculate the linear combination with the new parameter
    let linearCombination = (
        coefficients.CustomerId * CustomerId +
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 2.40 : (Geography === 'Spain' ? -2.03 : -2.22)) +
        coefficients.GenderImpact * (Gender === 'Male' ? 2.43 : -2.35) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * ((Age * Tenure + (HasCrCard === 1 ? 1000 : 407.13)) / (NumOfProducts + Balance)) +
        additionalVariable
    );

    // Compute the probability using the logistic function
    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
