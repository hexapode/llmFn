
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="1735", Drug="Placebo", Age="11872", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.7", Cholesterol="132.0", Albumin="3.6", Copper="17.0", Alk_Phos="423.0", SGOT="49.6", Tryglicerides="56.0", Platelets="265.0", Prothrombin="10.1", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var factor = (Age / 100) + (Prothrombin / 10) + (Platelets / 300);
    var Status_C = factor * 0.5;
    var Status_CL = factor * 0.7;
    var Status_D = factor * 0.3;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
