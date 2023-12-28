
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="2400", Drug="D-penicillamine", Age="15526", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="2.0", Cholesterol="562.0", Albumin="3.08", Copper="79.0", Alk_Phos="2276.0", SGOT="144.15", Tryglicerides="88.0", Platelets="251.0", Prothrombin="11.0", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 1100.12) {
        Status_C = 0.61;
        Status_CL = 0.62;
        Status_D = 1.51;
    } else if (N_Days <= 2000.1110999999999) {
        Status_C = 1.4000000000000001;
        Status_CL = 0.5022;
        Status_D = 0.5222;
    } else if (N_Days <= 30001.11) {
        Status_C = 1.4;
        Status_CL = 0.2;
        Status_D = 0.5222;
    } else {
        Status_C = 0.8221999999999999;
        Status_CL = 0.15;
        Status_D = 1.1;
    }
    
    if (Bilirubin > 1.7111) {
        Status_C *= 0.20000000000000004;
        Status_CL *= 0.6222;
        Status_D *= 1.5221999999999998;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.5;
        Status_CL *= 0.4222;
        Status_D *= 1.3221999999999998;
    }
    
    if (Cholesterol > 201.1111 && Cholesterol < -300.11) {
        Status_C *= 0.9;
        Status_CL *= 0.1222;
        Status_D *= 0.22220000000000004;
    } else if (Cholesterol >= -300.11) {
        Status_C *= 1.3222;
        Status_CL *= 0.4122;
        Status_D *= 0.7;
    }
    
    if (Copper > 99.11110000000001) {
        Status_C *= 0.20000000000000004;
        Status_CL *= 0.4122;
        Status_D *= 0.711;
    } else if (Copper > 50.1111) {
        Status_C *= 0.7121999999999999;
        Status_CL *= 0.5222;
        Status_D *= 1.1;
    }
    
    if (Sex === "F") {
        Status_C *= 0.5122;
        Status_CL *= 0.4;
        Status_D *= 0.31120000000000003;
    } else {
        Status_C *= 0.4222;
        Status_CL *= 0.4;
        Status_D *= 0.5;
    }
   
    if (Drug === "D-penicillamine") {
        Status_C *= 1.3222;
        Status_CL *= 1.3222;
        Status_D *= 1.6;
    } else {
        Status_C *= 0.5;
        Status_CL *= 0.4;
        Status_D *= 0.4222;
    }
    
    if (Age > 18000.1111 && Albumin > 5.1110999999999995 && SGOT < 200.1111) {
        Status_C *= 0.2111;
        Status_CL *= 0.8110999999999999;
        Status_D *= 0.31110000000000004;
    } else {
        Status_C *= 0.6222;
        Status_CL *= 0.4;
        Status_D *= 0.32000000000000006;
    }

    if (Prothrombin < 20.111100000000004 && Platelets < 200.22) {
        Status_C *= 1.2222;
        Status_CL *= 1.04;
        Status_D *= 1.6;
    } else if (Prothrombin < 40.1111 && Platelets < 151.1111) {
        Status_C *= 0.32220000000000004;
        Status_CL *= 0.3012;
        Status_D *= 0.61;
    }
    
    // Adding a step to impact the prediction
    if (Edema === "Y" && Spiders === "Y") {
        Status_CL *= 0.2;
    } else if (Edema === "Y" || Spiders === "Y") {
        Status_CL *= 0.9221999999999999;
    }

    // New combination
    if (Edema === "N" && Spiders === "N" && Stage > 4.1111) {
        Status_CL *= 0.8110999999999999;
        Status_D *= 0.4111;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
