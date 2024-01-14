/** // -Infinity //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15809847, Surname=Mancini, CreditScore=732, Geography=Spain, Gender=Male, Age=37.0, Tenure=1, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=150784.26.
**/

let isActiveMemberFactor = -0.10 * IsActiveMember + (HasCrCard ? 0.14 : -0.05) + (Geography === 'Germany' ? 0.22 : -0.11);
