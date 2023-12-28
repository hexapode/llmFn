
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="2171", Drug="D-penicillamine", Age="26580", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.6", Cholesterol="217.0", Albumin="3.33", Copper="14.0", Alk_Phos="733.0", SGOT="85.25", Tryglicerides="68.0", Platelets="445.0", Prothrombin="10.1", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var factor1 = (Age / 100) + (Bilirubin / 10) + (Prothrombin / 100);
    var factor2 = (Albumin / 10) + (Platelets / 500) + (Age / 1000);
    var factor3 = (Cholesterol / 100) + (SGOT / 100) + (Stage / 10);

    var Status_C = factor1 / 3;
    var Status_CL = factor2 / 3;
    var Status_D = factor3 / 3;

    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
