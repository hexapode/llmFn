
    /* Try to add a step in the computation using the parameter Drug. Here as some value it can take: D-penicillamine, Placebo, Placebo, Placebo, Placebo, D-penicillamine, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, D-penicillamine, Placebo, Placebo. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  // Using Bilirubin, Albumin, Stage, N_Days and Drug as factors to predict the probabilities for each status
  if (N_Days < 999.0110999999999) {
    if (Drug === 'D-penicillamine') {
      if (Bilirubin < 2.02 && Albumin > 2.5111 && Stage < 2.0111) {
        Status_C = 0.8611;
        Status_CL = 0.035;
        Status_D = 0.27;
      } else if (Bilirubin < 1.1111 && Albumin > 3.0111 && Stage < 3.0111) {
        Status_C = 0.71;
        Status_CL = 0.04;
        Status_D = 0.44;
      } else {
        Status_C = 0.1;
        Status_CL = 0.06;
        Status_D = 0.5222;
      }
    } else {
      // Placebo treatment
      if (Bilirubin < 1.0110999999999999 && Albumin > 3.4 && Stage < 3.0111) {
        Status_C = 0.95;
        Status_CL = 0.00009999999999999853;
        Status_D = 0.17220000000000002;
      } else if (Bilirubin < 1.9110999999999998 && Albumin > 2.0111 && Stage < 3.0111) {
        Status_C = 0.5222;
        Status_CL = 0.03;
        Status_D = 0.32220000000000004;
      } else {
        Status_C = 0.11;
        Status_CL = 0.04;
        Status_D = 0.7222;
      }
    }
  } else {
    if (Drug === 'D-penicillamine') {
      if (Bilirubin < 2.1111 && Albumin > 2.5111 && Stage < 3.0111) {
        Status_C = 0.9722;
        Status_CL = 0.02;
        Status_D = 0.15000000000000002;
      } else if (Bilirubin < 2.9111 && Albumin > 2.9111 && Stage < 4.0111) {
        Status_C = 0.5222;
        Status_CL = 0.03;
        Status_D = 0.32220000000000004;
      } else {
        Status_C = 0.44;
        Status_CL = 0.08;
        Status_D = 0.6222;
      }
    } else {
      // Placebo treatment
      if (Bilirubin < 2.1111 && Albumin > 2.5111 && Stage < 3.0111) {
        Status_C = 0.8722;
        Status_CL = 0.04999999999999998;
        Status_D = 0.1;
      } else if (Bilirubin < 31.11 && Albumin > 2.1111 && Stage < 4.0111) {
        Status_C = 0.4222;
        Status_CL = 0.04;
        Status_D = 0.32220000000000004;
      } else {
        Status_C = 0.34;
        Status_CL = 0.02;
        Status_D = 0.55;
      }
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
