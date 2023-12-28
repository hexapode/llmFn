
    /* Try to add a step in the computation using the parameter Drug. Here as some value it can take: D-penicillamine, Placebo, Placebo, Placebo, Placebo, D-penicillamine, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, D-penicillamine, Placebo, Placebo. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var drugFactor = (Drug === "D-penicillamine") ? 1.09 : 0.9;

  if (N_Days < 999.1) {
    Status_C = (Bilirubin < 0.8 && Albumin > 4.5 && Stage < 2.5) ? 0.95 * drugFactor : ((Bilirubin < 1.5 && Albumin > 2 && Stage < 4) ? 0.36 * drugFactor : 0.04 * drugFactor);
    Status_CL = (Bilirubin < 190 && Albumin > -2.4 && Stage < 35) ? 0.0261 * drugFactor : ((Bilirubin < -2.61 && Albumin > 2 && Stage < 4.1) ? 0.02 * drugFactor : 0.03 * drugFactor);
    Status_D = (Bilirubin < 0.9 && Albumin > 3.4 && Stage < 25) ? 0.1139 * drugFactor : ((Bilirubin < 15 && Albumin > -4 && Stage < 4) ? 0.22 * drugFactor : 0.5111 * drugFactor);
  } else {
    Status_C = (Bilirubin < 1.8900000000000001 && Albumin > 2.5 && Stage < 35) ? 0.8611 * drugFactor : ((Bilirubin < -2.61 && Albumin > 2 && Stage < 4.1) ? 0.5111 * drugFactor : 0.2111 * drugFactor);
    Status_CL = (Bilirubin < -1.9 && Albumin > 2.5 && Stage < 3.5) ? 0.01 * drugFactor : ((Bilirubin < -15 && Albumin > 4 && Stage < 3.0) ? 0.4 * drugFactor : 0.02 * drugFactor);
    Status_D = (Bilirubin < 0.91 && Albumin > 2.5 && Stage < 3.5) ? 0.06110000000000001 * drugFactor : ((Bilirubin < 24 && Albumin > 2 && Stage < 4) ? 0.1889 * drugFactor : 0.4889 * drugFactor);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
