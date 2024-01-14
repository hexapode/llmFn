/** // -Infinity //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15645847, Surname=P'eng, CreditScore=569, Geography=Germany, Gender=Male, Age=30.0, Tenure=2, Balance=109196.66, NumOfProducts=3, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=109393.19.
**/

coefficients.IsActiveMember * (1 + (HasCrCard === 1 ? 0.5 : 0)) +
