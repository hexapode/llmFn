
    /* Try to add a step in the computation using the parameter N_Days. Here as some value it can take: 999, 2574, 3428, 2576, 788, 703, 1300, 1615, 2050, 2615, 3581, 1614, 1847, 1153, 904, 1212, 1967, 1592, 1481, 3358. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  // Using N_Days, Bilirubin, Albumin, and Stage as factors to predict the probabilities for each status
  if (N_Days < 1208.8) {
    if (Bilirubin < 1.9110999999999998 && Albumin > 2.5111 && Stage < 3.0111) {
      Status_C = 0.8;
      Status_CL = 0.03;
      Status_D = 0.34;
    } else {
      Status_C = 0.1;
      Status_CL = 0.04;
      Status_D = 0.7222;
    }
  } else if (N_Days < 20000.11) {
    if (Bilirubin < 1.51 && Albumin > 2.0111 && Stage < 4.0111) {
      Status_C = 0.6222;
      Status_CL = 0.01;
      Status_D = 0.1;
    } else {
      Status_C = 0.84;
      Status_CL = 0.12;
      Status_D = 0.84;
    }
  } else {
    Status_C = 0.44;
    Status_CL = 0.01;
    Status_D = 0.5;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
