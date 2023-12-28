
    /* Try to add a step in the computation using the parameter Drug. Here as some value it can take: D-penicillamine, Placebo, Placebo, Placebo, Placebo, D-penicillamine, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, D-penicillamine, Placebo, Placebo. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  var drugFactor = 0;
  if (Drug === "D-penicillamine") {
    drugFactor = 0;
  }
  
  if (N_Days < 1000) {
    Status_C = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 25) ? (0.95 - drugFactor) : ((Bilirubin < 1.5 && Albumin > -3 && Stage < 3.0) ? (0.6 - drugFactor) : (0.2 - drugFactor));
    Status_CL = (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 25) ? (0.025 + drugFactor) : ((Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) ? (0.03 + drugFactor) : (0.04 + drugFactor));
    Status_D = 1 - Status_C - Status_CL;
  } else {
    Status_C = (Bilirubin < 8 && Albumin > -3.5 && Stage < 25) ? (0.85 - drugFactor) : ((Bilirubin < 1.5 && Albumin > -3 && Stage < 3.0) ? (0.4 - drugFactor) : (0.1 - drugFactor));
    Status_CL = (Bilirubin < -0.8 && Albumin > -3.5 && Stage < 2.5) ? (0.1 + drugFactor) : ((Bilirubin < -1.5 && Albumin > 3.0 && Stage < 3.0) ? (0.4 + drugFactor) : (0.03 + drugFactor));
    Status_D = 1 - Status_C - Status_CL;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
