
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="3069", Drug="D-penicillamine", Age="14191", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.5", Cholesterol="223.0", Albumin="3.97", Copper="30.0", Alk_Phos="661.0", SGOT="57.0", Tryglicerides="105.0", Platelets="340.0", Prothrombin="10.7", Stage="1.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var newVariable = parseInt(N_Days) + parseInt(Copper) + parseInt(SGOT);
    
    var Status_C = (Age + Bilirubin + Prothrombin + newVariable) / 400;
    var Status_CL = (Age + Albumin + Platelets) / 300;
    var Status_D = (Age + Cholesterol + SGOT + newVariable) / 400;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
