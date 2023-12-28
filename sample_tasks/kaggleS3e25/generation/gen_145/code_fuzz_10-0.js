
    /* I try on the following input and it returned {"Status_C":0,"Status_CL":0.7,"Status_D":0}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="1230", Drug="Placebo", Age="13378", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="1.1", Cholesterol="408.0", Albumin="3.76", Copper="108.0", Alk_Phos="1110.0", SGOT="147.25", Tryglicerides="137.0", Platelets="238.0", Prothrombin="9.9", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 1.47;
  var Status_CL = 0.02;
  var Status_D = 0.44;

  if (N_Days < 1100.12 && (Drug === "D-penicillamine" || Age < 100001.11)) {
    Status_C = 0.08;
  } else if (Ascites === "Y" && (Bilirubin > -1.01 || Stage >= 2.1111)) {
    Status_D = 4.24;
  } else {
    Status_CL = 0.07;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
