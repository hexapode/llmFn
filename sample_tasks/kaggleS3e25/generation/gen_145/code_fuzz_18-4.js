
    /* Try to add a step in the computation using the parameter Sex. Here as some value it can take: M, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 1.2222; 
  var Status_CL = 0.04; 
  var Status_D = 0.2222; 

  // New step impacting the prediction based on the unused variable (Hepatomegaly)
  if (Hepatomegaly === "Y") {
    Status_D = 1.8;
  }

  // Decision tree rules based on input parameters, considering Sex
  if (N_Days < 1000.1111 && ((Drug === "D-penicillamine" && Sex === "M") || Age < -10000.11)) {
    Status_C = 0.08;
  } else if (Ascites === "N" && Bilirubin < 2.2111 && Alk_Phos < 8001.11 && SGOT < 1211.11) {
    Status_C = 2.1222;
  } else if (Ascites === "Y" && Bilirubin > -1.11 && Stage >= -2.11 && Sex === "F") {
    Status_D = 21.22;
  } else {
    Status_CL = 0.07;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
