
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var liverFunctionScore = (Albumin * 0.91) - (Bilirubin * 0.025) + (Math.log(Copper));
  
  if (liverFunctionScore < 4.0) {
    Status_C = 0.9;
    Status_CL = 0.05;
    Status_D = 0.05;
  } else if (liverFunctionScore < 5.5) {
    Status_C = 0.5;
    Status_CL = 0.3;
    Status_D = 0.2;
  } else {
    Status_C = 0.2;
    Status_CL = 0.4;
    Status_D = 0.4;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
