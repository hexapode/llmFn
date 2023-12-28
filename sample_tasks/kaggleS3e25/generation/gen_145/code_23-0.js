
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.5; 
  var Status_CL = 0.3; 
  var Status_D = 0.2;
  
  // New variable "Age_Days" as a combination of "Age" and "N_Days" 
  var Age_Days = parseInt(Age) + parseInt(N_Days);

  // Using the new variable in the computation
  if (Hepatomegaly === "Y" && Age_Days > 15000) {
    Status_D = 0.9;
  }

  if (Ascites === "N" && Bilirubin < 1.0 && Alk_Phos < 800 && SGOT < 120 && Platelets > 150) {
    Status_C = 0.8;
  } else if (Ascites === "Y" && Bilirubin > 2.0 && Stage >= 3.0) {
    Status_D = 0.8;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
