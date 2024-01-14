
                
/*
 contract_length:
 Customers who have longer contract lengths may be less likely to churn as they have made a commitment to stay with the service for a longer period of time.

 -> pre fuzz score: 0.5133107857004642
 -> post fuzz score: 0.5133107857004642
*/


function contract_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the probability based on the tenure of the customer
    // We can assume that the longer the tenure, the more likely the customer is to stay
    let probability = 1 - (Tenure * 0.05); // Assuming a linear relationship between tenure and probability

    return probability;
}






                function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
                    return
                    // CALL_FN_START
                    contract_length(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.05
                    // CALL_FN_END
                    ;
                }
            