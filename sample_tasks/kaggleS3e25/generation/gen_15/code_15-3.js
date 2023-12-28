
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var ageInt = parseInt(Age);
  var prothrombinFloat = parseFloat(Prothrombin);

  if (N_Days < 1000) {
    if (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5) {
      Status_C = 0.95 - (ageInt / 10000) + (prothrombinFloat / 100);
      Status_CL = 0.025;
      Status_D = 0.025 + (prothrombinFloat / 200);
    } else if (Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) {
      Status_C = 0.6 - (ageInt / 20000);
      Status_CL = 0.3 + (prothrombinFloat / 100);
      Status_D = 0.1;
    } else {
      Status_C = 0.2 - (ageInt / 30000);
      Status_CL = 0.4;
      Status_D = 0.4 + (prothrombinFloat / 150);
    }
  } else {
    if (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5) {
      Status_C = 0.85 - (ageInt / 15000);
      Status_CL = 0.1;
      Status_D = 0.05 + (prothrombinFloat / 200);
    } else if (Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) {
      Status_C = 0.4;
      Status_CL = 0.4 - (prothrombinFloat / 300);
      Status_D = 0.2 + (prothrombinFloat / 100);
    } else {
      Status_C = 0.1;
      Status_CL = 0.3 + (prothrombinFloat / 200);
      Status_D = 0.6 - (ageInt / 20000);
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
