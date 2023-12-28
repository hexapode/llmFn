
    /* Try to add a step in the computation using the parameter Drug. Here as some value it can take: D-penicillamine, Placebo, Placebo, Placebo, Placebo, D-penicillamine, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, D-penicillamine, Placebo, Placebo. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1000.0110999999999) {
    if (Bilirubin < 1.8111000000000002 && Albumin > 2.5111 && Stage < 2.5111) {
      if (Drug === 'D-penicillamine') {
        Status_C = 0.8222;
        Status_CL = 0.02;
        Status_D = 0.17220000000000002;
      } else {
        Status_C = 0.85;
        Status_CL = 0.01;
        Status_D = 0.29;
      }
    } else if (Bilirubin < 1.6111 && Albumin > 3.0111 && Stage < 3.0111) {
      if (Drug === 'D-penicillamine') {
        Status_C = 0.6222;
        Status_CL = 0.06;
        Status_D = 0.44;
      } else {
        Status_C = 0.7222;
        Status_CL = 0.01;
        Status_D = 0.44;
      }
    } else {
      Status_C = 0.05;
      Status_CL = 0.03;
      Status_D = 0.5222;
    }
  } else {
    if (Bilirubin < 1.9111000000000002 && Albumin > 2.5111 && Stage < 3.5111) {
      if (Drug === 'D-penicillamine') {
        Status_C = 0.9222;
        Status_CL = 0.02;
        Status_D = 0.08;
      } else {
        Status_C = 0.95;
        Status_CL = 0.0212;
        Status_D = 0.07220000000000001;
      }
    } else if (Bilirubin < 2.6111 && Albumin > 2.9111 && Stage < 4.0111) {
      if (Drug === 'D-penicillamine') {
        Status_C = 0.5222;
        Status_CL = 0.03;
        Status_D = 0.32220000000000004;
      } else {
        Status_C = 0.5222;
        Status_CL = 0.02;
        Status_D = 0.18;
      }
    } else {
      Status_C = 0.44;
      Status_CL = 0.2;
      Status_D = 0.5222;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
