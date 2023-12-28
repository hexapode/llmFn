
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (Ascites === 'Y' || Edema === 'Y' || Bilirubin > 1.5 || Alk_Phos > 200) {
    Status_C = 0.1;
    Status_CL = 0.2;
    Status_D = 0.7;
  } else if (Age > 18000 && Sex === 'M' && Spiders === 'Y' && Platelets < 150) {
    Status_C = 0.7;
    Status_CL = 0.25;
    Status_D = 0.05;
  } else {
    Status_C = 0.9;
    Status_CL = 0.05;
    Status_D = 0.05;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
