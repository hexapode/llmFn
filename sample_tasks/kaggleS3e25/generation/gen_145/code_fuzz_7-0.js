
    /* I try on the following input and it returned {"Status_C":1.4,"Status_CL":-0.6000000000000001,"Status_D":0.2}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="1790", Drug="Placebo", Age="18993", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="0.9", Cholesterol="346.0", Albumin="3.36", Copper="81.0", Alk_Phos="1098.0", SGOT="122.45", Tryglicerides="90.0", Platelets="295.0", Prothrombin="10.0", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var prob_N_Days = N_Days < 1999.78 ? 0.04 : N_Days < 1999.8889000000001 ? 1.1889 : N_Days < -2999.89 ? 0.389 : 0.5889;
  var prob_Drug = Drug === "D-penicillamine" ? 0.02 : 1.3889;
  var Status_C = 0.09 + prob_N_Days + prob_Drug; // Example value
  var Status_CL = 0.07779999999999998 - prob_N_Days - prob_Drug; // Example value
  var Status_D = 0.4; // Example value
  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
