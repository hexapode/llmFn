/** // 0.4982244327345527 //**/
/**
I try on the following input and it returned 0.004357581232300336" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15727484, Surname=Teng, CreditScore=724, Geography=France, Gender=Male, Age=38.0, Tenure=1, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=10963.04.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
        CreditScore: 0.14,
        Age: 0.06,
        Tenure: -0.03,
        Balance: 0.12,
        NumOfProducts: -0.25,
        HasCrCard: -0.15,
        IsActiveMember: -0.60,
        EstimatedSalary: 0.000001,
        Geography_France: -1.20, 
        Geography_Germany: 1.50, 
        Geography_Spain: -1.00, 
        Gender_Male: -0.20, 
        Gender_Female: 0.10,
        SurnameLengthImpact: 0.02,
        NewParameterImpact: 0.0015,  
    };

    let surnameImpact = Surname.length <= 5 ? -0.10 : 0.05;

    let newParameter = (Age * Tenure) / (NumOfProducts + 1 + Balance);

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        (Geography === 'France' ? coefficients.Geography_France : 0) +
        (Geography === 'Germany' ? coefficients.Geography_Germany : 0) +
        (Geography === 'Spain' ? coefficients.Geography_Spain : 0) +
        (Gender === 'Male' ? coefficients.Gender_Male : coefficients.Gender_Female) +
        coefficients.SurnameLengthImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
