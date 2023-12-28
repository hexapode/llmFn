
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="1568", Drug="D-penicillamine", Age="19577", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="4.5", Cholesterol="636.0", Albumin="3.42", Copper="262.0", Alk_Phos="2276.0", SGOT="114.7", Tryglicerides="90.0", Platelets="223.0", Prothrombin="11.4", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var modifier = (Hepatomegaly === "Y" && Spiders === "Y") ? 1.5 : 1.0;
    var Status_C = (Age + Bilirubin + (Prothrombin * modifier)) / 400;
    var Status_CL = (Age + Albumin + (Platelets * modifier)) / 400;
    var Status_D = (Age + Cholesterol + (SGOT * modifier)) / 400;
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
