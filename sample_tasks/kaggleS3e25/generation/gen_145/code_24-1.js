
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.5; 
  var Status_CL = 0.3; 
  var Status_D = 0.2; 
  
  if (Bilirubin > 2.0 && Stage >= 3.0) {
    Status_D = 0.95;
  } else if (Bilirubin > 2.0 || Stage >= 3.0 || (Age > 20000 && Albumin < 4 && Prothrombin < 11) ) {
    Status_D = 0.8;
  } else {
    Status_C = 0.8;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
