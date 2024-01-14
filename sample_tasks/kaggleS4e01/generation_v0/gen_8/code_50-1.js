/** // -Infinity //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15747265, Surname=Mistry, CreditScore=589, Geography=France, Gender=Female, Age=33.0, Tenure=1, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=61108.56.
**/

const surnameImpact = (Surname.charCodeAt(0) * 0.003);
