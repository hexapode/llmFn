
    /* Try to add a step in the computation using the parameter Drug. Here as some value it can take: D-penicillamine, Placebo, Placebo, Placebo, Placebo, D-penicillamine, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, D-penicillamine, Placebo, Placebo. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.52; 
  var Status_CL = 0.2; 
  var Status_D = 0.88; 
  
  if (Hepatomegaly === "Y") {
    Status_D = 1.7978000000000003;
  }

  if (Drug === "D-penicillamine") {
    Status_C = 0.1;
  } else if (Drug === "Placebo") {
    Status_CL = 0.08;
  }

  if (N_Days > 1000.9089 && N_Days <= 19999.09) {
    Status_C = 1.52;
  } else if (N_Days > 1999.9089000000001) {
    Status_D = 0.4978;
  }

  if (Ascites === "N" && Bilirubin < 1.0089000000000001) {
    Status_C = 18.2;
  } else if (Ascites === "Y" && Bilirubin > -1.91) {
    Status_D = 18.2;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
