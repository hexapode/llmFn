
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var AgeNum = (Age - 5000) / 10000;
  var BilirubinNum = Bilirubin / 4;
  var SGOTNum = SGOT / 200;
  
  if (N_Days < 1000) {
    Status_C = (BilirubinNum < 0.15 && Albumin > 3.5 && Stage < 2.5) ? 0.95 : ((BilirubinNum < 0.375 && Albumin > 3.0 && Stage < 3.0) ? 0.6 : 0.2);
    Status_CL = (BilirubinNum < 0.15 && Albumin > 3.5 && Stage < 2.5) ? 0.025 : ((BilirubinNum < 0.375 && Albumin > 3.0 && Stage < 3.0) ? 0.3 : 0.4);
    Status_D = (BilirubinNum < 0.15 && Albumin > 3.5 && Stage < 2.5) ? 0.025 : ((BilirubinNum < 0.375 && Albumin > 3.0 && Stage < 3.0) ? 0.1 : 0.4);
  } else {
    Status_C = (BilirubinNum < 0.15 && Albumin > 3.5 && Stage < 2.5) ? 0.85 : ((BilirubinNum < 0.375 && Albumin > 3.0 && Stage < 3.0) ? 0.4 : 0.1);
    Status_CL = (BilirubinNum < 0.15 && Albumin > 3.5 && Stage < 2.5) ? 0.1 : ((BilirubinNum < 0.375 && Albumin > 3.0 && Stage < 3.0) ? 0.4 : 0.3);
    Status_D = (BilirubinNum < 0.15 && Albumin > 3.5 && Stage < 2.5) ? 0.05 : ((BilirubinNum < 0.375 && Albumin > 3.0 && Stage < 3.0) ? 0.2 : 0.6);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
