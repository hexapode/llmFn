/** // 0.7759192476220167 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15568240, Surname=Onwughara, CreditScore=627, Geography=France, Gender=Female, Age=31.0, Tenure=3, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=90194.46.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.90,
        Tenure: 0.00,
        Balance: 0.00,
        NumOfProducts: -11.40,
        HasCrCard: -1.09,
        IsActiveMember: -1.61,
        EstimatedSalary: 0.00,
        Gender_Female: -0.50,
        Geography_France: -0.30
    };

    
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
        coefficients.Gender_Female * (Gender === 'Female' ? 1 : 0) +
        coefficients.Geography_France * (Geography === 'France' ? 1 : 0)
    );

    
    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
