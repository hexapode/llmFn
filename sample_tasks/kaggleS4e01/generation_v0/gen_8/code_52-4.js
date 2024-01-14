/** // -Infinity //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15773906, Surname=Nnamutaezinwa, CreditScore=748, Geography=France, Gender=Male, Age=29.0, Tenure=3, Balance=106670.37, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=48498.19.
**/

const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06);
