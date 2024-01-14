/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15643870, Surname=Hsia, CreditScore=684, Geography=Spain, Gender=Female, Age=32.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=101382.86.
**/

let customerAgeNumOfProductRatio = Age / NumOfProducts;
let customerAgeNumOfProductFactor = 0.05 * (customerAgeNumOfProductRatio - 3.20) + (HasCrCard ? 0.04 : 0.00);
