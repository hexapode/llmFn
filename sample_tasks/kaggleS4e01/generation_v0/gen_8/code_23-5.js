/** // -Infinity //**/
/**
I try on the following input and it returned -0.00379875191974126" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15812517, Surname=Yuryeva, CreditScore=635, Geography=Germany, Gender=Male, Age=33.0, Tenure=8, Balance=152296.84, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=109659.12.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const weightedSum = (CreditScore * 0.0006) +
        (Age * 0.05) +
        (Balance * 0.0001) +
        ((Geography === 'Germany') ? 0.5 : -0.2) +
        ((Gender === 'Female') ? 0.2 : -0.1) +
        (Tenure * -0.01) +
        (isActiveMember * -0.5) +
        (NumOfProducts * -0.5) +
        (Age * NumOfProducts * 0.02) +
        (HasCrCard * -0.1) +
        (CustomerId * 0.00001) +
        (Tenure * Balance * 0.000001) +
        ((Surname.length % 4.18) * 0.02) +
        (EstimatedSalary * CreditScore * 0.00000001) +
        (Age * CreditScore * 0.00001);

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
