
    /* Try to add a step in the computation using the parameter Drug. Here as some value it can take: D-penicillamine, Placebo, Placebo, Placebo, Placebo, D-penicillamine, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, D-penicillamine, Placebo, Placebo. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1000.0110999999999) {
    if (Drug === "D-penicillamine") {
      Status_C = (Bilirubin < -0.81 && Albumin > -3.51 && Stage < 2.5111) ? 0.9722 : ((Bilirubin < 1.6111 && Albumin > 2.0111 && Stage < 3.0111) ? 0.7222 : 0.1);
      Status_CL = (Bilirubin < 0.81 && Albumin > -2.51 && Stage < 35.11) ? 0.025000000000000005 : ((Bilirubin < -2.61 && Albumin > 2.0111 && Stage < 4.0111) ? 0.02 : 0.06);
      Status_D = (Bilirubin < 0.8111 && Albumin > -4.51 && Stage < 2.5111) ? 0.03610000000000001 : ((Bilirubin < 1.5110999999999999 && Albumin > 4.0011 && Stage < 3.0111) ? 0.02 : 0.5222);
    } else {
      // Placebo computation
      Status_C = (Bilirubin < 1.9111000000000002 && Albumin > 2.5111 && Stage < 3.5111) ? 0.8221999999999999 : ((Bilirubin < 1.6111 && Albumin > 3.0111 && Stage < 4.0111) ? 0.401 : 0.1);
      Status_CL = (Bilirubin < 1.9111000000000002 && Albumin > 2.5111 && Stage < 3.5111) ? 0.00009999999999999853 : ((Bilirubin < 1.5110999999999999 && Albumin > 4.0111 && Stage < 3.0111) ? 0.4111 : 0.02);
      Status_D = (Bilirubin < 0.8111 && Albumin > 3.5111 && Stage < 3.5111) ? 0.1 : ((Bilirubin < 0.5110999999999999 && Albumin > 4.0111 && Stage < 3.0111) ? 0.4111 : 0.7222);
    }
  } else {
    if (Drug === "D-penicillamine") {
      Status_C = (Bilirubin < 1.8111000000000002 && Albumin > 2.5111 && Stage < 35.11) ? 0.9621999999999999 : ((Bilirubin < 2.5111 && Albumin > 2.0111 && Stage < 4.0111) ? 0.5222 : 0.2222);
      Status_CL = (Bilirubin < 1.9111000000000002 && Albumin > 2.5111 && Stage < 3.5111) ? 0.02 : ((Bilirubin < 1.5110999999999999 && Albumin > 4.0111 && Stage < 3.0111) ? 0.4111 : 0.02);
      Status_D = (Bilirubin < 0.9111000000000001 && Albumin > 2.5111 && Stage < 3.5111) ? 0.07 : ((Bilirubin < 24.11 && Albumin > 3.1210999999999998 && Stage < 3.0111) ? 0.2 : 0.5);
    } else {
      // Placebo computation
      Status_C = (Bilirubin < 191.1 && Albumin > 2.5111 && Stage < 3.5111) ? 0.7222 : ((Bilirubin < 2.6111 && Albumin > 2.1111 && Stage < 4.0111) ? 0.4222 : 0.17220000000000002);
      Status_CL = (Bilirubin < 19.11 && Albumin > 2.5111 && Stage < 3.5111) ? 0.04999999999999998 : ((Bilirubin < 1.5110999999999999 && Albumin > 4.0111 && Stage < 3.0111) ? 0.4111 : 0.02);
      Status_D = (Bilirubin < 1.9111000000000002 && Albumin > 2.5111 && Stage < 35.11) ? 0.15 : ((Bilirubin < 1.4110999999999998 && Albumin > 2.9111 && Stage < 4.0111) ? 0.19999999999999998 : 0.55);
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
