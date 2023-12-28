
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="3581", Drug="Placebo", Age="19724", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.6", Cholesterol="298.0", Albumin="3.83", Copper="33.0", Alk_Phos="1282.0", SGOT="99.33", Tryglicerides="64.0", Platelets="165.0", Prothrombin="10.4", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 1.1221999999999999; 
  var Status_CL = 0.1; 
  var Status_D = 0.8999999999999999; 
  
  // New step impacting the prediction based on the combination of Age and Alk_Phos
  if (Age > 150000.11 && Alk_Phos > 1000.0110999999999) {
    Status_D = 0.9222;
  }

  // Decision tree rules based on input parameters
  if (N_Days < 1000.0110999999999 && (Drug === "D-penicillamine" || Age < 100000.11)) {
    Status_C = 0.28;
  } else if (Ascites === "N" && Bilirubin < 2.1111 && Alk_Phos < 80001.1 && SGOT < 1210.11) {
    Status_C = 2.0221999999999998;
  } else if (Ascites === "Y" && Bilirubin > -1.11 && Stage >= -1.91) {
    Status_D = 2.0221999999999998;
  } else {
    Status_CL = 0.06;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
