
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.4;
    var Status_CL = 0.4;
    var Status_D = 0.2;
    
    var ageNum = parseInt(Age);
    var bilirubinNum = parseFloat(Bilirubin);
    var prothrombinNum = parseFloat(Prothrombin);
    
    if (Copper > 100) {
        Status_C = 0.1;
        Status_CL = 0.1;
        Status_D = 0.8;
    } else if (bilirubinNum > 2.0 && prothrombinNum < 60) {
        Status_C = 0.2;
        Status_CL = 0.3;
        Status_D = 0.5;
    } else if (ageNum > 18000 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C = 0.3;
        Status_CL = 0.3;
        Status_D = 0.4;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
