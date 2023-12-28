
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="2442", Drug="D-penicillamine", Age="16929", Sex="M", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.6", Cholesterol="660.0", Albumin="3.85", Copper="76.0", Alk_Phos="1440.0", SGOT="153.45", Tryglicerides="155.0", Platelets="445.0", Prothrombin="9.9", Stage="1.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var factor1 = (Age + Bilirubin + Prothrombin) / 300;
    var factor2 = (Age + Albumin + Platelets) / 300;
    var factor3 = (Age + Cholesterol + SGOT) / 300;

    var Status_C = (factor1 + Copper) / 2;
    var Status_CL = (factor2 + Alk_Phos) / 2;
    var Status_D = (factor3 + Tryglicerides) / 2;

    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
