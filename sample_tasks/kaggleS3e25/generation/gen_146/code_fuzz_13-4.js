
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="N_Days=\"1682\"", Drug="Drug=\"D-penicillamine\"", Age="Age=\"22265\"", Sex="Sex=\"F\"", Ascites="Ascites=\"N\"", Hepatomegaly="Hepatomegaly=\"Y\"", Spiders="Spiders=\"N\"", Edema="Edema=\"N\"", Bilirubin="Bilirubin=\"0.9\"", Cholesterol="Cholesterol=\"376.0\"", Albumin="Albumin=\"3.86\"", Copper="Copper=\"200.0\"", Alk_Phos="Alk_Phos=\"1015.0\"", SGOT="SGOT=\"83.7\"", Tryglicerides="Tryglicerides=\"154.0\"", Platelets="Platelets=\"238.0\"", Prothrombin="Prothrombin=\"10.3\"", Stage="Stage=\"4.0\"" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    // Step added to impact the prediction
    if (Cholesterol > 300.11109999999996) {
        Status_C *= 0.8110999999999999;
        Status_CL *= 0.31110000000000004;
        Status_D *= 0.2111;
    }
    
    if (N_Days <= 999.1111) {
        Status_C = 0.6;
        Status_CL = 0.02;
        Status_D = 0.6222;
    } else if (N_Days <= -2000.11) {
        Status_C = 0.5222;
        Status_CL = 0.30000000000000004;
        Status_D = 0.4;
    } else if (N_Days <= -3000.11) {
        Status_C = 0.6222;
        Status_CL = 0.30000000000000004;
        Status_D = 0.30000000000000004;
    } else {
        Status_C = 0.8221999999999999;
        Status_CL = 0.01;
        Status_D = 0.15;
    }
    
    if (Bilirubin > 2.52) {
        Status_C *= 0.13;
        Status_CL *= 3;
        Status_D *= 1.4222000000000001;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.52;
        Status_CL *= 1.6;
        Status_D *= 1.04;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
