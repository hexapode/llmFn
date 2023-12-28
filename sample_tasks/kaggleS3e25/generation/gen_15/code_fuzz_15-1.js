
    /* Try to add a step in the computation using the parameter Drug. Here as some value it can take: D-penicillamine, Placebo, Placebo, Placebo, Placebo, D-penicillamine, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, D-penicillamine, Placebo, Placebo. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  // Add a step in the computation using the parameter Drug
  var drugFactor = 0;
  if (Drug === "D-penicillamine") {
    drugFactor = 0.2;
  } else if (Drug === "Placebo") {
    drugFactor = 0.1;
  }

  if (N_Days < 1000) {
    if (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5) {
      Status_C = 0.95 - drugFactor;
      Status_CL = 0.025 + drugFactor;
      Status_D = 0.025;
    } else if (Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) {
      Status_C = 0.6 - drugFactor;
      Status_CL = 0.3 + drugFactor;
      Status_D = 0.1;
    } else {
      Status_C = 0.2 - drugFactor;
      Status_CL = 0.4 + drugFactor;
      Status_D = 0.4;
    }
  } else {
    if (Bilirubin < 0.8 && Albumin > 3.5 && Stage < 2.5) {
      Status_C = 0.85 - drugFactor;
      Status_CL = 0.1 + drugFactor;
      Status_D = 0.05;
    } else if (Bilirubin < 1.5 && Albumin > 3.0 && Stage < 3.0) {
      Status_C = 0.4 - drugFactor;
      Status_CL = 0.4 + drugFactor;
      Status_D = 0.2;
    } else {
      Status_C = 0.1 - drugFactor;
      Status_CL = 0.3 + drugFactor;
      Status_D = 0.6;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
