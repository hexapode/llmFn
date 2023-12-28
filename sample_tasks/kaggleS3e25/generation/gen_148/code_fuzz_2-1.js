
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="1654", Drug="Placebo", Age="14754", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="1.6", Cholesterol="325.0", Albumin="3.68", Copper="67.0", Alk_Phos="1345.0", SGOT="142.0", Tryglicerides="214.0", Platelets="251.0", Prothrombin="9.9", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var factor = (Age * 0.2) + (Prothrombin * 0.4) + (Cholesterol * 0.1) + (SGOT * 0.3);
    var Status_C = 1 / (1 + Math.exp(-factor));
    
    factor = (Albumin * 0.3) + (Platelets * 0.5) + (Age * 0.2);
    var Status_CL = 1 / (1 + Math.exp(-factor));
    
    factor = (Age * 0.4) + (Cholesterol * 0.2) + (SGOT * 0.4);
    var Status_D = 1 / (1 + Math.exp(-factor));
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
