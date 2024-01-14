/** // -Infinity //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15750776, Surname=Pinto, CreditScore=678, Geography=France, Gender=Male, Age=32.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=130173.39.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const tenureBalanceInteractionWeight = (Tenure * Balance * 0.00) + (NumOfProducts * 0.01);  // Added NumOfProducts as an additional factor
    
    // ... (rest of the code remains the same)
}
