/** // -0.5017678816383321 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15602934, Surname=Chidimma, CreditScore=592, Geography=France, Gender=Male, Age=29.0, Tenure=3, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=26170.43.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
        CreditScore: 0.05,
        Age: 0.02,
        Balance: 0.08,
        NumOfProducts: 0.1,
        IsActiveMember: -0.2,
        EstimatedSalary: 0.0001,
        Tenure: -0.03  // Added Tenure as an extra factor
    };

    
    const z = 
        coefficients.CreditScore * CreditScore + 
        coefficients.Age * Age + 
        coefficients.Balance * Balance + 
        coefficients.NumOfProducts * NumOfProducts + 
        coefficients.IsActiveMember * IsActiveMember + 
        coefficients.EstimatedSalary * EstimatedSalary +
        coefficients.Tenure * Tenure;  // Added Tenure to the calculation
    const probabilityChurn = 1 / (1 + Math.exp(-z));

    return probabilityChurn;
}
