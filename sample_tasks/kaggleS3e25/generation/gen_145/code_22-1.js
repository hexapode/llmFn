
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.0; 
  var Status_CL = 0.0; 
  var Status_D = 0.0; 
  
  if (Bilirubin < 2.0 && Albumin > 3.5 && Prothrombin > 13) {
    Status_C = 0.8;
  } else if (Bilirubin > 2.0 && Albumin < 2.8 && Prothrombin < 10.0) {
    Status_D = 0.8;
  } else {
    Status_CL = 0.8;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
