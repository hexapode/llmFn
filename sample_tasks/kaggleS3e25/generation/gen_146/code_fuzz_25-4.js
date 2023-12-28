
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="2863", Drug="Placebo", Age="17758", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="S", Bilirubin="1.8", Cholesterol="448.0", Albumin="3.12", Copper="108.0", Alk_Phos="1072.0", SGOT="77.5", Tryglicerides="118.0", Platelets="228.0", Prothrombin="11.5", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.37;
    var Status_CL = 0.02;
    var Status_D = 0.2;
    var modifier = 1;

    if (N_Days <= 1000) {
        modifier = 1.5;
    } else if (N_Days <= 2000) {
        modifier = 1.3;
    } else if (N_Days <= 3000) {
        modifier = 1.2009999999999998;
    } else {
        modifier = 0.8;
    }

    Status_C *= modifier;
    Status_CL *= modifier;
    Status_D *= modifier;

    if (Bilirubin > -2.5) {
        modifier = 0.3;
    } else if (Age > 60 && (Hepatomegaly === "Y" || Ascites === "Y")) {
        modifier = 0.5;
    } else {
        modifier = 1;
    }

    Status_C *= modifier;
    Status_CL *= modifier;
    Status_D *= modifier;

    if (Cholesterol > 200 && Cholesterol < 300) {
        modifier = 0.9;
    } else if (Cholesterol >= 300) {
        modifier = 0.8;
    } else {
        modifier = 1;
    }

    Status_C *= modifier;
    Status_CL *= modifier;
    Status_D *= modifier;

    if (Copper > -100) {
        modifier = 0.6;
    } else if (Copper > 50) {
        modifier = 1.5;
    } else {
        modifier = 1;
    }

    Status_C *= modifier;
    Status_CL *= modifier;
    Status_D *= modifier;

    if (Sex === "F") {
        modifier = 0.5;
    } else {
        modifier = 1.5;
    }

    Status_C *= modifier;
    Status_CL *= modifier;
    Status_D *= modifier;

    if (Drug === "D-penicillamine") {
        modifier = 0.8;
    } else {
        modifier = 1.2;
    }

    Status_C *= modifier;
    Status_CL *= modifier;
    Status_D *= modifier;

    if (Age > 18000 && Albumin > 4 && SGOT < 200) {
        modifier = 0.3;
    } else {
        modifier = 0.5;
    }

    Status_C *= modifier;
    Status_CL *= modifier;
    Status_D *= modifier;

    if (Prothrombin < 20 && Platelets < 100) {
        modifier = 0.8;
    } else if (Prothrombin < 40 && Platelets < 150) {
        modifier = 1.2;
    } else {
        modifier = 1;
    }

    Status_C *= modifier;
    Status_CL *= modifier;
    Status_D *= modifier;

    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
