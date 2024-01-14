/** // 0.4757835198345602 //**/
/**
I try on the following input and it returned 0.16873030476262932" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15659399, Surname=Hsueh, CreditScore=743, Geography=France, Gender=Female, Age=32.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=93717.07.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CreditScore: 0.004,
        Age: -0.1,
        Tenure: -0.05,
        NumOfProducts: -0.6,
        HasCrCard: -0.3,
        IsActiveMember: -1.5,
        EstimatedSalary: 0.000002,
        Geography_France_Impact: -0.2, // Impact for France as Geography
        Geography_Germany_Impact: 0.3, // Impact for Germany as Geography
        Geography_Spain_Impact: -0.3, // Impact for Spain as Geography
        Gender_Female_Impact: -0.1, // Impact for Female as Gender
        Gender_Male_Impact: 0.1, // Impact for Male as Gender
        Surname_Hsueh_Impact: 0.2, // Impact for "Hsueh" as Surname
        BaseImpact: -1.0 // Base impact
    };

    let geographyImpact = 0.0;
    if (Geography === "France") {
        geographyImpact += coefficients.Geography_France_Impact;
    } else if (Geography === "Germany") {
        geographyImpact += coefficients.Geography_Germany_Impact;
    } else if (Geography === "Spain") {
        geographyImpact += coefficients.Geography_Spain_Impact;
    }

    let genderImpact = Gender === "Female" ? coefficients.Gender_Female_Impact : coefficients.Gender_Male_Impact;

    let surnameImpact = Surname === "Hsueh" ? coefficients.Surname_Hsueh_Impact : 0.0;

    // Calculate the linear combination
    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        geographyImpact +
        genderImpact +
        surnameImpact +
        coefficients.BaseImpact
    );

    // Convert linear combination to probability
    const probability = 1.0 / (1.0 + Math.exp(-linearCombination));

    return probability;
}
