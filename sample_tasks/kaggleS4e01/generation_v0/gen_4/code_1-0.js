/** // -Infinity //**/
/**
I try on the following input and it returned -916.5187000000005" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15610765, Surname=Onwumelu, CreditScore=715, Geography=France, Gender=Female, Age=29.0, Tenure=8, Balance=56214.85, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=92982.61.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  let probability = 0;

  // Update the calculation based on the input features
  probability = ((CreditScore/850) * 0.1) - (Age * 0.004) + (Balance/200000) * 0.1 - (NumOfProducts * 0.05) - (IsActiveMember ? 0.15 : 0.05) + (EstimatedSalary/200000) * 0.2;

  // Return the calculated probability
  return probability;
}
