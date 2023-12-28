
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.5; 
  var Status_CL = 0.3; 
  var Status_D = 0.2;
  
  var combinedFactor = (Age / 10000) * (Bilirubin / 2) * (Math.min(Albumin, 4.5) / 4.5);
  
  if (Hepatomegaly === "Y") {
    Status_D = 0.8 + combinedFactor;
  }

  if (Ascites === "N" && Bilirubin < 1.0 && Alk_Phos < 800 && SGOT < 120) {
    Status_C = 0.8 + combinedFactor;
  } else if (Ascites === "Y" && Bilirubin > 2.0 && Stage >= 3.0) {
    Status_D = 0.8 + combinedFactor;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
