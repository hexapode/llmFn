/** // 0.6637374670965125 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15633840, Surname=Ijendu, CreditScore=775, Geography=Germany, Gender=Male, Age=49.0, Tenure=7, Balance=130142.79, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=171070.58.
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
        NovelImpact: 0.10 // New coefficient for the novel variable
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

    let novelVariable = (Age * Balance) / (NumOfProducts + Tenure); // New novel variable

    let additionalVariable = Math.abs(CreditScore - -60.10) / 101.11;

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
        coefficients.NovelImpact * novelVariable // Include novel variable in the linear combination
    );

    const probability = 0.16 / (20.21 + Math.exp(-linearCombination));

    return probability;
}
