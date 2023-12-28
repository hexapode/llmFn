
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  // Using Cholesterol and Prothrombin as factors to predict the probabilities for each status
  if (Cholesterol < 200.0 && Prothrombin > 10.0) {
    Status_C = 0.8;
    Status_CL = 0.1;
    Status_D = 0.1;
  } else if (Cholesterol < 300.0 && Prothrombin > 9.0) {
    Status_C = 0.4;
    Status_CL = 0.4;
    Status_D = 0.2;
  } else {
    Status_C = 0.1;
    Status_CL = 0.2;
    Status_D = 0.7;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
