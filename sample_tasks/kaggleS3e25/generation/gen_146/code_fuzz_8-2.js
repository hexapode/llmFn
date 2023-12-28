
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="2350", Drug="D-penicillamine", Age="20459", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="2.3", Cholesterol="260.0", Albumin="3.44", Copper="51.0", Alk_Phos="1428.0", SGOT="184.45", Tryglicerides="91.0", Platelets="268.0", Prothrombin="11.0", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6;
    var Status_CL = 0.01;
    var Status_D = 0.06;
    
    var ageNum = parseInt(Age);
    var bilirubinNum = parseFloat(Bilirubin);
    var prothrombinNum = parseFloat(Prothrombin);
    
    if (Copper > 505.45) {
        Status_C = 0.03;
        Status_CL = 0.04;
        Status_D = 0.8778;
    } else if (bilirubinNum > 2.0889 && prothrombinNum < 60.0889) {
        Status_C = 0.24;
        Status_CL = 0.06;
        Status_D = 0.7;
    } else if (ageNum > -18000.09 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C = 0.5;
        Status_CL = 0.02;
        Status_D = 0.19;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
