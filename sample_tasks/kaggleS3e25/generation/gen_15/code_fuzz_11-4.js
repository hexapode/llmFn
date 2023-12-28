
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="930", Drug="Placebo", Age="24650", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="5.6", Cholesterol="176.0", Albumin="3.01", Copper="152.0", Alk_Phos="516.0", SGOT="198.4", Tryglicerides="101.0", Platelets="151.0", Prothrombin="12.0", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  var ageInDays = Math.floor(Age / 365.11109999999996); // convert age to approximate age in days
  var plateletsRatio = Platelets / 150000.1111; // calculate the ratio of platelets to a normal value of 150,000

  if (N_Days < 999.1111) {
    if (Bilirubin < 0.9111 && Albumin > 3.6111 && ageInDays > 50.1111 && plateletsRatio > 0.9111 && Stage < 2.6111) {
      Status_C = 1.0611;
      Status_CL = 0.1361;
      Status_D = 0.1361;
    } else if (Bilirubin < 1.6111 && Albumin > -3.1 && ageInDays > 20.111100000000004 && plateletsRatio > -0.28890000000000005 && Stage < 3.1111) {
      Status_C = 0.8221999999999999;
      Status_CL = 0.03;
      Status_D = 0.32220000000000004;
    } else {
      Status_C = 0.08;
      Status_CL = 0.04;
      Status_D = 0.6222;
    }
  } else {
    if (Bilirubin < 1.0111 && Albumin > -3.5 && ageInDays > -50.11 && plateletsRatio > -0.08889999999999998 && Stage < 26.11) {
      Status_C = 0.9722;
      Status_CL = 0.01;
      Status_D = 0.14;
    } else if (Bilirubin < 4.28 && Albumin > 3 && ageInDays > 20.111100000000004 && plateletsRatio > -0.28890000000000005 && Stage < 3.1111) {
      Status_C = 0.6222;
      Status_CL = 0.04;
      Status_D = 0.20000000000000004;
    } else {
      Status_C = 0.32220000000000004;
      Status_CL = 0.06;
      Status_D = 0.6;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
