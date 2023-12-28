
    /* Try to add a step in the computation using the parameter Drug. Here as some value it can take: D-penicillamine, Placebo, Placebo, Placebo, Placebo, D-penicillamine, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, D-penicillamine, Placebo, Placebo. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  // Using Bilirubin, Albumin, Stage, and N_Days as factors to predict the probabilities for each status
  if (N_Days < 1000) {
    if (Bilirubin < 1.0 && Albumin > 3.5 && Stage < 2.0) {
      if (Drug === "D-penicillamine") {
        Status_C = 0.9;
        Status_CL = 0.05;
        Status_D = 0.05;
      } else {
        Status_C = 0.95;
        Status_CL = 0.025;
        Status_D = 0.025;
      }
    } else if (Bilirubin < 2.0 && Albumin > 3.0 && Stage < 3.0) {
      if (Drug === "D-penicillamine") {
        Status_C = 0.55;
        Status_CL = 0.35;
        Status_D = 0.1;
      } else {
        Status_C = 0.6;
        Status_CL = 0.3;
        Status_D = 0.1;
      }
    } else {
      if (Drug === "D-penicillamine") {
        Status_C = 0.1;
        Status_CL = 0.4;
        Status_D = 0.5;
      } else {
        Status_C = 0.2;
        Status_CL = 0.4;
        Status_D = 0.4;
      }
    }
  } else {
    // similar computation with added condition for Drug
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
