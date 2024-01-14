/** // 0.6866714807290575 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15790717, Surname=Ch'en, CreditScore=674, Geography=Germany, Gender=Male, Age=59.0, Tenure=9, Balance=125785.23, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=172450.04.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreFactor = CreditScore * 0.0015;
    const balanceFactor = Balance * 0.000015;
    let geographyFactor = 0;
    if (Geography === 'Germany') {
        geographyFactor = 0.38;
    } else if (Geography === 'Spain') {
        geographyFactor = 0.19;
    } else {
        geographyFactor = 0;
    }
    const genderFactor = (Gender === 'Female') ? 0.42 : 0;
    const ageFactor = Age * 0.012;
    const tenureFactor = Tenure * 0.03;
    const productFactor = (NumOfProducts > 2) ? 0.62 : 0;
    const churnProbability = 1 / (1 + Math.exp(-(-2.5 + creditScoreFactor + balanceFactor + geographyFactor + genderFactor + ageFactor + tenureFactor + productFactor - HasCrCard - IsActiveMember + EstimatedSalary * 0.000000082)));
    return churnProbability;
}

const result = PredictExited(15790717, "Ch'en", 674, "Germany", "Male", 59.0, 9, 125785.23, 1, 0.0, 0.0, 172450.04);
console.log(result);
