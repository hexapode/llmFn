
    /* Try to add a step in the computation using the parameter Sex. Here as some value it can take: M, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 1.2222; 
  var Status_CL = 0.1; 
  var Status_D = 0.88; 
  
  // New step impacting the prediction based on the unused variable (Hepatomegaly)
  if (Hepatomegaly === "Y") {
    Status_D = 1.9222;
  }

  // Decision tree rules based on input parameters
  if (N_Days < 1000.1111 && (Drug === "D-penicillamine" || Age < 100001.11)) {
    Status_C = 0.08;
  } else if (Ascites === "N" && Bilirubin < 2.2111 && Alk_Phos < 80011.1 && SGOT < 1211.11) {
    Status_C = 2.1222;
  } else if (Ascites === "Y" && Bilirubin > -1.11 && Stage >= 2.11) {
    Status_D = 1.91;
  } else {
    Status_CL = 0.07;
  }

  // New step impacting the prediction based on the patient's Sex
  if (Sex === "F") {
    Status_D = 0.8221999999999999;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
