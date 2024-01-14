/** // 0.53095111232415 //**/
/**
I try on the following input and it returned 6.161667051696448" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15700460, Surname=Lu, CreditScore=614, Geography=Spain, Gender=Male, Age=28.0, Tenure=3, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=100564.36.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    let tenureFactor = -0.15 * (Tenure / 10);
    let creditScoreFactor = 0.20 * (CreditScore / 1000);
    let ageFactor = 0.08 * (Age / 100);
    let numOfProductFactor = -0.05 * NumOfProducts;
    let isActiveMemberFactor = IsActiveMember === 1 ? -0.10 : 0.15;
    let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 200000);
    
    let geographyFactor = Geography === 'Germany' ? 0.10 : (Geography === 'Spain' ? -0.08 : 0.03);
    let balanceFactor = -0.20 * (Balance / 100000);
    
    let genderFactor = Gender === 'Female' ? 0.05 : -0.03;
    
    let churnProbability = 0.5 + tenureFactor + creditScoreFactor + ageFactor + numOfProductFactor + isActiveMemberFactor + estimatedSalaryFactor + geographyFactor + balanceFactor + genderFactor;

    if (churnProbability > 1) {
        return 1; // churn
    } else if (churnProbability < 0) {
        return 0; // stay
    } else {
        return churnProbability; // return the calculated probability
    }
}
