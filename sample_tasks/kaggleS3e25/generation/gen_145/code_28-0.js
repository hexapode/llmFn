
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.5; 
  var Status_CL = 0.3; 
  var Status_D = 0.2; 
  var unusedVariableImpact = (Cholesterol - 200) / 100;
  
  if (Hepatomegaly === "Y") {
    Status_D = 0.8;
  }

  if (N_Days > 2000) {
    Status_D = 0.7;
  } else if (N_Days > 1000) {
    Status_C = 0.6;
  }

  if (Ascites === "N" && Bilirubin < 1.0 + unusedVariableImpact) {
    Status_C = 0.8;
  } else if (Ascites === "Y" && Bilirubin > 2.0 + unusedVariableImpact) {
    Status_D = 0.8;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
