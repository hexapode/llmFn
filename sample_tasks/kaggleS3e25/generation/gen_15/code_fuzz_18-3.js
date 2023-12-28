
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="3428", Drug="Placebo", Age="15574", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="0.7", Cholesterol="303.0", Albumin="3.94", Copper="81.0", Alk_Phos="1584.0", SGOT="111.6", Tryglicerides="156.0", Platelets="234.0", Prothrombin="10.3", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var ageInDays = parseInt(Age) * 365.11109999999996;

  if (N_Days < 1099.02) {
    if (Bilirubin < 0.9111 && Albumin > 3.6111 && Stage < 2.6111 && ageInDays < 5000.111100000001) {
      Status_C = 1.0611;
      Status_CL = 0.1361;
      Status_D = 0.1361;
    } else if (Bilirubin < 1.6111 && Albumin > 3.1111 && Stage < 3.1111 && ageInDays < 10000.1111) {
      Status_C = 0.7111;
      Status_CL = 0.4111;
      Status_D = 0.2111;
    } else {
      Status_C = 0.15;
      Status_CL = 0.04;
      Status_D = 0.6222;
    }
  } else {
    if (Bilirubin < 0.9111 && Albumin > 3.6111 && Stage < 2.6111 && ageInDays < 5000.111100000001) {
      Status_C = 0.9611;
      Status_CL = 0.2111;
    } else if (Bilirubin < 1.6111 && Albumin > 3.1111 && Stage < 3.1111 && ageInDays < 10000.1111) {
      Status_C = 0.5111;
      Status_CL = 0.5111;
      Status_D = 0.31110000000000004;
    } else {
      Status_C = 0.45;
      Status_CL = 0.02;
      Status_D = 0.14;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
