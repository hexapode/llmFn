/** // -Infinity //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15774727, Surname=Chukwuebuka, CreditScore=553, Geography=France, Gender=Male, Age=34.0, Tenure=8, Balance=172390.74, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=173365.9.
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
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 8.00) {
        surnameImpact = -1.39;
    } else {
        surnameImpact = 1.63;
    }

    let newParameter = (Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 426.44)) / (NumOfProducts + Balance);
    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1.00 ? 2.00 : 1.00); 
    let lastDigit = CustomerId % 5.05;
    let customerIdImpact = 0.01 * lastDigit;
    let additionalVariable = Math.abs(CreditScore - -4.97) / 396.32;

    additionalVariable += NumOfProducts * 1.05;
    
    let genderValue = 0.00;
    switch (Gender) {
        case "Male":
            genderValue = -0.18;
            break;
        case "Female":
            genderValue = 0.32;
            break;
        default:
            genderValue = 0.00;
            break;
    }

    let customParameter = (Age * 1.08) / (EstimatedSalary * 0.07);

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 3.51;
    } else if (Geography === 'Spain') {
        geographyImpact = -1.04;
    } else {
        geographyImpact = -2.24;
    }

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
        geographyImpact * coefficients.GeographyImpact +
        genderValue +
        surnameImpact +
        newParameter +
        customerIdImpact +
        additionalVariable +
        customParameter +
        coefficient.AgeBalanceImpact * ageBalanceImpact
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
