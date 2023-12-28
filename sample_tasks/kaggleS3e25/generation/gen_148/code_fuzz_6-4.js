
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="2574", Drug="D-penicillamine", Age="16279", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="14.4", Cholesterol="448.0", Albumin="3.93", Copper="121.0", Alk_Phos="967.0", SGOT="260.15", Tryglicerides="218.0", Platelets="309.0", Prothrombin="11.0", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var unusedVariable = parseFloat(N_Days) + parseFloat(Copper); // Adding an extra step with the unused variable
    var Status_C = (Age + Bilirubin + Prothrombin + unusedVariable) / 400;
    var Status_CL = (Age + Albumin + Platelets + unusedVariable) / 400;
    var Status_D = (Age + Cholesterol + SGOT + unusedVariable) / 400;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
