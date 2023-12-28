
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0;
  var Status_CL = 0;
  var Status_D = 0;

  if (Hepatomegaly === "Y") {
    Status_D = 1;
  } else {
    if (Ascites === "N" && Bilirubin < 1.0 && Alk_Phos < 800 && SGOT < 120) {
      Status_C = 1;
    } else if (Ascites === "Y" && Stage >= 3.0) {
      Status_D = 1;
    } else {
      Status_CL = 1;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
