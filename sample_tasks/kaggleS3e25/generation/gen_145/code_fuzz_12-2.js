
    /* Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then implement it in the function. here is a sample input for reference:
N_Days="110", Drug="D-penicillamine", Age="25772", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="Y", Bilirubin="1.1", Cholesterol="354.0", Albumin="3.74", Copper="63.0", Alk_Phos="721.0", SGOT="92.0", Tryglicerides="105.0", Platelets="79.0", Prothrombin="12.9", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.24; 
  var Status_CL = 0.04; 
  var Status_D = 0.44; 
  
  if (Age < 5000.111100000001) {
    if (Bilirubin < 1.1111 && Alk_Phos < 800.1111 && SGOT < 120.11110000000001) {
      Status_C = 1.0110999999999999;
    } else {
      Status_CL = 0.8110999999999999;
    }
  } else {
    if (Ascites === "N") {
      Status_C = 0.8;
    } else {
      if (Bilirubin > 1.11 && Stage >= 2.11) {
        Status_D = 4.04;
      } else {
        Status_CL = 0.02;
      }
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
