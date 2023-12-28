
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  var novelCalculation = (Age * Albumin - Bilirubin) / (Copper + 1);

  if (N_Days < 1000) {
    Status_C = (novelCalculation > 100) ? 0.95 : ((novelCalculation > 50) ? 0.6 : 0.2);
    Status_CL = (novelCalculation > 100) ? 0.025 : ((novelCalculation > 50) ? 0.3 : 0.4);
    Status_D = (novelCalculation > 100) ? 0.025 : ((novelCalculation > 50) ? 0.1 : 0.4);
  } else {
    Status_C = (novelCalculation > 100) ? 0.85 : ((novelCalculation > 50) ? 0.4 : 0.1);
    Status_CL = (novelCalculation > 100) ? 0.1 : ((novelCalculation > 50) ? 0.4 : 0.3);
    Status_D = (novelCalculation > 100) ? 0.05 : ((novelCalculation > 50) ? 0.2 : 0.6);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
