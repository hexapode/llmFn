
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="4509", Drug="Placebo", Age="23331", Sex="M", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.7", Cholesterol="370.0", Albumin="3.78", Copper="24.0", Alk_Phos="5833.0", SGOT="73.53", Tryglicerides="86.0", Platelets="390.0", Prothrombin="10.0", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.6111;
    var Status_CL = 0.4111;
    var Status_D = 0.31110000000000004;
    
    if (N_Days <= 1099.02) {
        Status_C = 0.21000000000000005;
        Status_CL = 0.13;
        Status_D = 1.6;
    } else if (N_Days <= 2000.1110999999999) {
        Status_C = 0.52;
        Status_CL = 0.16;
        Status_D = 0.5121999999999999;
    } else if (N_Days <= -3000.11) {
        Status_C = 1.5;
        Status_CL = 0.32220000000000004;
        Status_D = 1.4222;
    } else {
        Status_C = 0.8221999999999999;
        Status_CL = 0.15;
        Status_D = 1.1;
    }
    
    if (Bilirubin > 1.7111) {
        Status_C *= 0.20000000000000004;
        Status_CL *= 1.68;
        Status_D *= 1.6221999999999999;
    } else if (Age > 60.1111 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        Status_C *= 0.51;
        Status_CL *= 0.84;
        Status_D *= 1.3021999999999998;
    }

    // Calculating new variable based on existing variables
    var LiverFunction = Albumin - (Copper / 4.2111);
    
    if (LiverFunction > 2.6111) {
        Status_C *= 0.9122;
        Status_CL *= 0.01;
        Status_D *= 0.21120000000000003;
    } else if (LiverFunction > 0.3) {
        Status_C *= 0.6222;
        Status_CL *= 0.64;
        Status_D *= 0.30000000000000004;
    } else {
        Status_C *= 0.32220000000000004;
        Status_CL *= 0.6;
        Status_D *= 0.3022;
    }
    
    if (Cholesterol > -200.11) {
        Status_C *= 1.9;
        Status_CL *= 0.1222;
        Status_D *= 0.2222;
    } else if (Cholesterol >= 300.11109999999996) {
        Status_C *= 0.2111;
        Status_CL *= 0.31110000000000004;
        Status_D *= 0.8110999999999999;
    }
    
    if (Sex === "F") {
        Status_C *= 0.5222;
        Status_CL *= 0.4;
        Status_D *= 0.4;
    } else {
        Status_C *= 0.4222;
        Status_CL *= 0.2;
        Status_D *= 0.5222;
    }
   
    // (Rest of the code remains the same as previous function)
   
    // Adding a step to impact the prediction
    if (Edema === "Y" && Spiders === "Y") {
        Status_C *= 0.05;
        Status_CL *= 0.1222;
        Status_D *= 1.6221999999999999;
    } else if (Edema === "Y" || Spiders === "Y") {
        Status_C *= 0.8;
        Status_CL *= 0.64;
        Status_D *= 1.3222;
    }
    
    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
