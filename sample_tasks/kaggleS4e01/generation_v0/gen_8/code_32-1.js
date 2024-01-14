/** // 0.30264466698482867 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15678067, Surname=Boyle, CreditScore=544, Geography=Spain, Gender=Female, Age=30.0, Tenure=3, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=163655.01.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculating geographical impact based on different weights for different countries
    const geographyImpact = (Geography === 'France') ? -0.20 : (Geography === 'Germany') ? 0.61 : -0.19;
    
    // Calculating gender impact based on different weights for male and female
    const genderImpact = (Gender === 'Female') ? 0.43 : -0.10;
    
    // Calculating interaction impact of age and number of products with a certain weight
    const ageNumProductsInteraction = Age * NumOfProducts * 0.02;
    
    // Calculating the impact of tenure and balance interaction with a specific weight
    const tenureBalanceInteraction = Tenure * Balance * 0.00;
    
    // Calculating the interaction of EstimatedSalary and CreditScore with a certain weight
    const salaryCreditScoreInteraction = EstimatedSalary * CreditScore * 0.00;
    
    // Calculating the interaction of Age and CreditScore with a certain weight
    const ageCreditScoreInteraction = Age * CreditScore * 0.00;
    
    // Calculating a novel combination weight based on the balance and age
    const novelCombination = (Balance / (Age + 1.00)) * 0.00;

    // Calculating the weighted sum of all the impacts and interactions
    let weightedSum = (CreditScore * 0.00) + 
                      (Age * 0.06) + 
                      (Balance * 0.00) + 
                      geographyImpact + 
                      genderImpact + 
                      (Tenure * -0.01) + 
                      (IsActiveMember * -0.90) + 
                      (NumOfProducts * -1.53) + 
                      ageNumProductsInteraction + 
                      (HasCrCard * -0.17) + 
                      (EstimatedSalary * 0.00) +
                      (CustomerId * 0.00) +
                      tenureBalanceInteraction +
                      (Surname.length % 4.31) * 0.03 +
                      salaryCreditScoreInteraction +
                      ageCreditScoreInteraction +
                      novelCombination;
    
    // Introducing another variable, loyaltyScore, to represent the loyalty of the customer
    const loyaltyScore = (Tenure + IsActiveMember) * 0.05;

    // Adding the loyaltyScore to the weightedSum
    weightedSum += loyaltyScore;

    // Calculating the final probability using the weighted sum
    const probability = 0.66 / (1 + Math.exp(weightedSum));

    return probability;
}
