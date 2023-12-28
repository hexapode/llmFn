
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="1698", Drug="Placebo", Age="20955", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.9", Cholesterol="308.0", Albumin="3.43", Copper="67.0", Alk_Phos="2562.0", SGOT="91.0", Tryglicerides="96.0", Platelets="141.0", Prothrombin="9.9", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.0; 
  var Status_CL = 0.0; 
  var Status_D = 0.0;
  var additionalFactor = 0.0;
  
  // New condition based on Age and Cholesterol
  if (Age > 20000 && Cholesterol > 300) {
    additionalFactor = 0.2;
  }

  // Decision tree rules based on input parameters
  if (N_Days < 1000 && (Drug === "D-penicillamine" || Age < 10000)) {
    Status_C = 0.8 + additionalFactor;
  } else if (Ascites === "N" && Bilirubin < 1.0 && Alk_Phos < 800 && SGOT < 120) {
    Status_C = 0.9 + additionalFactor;
  } else if (Ascites === "Y" && Bilirubin > 2.0 && Stage >= 3.0) {
    Status_D = 0.9 + additionalFactor;
  } else {
    Status_CL = 0.7 + additionalFactor;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
