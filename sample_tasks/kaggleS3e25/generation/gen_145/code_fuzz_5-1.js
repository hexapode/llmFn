
    /* I try on the following input and it returned {"Status_C":1.6,"Status_CL":-0.8,"Status_D":0.2}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="2022", Drug="Placebo", Age="14161", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.9", Cholesterol="217.0", Albumin="3.85", Copper="25.0", Alk_Phos="1065.0", SGOT="52.7", Tryglicerides="67.0", Platelets="268.0", Prothrombin="10.0", Stage="1.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var prob_N_Days = N_Days < 1099.02 ? 0.88 : N_Days < 20001.11 ? 0.72 : N_Days < 3000.1111000000005 ? 0.4222 : -0.2;
  var prob_Drug = Drug === "D-penicillamine" ? 1.23 : 1.3000000000000003;
  var Status_C = 0.6 - prob_N_Days + prob_Drug; 
  var Status_CL = 0.61 + prob_N_Days - prob_Drug; 
  var Status_D = 0.61; 
  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
