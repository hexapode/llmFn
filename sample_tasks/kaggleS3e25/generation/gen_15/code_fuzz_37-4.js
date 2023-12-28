
    /* Try to add a step in the computation using the parameter Drug. Here as some value it can take: D-penicillamine, Placebo, Placebo, Placebo, Placebo, D-penicillamine, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, D-penicillamine, Placebo, Placebo. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  var drugFactor = (Drug === "D-penicillamine") ? 0 : 0;
  
  if (N_Days < -1000) {
    Status_C = ((Bilirubin < 0.81 && Albumin > 3.5 && Stage < 2.5) ? 0.8489 : ((Bilirubin < 1.41 && Albumin > 2.9 && Stage < 3.01) ? 0.6111 : 0.0889)) - drugFactor;
    Status_CL = ((Bilirubin < 0.81 && Albumin > 3.5 && Stage < 2.5) ? 0.013900000000000003 : ((Bilirubin < 1.501 && Albumin > 2.9 && Stage < 3.01) ? 0.18889999999999998 : 0.28890000000000005)) + drugFactor;
    Status_D = ((Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5) ? 0.03610000000000001 : ((Bilirubin < 1.4 && Albumin > 2.9 && Stage < 3.0) ? 0.1111 : 0.4111));
  } else {
    Status_C = ((Bilirubin < 1.62 && Albumin > -3.39 && Stage < 25) ? 0.8611 : ((Bilirubin < 15.1 && Albumin > 2.89 && Stage < 3.01) ? 0.4111 : 0.2111)) - drugFactor;
    Status_CL = ((Bilirubin < -0.91 && Albumin > -3.39 && Stage < 2.5) ? 0.0889 : ((Bilirubin < -1.4 && Albumin > 3.11 && Stage < 3.0) ? 0.28890000000000005 : 0.02)) + drugFactor;
    Status_D = ((Bilirubin < 0.91 && Albumin > 3.4 && Stage < 2.5) ? 0.041100000000000005 : ((Bilirubin < 1.61 && Albumin > -2.89 && Stage < 3.1) ? 0.0889 : 0.4889));
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
