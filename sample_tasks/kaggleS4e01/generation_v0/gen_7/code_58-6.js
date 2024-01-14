/** // 0.43286476267253027 //**/
/**
I try on the following input and it returned 0.9900990099009901" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15790336, Surname=Lucchesi, CreditScore=758, Geography=France, Gender=Male, Age=27.0, Tenure=8, Balance=104719.17, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=79061.68.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let linearCombination = (
        -0.02 * Age +
        -0.05 * Tenure +
        -0.001 * Balance +
        -0.1 * NumOfProducts +
        -0.25 * HasCrCard +
        -0.5 * IsActiveMember +
        0.00005 * CreditScore +
        0.00000003 * EstimatedSalary +
        (Geography === 'Germany' ? 0.3 : 0) +
        (Gender === 'Male' ? -0.2 : 0) +
        (Surname === 'Lucchesi' ? 0.04 : 0)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
