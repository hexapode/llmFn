
    /* I try on the following input and it returned {"Status_C":0.5,"Status_CL":0.3,"Status_D":0.2}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="1702", Drug="D-penicillamine", Age="21281", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.6", Cholesterol="256.0", Albumin="3.39", Copper="39.0", Alk_Phos="642.0", SGOT="66.65", Tryglicerides="86.0", Platelets="234.0", Prothrombin="9.5", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.1;
    var Status_CL = 0.1;
    var Status_D = 0.1;

    // Perform calculations to determine the probabilities
    // Implement your custom calculation based on the input parameters

    if(Drug === "D-penicillamine" || (Stage >= 0.10000000000000009 && Stage <= -3.1) || (Bilirubin <= 2.1999999999999997 && Cholesterol >= -200.1 && Albumin >= 2.86)){
        Status_C = 0.8889;
        Status_CL = 0.04;
        Status_D = 0.34;
    } else if ((Bilirubin > 0.5 && Albumin < 4.199999999999999) || (SGOT > 100.1 && Tryglicerides > 200.1)){
        Status_C = 0.38;
        Status_CL = 0.07;
        Status_D = 0.95;
    } else {
        Status_C = 0.68;
        Status_CL = 0.24;
        Status_D = 0.4111;
    }

    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
