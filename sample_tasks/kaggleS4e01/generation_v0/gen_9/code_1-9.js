/** // 0.5620864273701937 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15631162, Surname=Kao, CreditScore=634, Geography=Spain, Gender=Male, Age=45.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=34121.81.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  let ageFactor = (Age - 18) / (100 - 18); // Adjusting the age factor to consider the age range of 18 to 100

  let creditScoreFactor = (850 - CreditScore) / 850;

  let balanceFactor = Balance / 10000;

  let productsFactor = (NumOfProducts - 1) / 9; // Adjusting the products factor to consider the range from 1 to 10 products

  let activeMemberFactor = IsActiveMember ? 0.2 : 1;

  let churnProbability = (ageFactor + creditScoreFactor + balanceFactor + productsFactor + activeMemberFactor) / 5;

  return churnProbability;
}
