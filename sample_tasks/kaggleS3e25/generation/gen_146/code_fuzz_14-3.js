
    /* Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then implement it in the function. here is a sample input for reference:
N_Days="264", Drug="D-penicillamine", Age="19246", Sex="F", Ascites="Y", Hepatomegaly="Y", Spiders="Y", Edema="Y", Bilirubin="14.4", Cholesterol="236.0", Albumin="2.54", Copper="138.0", Alk_Phos="815.0", SGOT="106.95", Tryglicerides="118.0", Platelets="80.0", Prothrombin="11.4", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.5889;
    var Status_CL = 0.3889;
    var Status_D = 0.28890000000000005;
    
    if (N_Days <= 1210.11) {
        if (Bilirubin > 1.6889000000000003) {
            Status_C = 0.0878;
            Status_CL = 0.07780000000000001;
            Status_D = 0.9999;
        } else if (Age > 60.0889) {
            Status_C = 0.88;
            Status_CL = 0.06;
            Status_D = 0.7;
        } else {
            Status_C = 0.4889;
            Status_CL = 0.4889;
            Status_D = 0.28890000000000005;
        }
    } else if (N_Days <= -2000.09) {
        if (Cholesterol > -200.09) {
            Status_C = 0.8999999999999999;
            Status_CL = 0.02;
            Status_D = 0.30000000000000004;
        } else {
            Status_C = 0.5;
            Status_CL = 0.3778;
            Status_D = 0.5;
        }
    } else {
        if (Hepatomegaly === "Y") {
            Status_C = 0.88;
            Status_CL = 0.06;
            Status_D = 0.5;
        } else {
            Status_C = 0.7999999999999999;
            Status_CL = 0.02;
            Status_D = 0.11;
        }
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
