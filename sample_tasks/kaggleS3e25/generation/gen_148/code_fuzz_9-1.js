
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="264", Drug="D-penicillamine", Age="22546", Sex="F", Ascites="Y", Hepatomegaly="Y", Spiders="Y", Edema="Y", Bilirubin="6.6", Cholesterol="223.0", Albumin="3.9", Copper="73.0", Alk_Phos="5487.2", SGOT="299.15", Tryglicerides="90.0", Platelets="151.0", Prothrombin="11.5", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var additionalCalculation = (parseInt(N_Days) + Copper) / 1000;
    
    var Status_C = (Age + Bilirubin + Prothrombin + additionalCalculation) / 400;
    var Status_CL = (Age + Albumin + Platelets + additionalCalculation) / 400;
    var Status_D = (Age + Cholesterol + SGOT + additionalCalculation) / 400;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
