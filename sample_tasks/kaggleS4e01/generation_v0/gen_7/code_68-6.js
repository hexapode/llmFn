/** // 0.576253740568978 //**/
/**
I try on the following input and it returned 0.9900958089611206" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15583550, Surname=Mazzanti, CreditScore=593, Geography=Germany, Gender=Female, Age=36.0, Tenure=6, Balance=119315.75, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=79577.38.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const genderImpact = (Gender === 'Female') ? -0.3 : 0.1;
    const geographyImpact = (Geography === 'Germany') ? 0.4 : (Geography === 'Spain') ? -0.2 : -0.3;
    const ageImpact = Age * 0.01;
    const balanceImpact = (Balance > 100000) ? 0.1 : 0;
    const productImpact = (NumOfProducts === 1) ? -0.2 : 0.3;
    const cardImpact = (HasCrCard === 1.0) ? 0 : -0.1;
    const memberImpact = (IsActiveMember === 1.0) ? -0.5 : 0.2;

    const linearCombination = 0.6 + genderImpact + geographyImpact + ageImpact + (Tenure * 0.05) + balanceImpact + productImpact + cardImpact + memberImpact + (EstimatedSalary / 100000);

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
