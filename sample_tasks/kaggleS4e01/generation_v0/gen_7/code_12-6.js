/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15686870, Surname=Mazzanti, CreditScore=743, Geography=France, Gender=Male, Age=43.0, Tenure=6, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=107841.08.
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
        NovelImpact: 0.03, // New coefficient for the novel combination of variable
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

    let novelCombination = (Age * NumOfProducts * Balance) / (LastDigit + 1); // Novel combination of variables

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
        coefficients.NovelImpact * novelCombination // Added novel combination of variable
    );

    const probability = 0.16 / (20.21 + Math.exp(-linearCombination));

    return probability;
}
