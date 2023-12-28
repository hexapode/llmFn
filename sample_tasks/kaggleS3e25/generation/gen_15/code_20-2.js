
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  
  if (Bilirubin < 1 && Albumin > 3 && Stage < 3) {
    Status_C = N_Days < 1000 ? 0.95 : 0.85;
    Status_CL = N_Days < 1000 ? 0.025 : 0.1;
    Status_D = N_Days < 1000 ? 0.025 : 0.05;
  } else {
    Status_C = N_Days < 1000 ? 0.6 : 0.4;
    Status_CL = N_Days < 1000 ? 0.3 : 0.4;
    Status_D = N_Days < 1000 ? 0.1 : 0.6;
  }
  
  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
