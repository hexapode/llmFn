
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="110", Drug="Placebo", Age="16658", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="Y", Bilirubin="17.4", Cholesterol="932.0", Albumin="3.26", Copper="140.0", Alk_Phos="1260.0", SGOT="165.85", Tryglicerides="166.0", Platelets="401.0", Prothrombin="11.0", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var novelCombination = (Copper * SGOT) / 10000;
    
    var Status_C = (Age + Bilirubin + Prothrombin + novelCombination) / 400;
    var Status_CL = (Age + Albumin + Platelets + novelCombination) / 400;
    var Status_D = (Age + Cholesterol + SGOT + novelCombination) / 400;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
