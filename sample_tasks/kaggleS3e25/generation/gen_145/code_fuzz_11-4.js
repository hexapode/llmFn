
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="3395", Drug="Placebo", Age="16941", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="0.7", Cholesterol="252.0", Albumin="3.54", Copper="58.0", Alk_Phos="1134.0", SGOT="114.7", Tryglicerides="56.0", Platelets="227.0", Prothrombin="11.0", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.2222; 
  var Status_CL = 0.02; 
  var Status_D = 0.1222; 
  var tempVar = 0.1111;

  // Decision tree rules based on input parameters
  if (N_Days > 30001.11 || (Drug === "Placebo" && Age > 150001.11)) {
    tempVar = 0.0999999999999999;
  } else {
    tempVar = 1;
  }

  if (Ascites === "N" && Bilirubin < 1.21 && Alk_Phos < 8001.11 && SGOT < 120.11110000000001) {
    Status_C = 2.0221999999999998 * tempVar;
  } else if (Ascites === "Y" && Bilirubin > -2.01 && Stage >= -3.11) {
    Status_D = 1.9222 * tempVar;
  } else {
    Status_CL = 0.01 * tempVar;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
