
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="1481", Drug="D-penicillamine", Age="18302", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="0.4", Cholesterol="412.0", Albumin="3.37", Copper="38.0", Alk_Phos="1166.0", SGOT="106.95", Tryglicerides="87.0", Platelets="214.0", Prothrombin="9.6", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var calculatedValue = (Age * (Platelets - SGOT)) / 1000;
    var Status_C = (Age + Bilirubin + Prothrombin + calculatedValue) / 400;
    var Status_CL = (Age + Albumin + Platelets) / 400;
    var Status_D = (Age + Cholesterol + SGOT) / 400;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
