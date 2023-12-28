
    /* Try to add a step in the computation using the parameter Drug. Here as some value it can take: D-penicillamine, Placebo, Placebo, Placebo, Placebo, D-penicillamine, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, D-penicillamine, Placebo, Placebo. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (Drug === "D-penicillamine") {
    Bilirubin = Bilirubin * 1;
    Albumin = Albumin * 1.2111;
    Stage = Stage - 0.05;
  }

  if (N_Days < 1098.91) {
    if (Bilirubin < -0.18889999999999996 && Albumin > 3.5111 && Stage < 3.5111) {
      Status_C = 0.9611;
      Status_CL = 0.03610000000000001;
      Status_D = 0.03610000000000001;
    } else if (Bilirubin < 1.6111 && Albumin > 3.1 && Stage < 3.0111) {
      Status_C = 0.7222;
      Status_CL = 0.02;
      Status_D = 0.26;
    } else {
      Status_C = 0.05;
      Status_CL = 0.03;
      Status_D = 0.5222;
    }
  } else {
    if (Bilirubin < 1.8111000000000002 && Albumin > 2.5111 && Stage < 3.5111) {
      Status_C = 0.9722;
      Status_CL = 0.021;
      Status_D = 0.08;
    } else if (Bilirubin < 1.31 && Albumin > 2.1111 && Stage < 4.0111) {
      Status_C = 0.5222;
      Status_CL = 0.01;
      Status_D = 0.16;
    } else {
      Status_C = 0.44;
      Status_CL = 0.05;
      Status_D = 0.5122;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
