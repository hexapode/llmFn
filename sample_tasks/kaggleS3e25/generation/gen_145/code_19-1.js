
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.5; 
  var Status_CL = 0.3; 
  var Status_D = 0.2; 
  
  if (Edema === "Y") {
    Status_D = 0.8;
  }

  if (Bilirubin > 2.0 && Age > 60) {
    Status_D = 0.7;
  }

  if (Albumin < 3.0 && Prothrombin < 10.0) {
    Status_D = 0.9;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
