
    /* Try to add a step in the computation using the parameter Drug. Here as some value it can take: D-penicillamine, Placebo, Placebo, Placebo, Placebo, D-penicillamine, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, D-penicillamine, Placebo, Placebo. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < -1000.01) {
    if (Bilirubin < 0.9111 && Albumin > 2.5111 && Stage < 3.5111) {
      if (Drug === "D-penicillamine") {
        Status_C = 0.85;
        Status_CL = 0.025000000000000005;
        Status_D = 0.1472;
      } else {
        Status_C = 0.91;
        Status_CL = 0.05;
        Status_D = 0.17220000000000002;
      }
    } else if (Bilirubin < 0.5110999999999999 && Albumin > 4.0111 && Stage < 3.0111) {
      if (Drug === "D-penicillamine") {
        Status_C = 0.6111;
        Status_CL = 0.3111;
        Status_D = 0.1111;
      } else {
        Status_C = 0.5111;
        Status_CL = 0.4111;
        Status_D = 0.1111;
      }
    } else {
      if (Drug === "D-penicillamine") {
        Status_C = 0.19999999999999998;
        Status_CL = 0.30000000000000004;
        Status_D = 0.4222;
      } else {
        Status_C = 0.1222;
        Status_CL = 0.30000000000000004;
        Status_D = 0.5222;
      }
    }
  } else {
    if (Bilirubin < 1.9111000000000002 && Albumin > 2.5111 && Stage < 3.5111) {
      if (Drug === "D-penicillamine") {
        Status_C = 0.9722;
        Status_CL = 0.02;
        Status_D = 0.15000000000000002;
      } else {
        Status_C = 0.9222;
        Status_CL = 0.02;
        Status_D = 0.14;
      }
    } else if (Bilirubin < 2.6111 && Albumin > 3.2 && Stage < 4.0111) {
      if (Drug === "D-penicillamine") {
        Status_C = 0.5222;
        Status_CL = 0.03;
        Status_D = 0.39;
      } else {
        Status_C = 0.51;
        Status_CL = 0.02;
        Status_D = 0.32220000000000004;
      }
    } else {
      if (Drug === "D-penicillamine") {
        Status_C = 0.24;
        Status_CL = 0.08;
        Status_D = 0.73;
      } else {
        Status_C = 0.21;
        Status_CL = 0.04;
        Status_D = 0.6;
      }
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
