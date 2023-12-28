
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.0; 
  var Status_CL = 0.0; 
  var Status_D = 0.0; 
  
  if (Age < 5000) {
    if (Bilirubin < 1.0 && Alk_Phos < 800 && SGOT < 120) {
      Status_C = 0.9;
    } else {
      Status_CL = 0.7;
    }
  } else {
    if (Ascites === "N") {
      Status_C = 0.8;
    } else {
      if (Bilirubin > 2.0 && Stage >= 3.0) {
        Status_D = 0.9;
      } else {
        Status_CL = 0.8;
      }
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
