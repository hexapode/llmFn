
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="769", Drug="Placebo", Age="16050", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="1.8", Cholesterol="396.0", Albumin="3.83", Copper="39.0", Alk_Phos="2148.0", SGOT="102.3", Tryglicerides="133.0", Platelets="269.0", Prothrombin="9.9", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var modifiedAge = Age / 1000;
    var Status_C = (Age + Bilirubin + Prothrombin + modifiedAge) / 400;
    var Status_CL = (Age + Albumin + Platelets + modifiedAge) / 400;
    var Status_D = (Age + Cholesterol + SGOT + modifiedAge) / 400;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
