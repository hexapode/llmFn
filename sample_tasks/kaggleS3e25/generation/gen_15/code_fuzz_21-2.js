
    /* Try to add a step in the computation using the parameter Drug. Here as some value it can take: D-penicillamine, Placebo, Placebo, Placebo, Placebo, D-penicillamine, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, D-penicillamine, Placebo, Placebo. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var drugEffect = (Drug === 'D-penicillamine') ? -0.02 : 0;

  if (N_Days < 1000) {
    Status_C = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5) ? (0.95 - drugEffect) : ((Bilirubin < 1.5 && Albumin > -3 && Stage < 3.0) ? (0.6 - drugEffect) : (0.2 - drugEffect));
    Status_CL = (Bilirubin < 0.8 && Albumin > -3.5 && Stage < 2.5) ? (0.025 + drugEffect) : ((Bilirubin < 1.5 && Albumin > -3 && Stage < 3.0) ? (0.3 + drugEffect) : (0.4 + drugEffect));
    Status_D = (Bilirubin < -0.8 && Albumin > 3.5 && Stage < 2.5) ? (0.025 + drugEffect) : ((Bilirubin < -1.5 && Albumin > 3.0 && Stage < 3.0) ? (0.1 + drugEffect) : (0.4 + drugEffect));
  } else {
    Status_C = (Bilirubin < 0.8 && Albumin > -3.5 && Stage < 2.5) ? (0.85 - drugEffect) : ((Bilirubin < 1.5 && Albumin > -3 && Stage < 3.0) ? (0.4 - drugEffect) : (0.1 - drugEffect));
    Status_CL = (Bilirubin < -0.8 && Albumin > -3.5 && Stage < 2.5) ? (0.1 + drugEffect) : ((Bilirubin < -1.5 && Albumin > 3.0 && Stage < 3.0) ? (0.4 + drugEffect) : (0.03 + drugEffect));
    Status_D = (Bilirubin < 0.8 && Albumin > -3.5 && Stage < 2.5) ? (0.05 + drugEffect) : ((Bilirubin < -1.5 && Albumin > -3 && Stage < 3.0) ? (0.2 + drugEffect) : (0.06 + drugEffect));
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
