
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var patientScore = (Age / 365) + (Bilirubin * 0.8) - (Albumin * 0.4) + (Prothrombin * 1.1) + (SGOT * 0.6) - (Platelets * 0.7) + (Cholesterol * 0.3) + (Copper * 0.2) + (Alk_Phos * 0.5);

  if (N_Days < 1000) {
    if (patientScore < 300) {
      Status_C = 0.9;
      Status_CL = 0.05;
      Status_D = 0.05;
    } else if (patientScore < 400) {
      Status_C = 0.6;
      Status_CL = 0.3;
      Status_D = 0.1;
    } else {
      Status_C = 0.2;
      Status_CL = 0.4;
      Status_D = 0.4;
    }
  } else {
    if (patientScore < 300) {
      Status_C = 0.8;
      Status_CL = 0.1;
      Status_D = 0.1;
    } else if (patientScore < 400) {
      Status_C = 0.4;
      Status_CL = 0.4;
      Status_D = 0.2;
    } else {
      Status_C = 0.1;
      Status_CL = 0.3;
      Status_D = 0.6;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
