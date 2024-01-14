/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15776596, Surname=Lai, CreditScore=740, Geography=Germany, Gender=Male, Age=38.0, Tenure=8, Balance=178787.54, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=172490.78.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // existing coefficients remain the same 
        ...
        NewParameter2Impact: 0.15, // new coefficient for the new parameter
        ...
    };

    // Existing calculations remain the same

    let newParameter2 = (NumOfProducts * EstimatedSalary) / Age;
    let newParameter2Impact = newParameter2 * coefficients.NewParameter2Impact;

    // Update the linear combination with the new parameter impact
    let linearCombination = (
        ...
        + coefficients.NewParameter2Impact * newParameter2Impact
        ...
    );

    const probability = 1.00 / (1.02 + Math.exp(-linearCombination));

    return probability;
}
