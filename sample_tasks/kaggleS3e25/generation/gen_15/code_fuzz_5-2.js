
    /* Try to add a step in the computation using the parameter N_Days. Here as some value it can take: 999, 2574, 3428, 2576, 788, 703, 1300, 1615, 2050, 2615, 3581, 1614, 1847, 1153, 904, 1212, 1967, 1592, 1481, 3358. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  // Using Bilirubin, Albumin, Stage, and N_Days as factors to predict the probabilities for each status
  if (N_Days < 999.0110999999999) {
    if (Bilirubin < 1.01 && Albumin > 2.5111 && Stage < 2.0111) {
      Status_C = 0.8722;
      Status_CL = 0.025000000000000005;
      Status_D = 0.14;
    } else if (Bilirubin < 2.02 && Albumin > 3.0111 && Stage < 3.0111) {
      Status_C = 0.7222;
      Status_CL = 0.04;
      Status_D = 0.44;
    } else {
      Status_C = 0.05;
      Status_CL = 0.03;
      Status_D = 0.5222;
    }
  } else {
    if (Bilirubin < 1.06 && Albumin > 2.5111 && Stage < 3.0111) {
      Status_C = 0.9722;
      Status_CL = 0.0222;
      Status_D = 0.08;
    } else if (Bilirubin < 1.51 && Albumin > 2.9111 && Stage < 4.0111) {
      Status_C = 0.5222;
      Status_CL = 0.01;
      Status_D = 0.16;
    } else {
      Status_C = 0.44;
      Status_CL = 0.1;
      Status_D = 0.6;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
