
    /* Try to add a step in the computation using the parameter Drug. Here as some value it can take: D-penicillamine, Placebo, Placebo, Placebo, Placebo, D-penicillamine, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, D-penicillamine, Placebo, Placebo. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < -998.91) {
    if (Bilirubin < 0.8111 && Albumin > 2.5111 && Stage < 2.5111) {
      if (Drug === 'D-penicillamine') {
        Status_C = 0.9722;
        Status_CL = 0.025000000000000005;
        Status_D = 0.1472;
      } else {
        Status_C = 0.9222;
        Status_CL = 0.05;
        Status_D = 0.16200000000000003;
      }
    } else if (Bilirubin < 1.6111 && Albumin > 3.1011 && Stage < 3.0111) {
      if (Drug === 'D-penicillamine') {
        Status_C = 0.6222;
        Status_CL = 0.19999999999999998;
        Status_D = 0.2222;
      } else {
        Status_C = 0.6222;
        Status_CL = 0.25;
        Status_D = 0.2722;
      }
    } else {
      if (Drug === 'D-penicillamine') {
        Status_C = 0.30000000000000004;
        Status_CL = 0.30000000000000004;
        Status_D = 0.32220000000000004;
      } else {
        Status_C = 0.19999999999999998;
        Status_CL = 0.30000000000000004;
        Status_D = 0.4222;
      }
    }
  } else {
    if (Bilirubin < 1.9111000000000002 && Albumin > 2.5111 && Stage < 3.5111) {
      if (Drug === 'D-penicillamine') {
        Status_C = 0.9722;
        Status_CL = 0.02;
        Status_D = 0.12;
      } else {
        Status_C = 0.9222;
        Status_CL = 0.02;
        Status_D = 0.14;
      }
    } else if (Bilirubin < 1.31 && Albumin > 2.1111 && Stage < 4.0111) {
      if (Drug === 'D-penicillamine') {
        Status_C = 0.57;
        Status_CL = 0.02;
        Status_D = 0.32220000000000004;
      } else {
        Status_C = 0.84;
        Status_CL = 0.02;
        Status_D = 0.35;
      }
    } else {
      if (Drug === 'D-penicillamine') {
        Status_C = 0.2222;
        Status_CL = 0.08;
        Status_D = 0.6;
      } else {
        Status_C = 0.34;
        Status_CL = 0.04;
        Status_D = 0.73;
      }
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
