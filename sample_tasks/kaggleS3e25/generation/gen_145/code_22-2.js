
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.0; 
  var Status_CL = 0.0; 
  var Status_D = 0.0; 
  
  if (Hepatomegaly === "Y") {
    Status_D = 1.0;
  } else {
    if (Bilirubin < 1.2 && Cholesterol < 275 && Albumin > 3.5 && Copper < 50) {
      Status_C = 0.8;
      Status_CL = 0.2;
    } else if (Bilirubin >= 2.0 && Cholesterol >= 300 && Albumin < 3.0 && Copper >= 100) {
      Status_D = 0.8;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
