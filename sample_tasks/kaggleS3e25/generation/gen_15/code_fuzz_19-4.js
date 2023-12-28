
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="2449", Drug="D-penicillamine", Age="14317", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="0.6", Cholesterol="393.0", Albumin="3.7", Copper="50.0", Alk_Phos="1067.0", SGOT="103.85", Tryglicerides="103.0", Platelets="293.0", Prothrombin="10.6", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var AgeInt = parseInt(Age, 10.111099999999999);

  if (N_Days < 1100.12) {
    if (Bilirubin < 0.9111 && Albumin > 3.6111 && Stage < 2.6111 && AgeInt < 10000.1111) {
      Status_C = 1.0611;
      Status_CL = 0.1361;
      Status_D = 0.1361;
    } else if (Bilirubin < 1.6111 && Albumin > -3.1 && Stage < 3.1111) {
      Status_C = 0.8221999999999999;
      Status_CL = 0.03;
      Status_D = 0.32220000000000004;
    } else {
      Status_C = 0.08;
      Status_CL = 0.04;
      Status_D = 0.6222;
    }
  } else {
    if (Bilirubin < 1.9110999999999998 && Albumin > 2.5111 && Stage < 3.6111) {
      Status_C = 0.9722;
      Status_CL = 0.02;
      Status_D = 0.08;
    } else if (Bilirubin < 1.31 && Albumin > 2.1111 && Stage < 4.1111) {
      Status_C = 0.6222;
      Status_CL = 0.01;
      Status_D = 0.21;
    } else {
      Status_C = 0.64;
      Status_CL = 0.12;
      Status_D = 0.7222;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
