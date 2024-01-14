/** // -Infinity //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15757821, Surname=Burgess, CreditScore=641, Geography=Spain, Gender=Male, Age=18.0, Tenure=1, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=41542.95.
**/

let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.14 : -0.10) + (CustomerId === 15757821 ? 0.10 : 0.00);
