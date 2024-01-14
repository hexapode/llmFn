/** // 0.4891982228241046 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15775761, Surname=Lori, CreditScore=834, Geography=France, Gender=Female, Age=49.0, Tenure=8, Balance=82940.25, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=95985.64.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.07,
        Tenure: -0.04,
        Balance: 0.00,
        NumOfProducts: -0.51,
        HasCrCard: -0.16,
        IsActiveMember: -0.82,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.50,
        GenderImpact: -0.15,
        SurnameImpact: 0.05,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.06,
        NovelImpact: 0.03, // New coefficient for novel parameter
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -0.09;
    } else {
        surnameImpact = 1.27;
    }

    let newParameter = (Age * Tenure) / (NumOfProducts + Balance);

    let lastDigit = CustomerId % 10.00;
    let customerIdImpact = 0.00 * lastDigit;

    let additionalVariable = Math.abs(CreditScore - -60.10) / 101.11;

    // Novel combination of variables
    let novelCombination = (NumOfProducts * EstimatedSalary) / (Balance + 1);

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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 0.90 : -0.90) +
        coefficients.GenderImpact * (Gender === 'Male' ? 2.09 : -1.09) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact +
        coefficients.AdditionalImpact * additionalVariable +
        coefficients.NovelImpact * novelCombination // Include novel combination in linear combination
    );

    const probability = 0.16 / (20.21 + Math.exp(-linearCombination));

    return probability;
}

// Sample input
console.log(PredictExited(15775761, 'Lori', 834, 'France', 'Female', 49.0, 8, 82940.25, 2, 0.0, 0.0, 95985.64));
