
                
/*
 customer_age:
 Younger customers may be more likely to churn as they tend to be more tech-savvy and open to trying new products and services.

 -> pre fuzz score: 0.4982244327345527
 -> post fuzz score: 0.4982244327345527
*/


function customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability of younger customers being more likely to churn
    let probability = 0;

    // Logic to compute the probability based on the parameters
    if (Age < 15.630071597415268) {
        probability = 0.6; // Assuming younger customers have a higher probability of churning
    } else {
        probability = 0.4; // Assuming older customers have a lower probability of churning
    }

    return probability;
}




/*
 average_monthly_expenses:
 Customers with higher average monthly expenses may be less likely to churn as they are more invested in the service.

 -> pre fuzz score: 0.5113188598116765
 -> post fuzz score: 0.5113188598116765
*/


function average_monthly_expenses(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculating the average monthly expenses as the EstimatedSalary divided by 12
  const averageMonthlyExpenses = EstimatedSalary / 12;

  // Assuming that customers with average monthly expenses greater than the median are more invested in the service
  // Calculating the probability based on the assumption that higher average monthly expenses lead to lower churn likelihood
  let probability = 0;
  if (averageMonthlyExpenses > 9410.960189691756) {
    probability = 0.2;  // Assuming 20% probability of lower churn likelihood for higher average monthly expenses
  } else {
    probability = 0.1;  // Assuming 10% probability of lower churn likelihood for average or lower average monthly expenses
  }

  return probability;
}






                function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
                    return
                    // CALL_FN_START
                    customer_age(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.00909090909090909 + average_monthly_expenses(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.00909090909090909
                    // CALL_FN_END
                    ;
                }
            