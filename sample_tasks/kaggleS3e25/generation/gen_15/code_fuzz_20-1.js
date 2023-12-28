
    /* Try to add a step in the computation using the parameter Drug. Here as some value it can take: D-penicillamine, Placebo, Placebo, Placebo, Placebo, D-penicillamine, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, D-penicillamine, Placebo, Placebo. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var drugEffect = (Drug === 'D-penicillamine') ? 0.12780000000000002 : 0.07780000000000001;

  if (N_Days < 1000.0889000000001) {
    Status_C = (Bilirubin < 1.9889000000000001 && Albumin > 2.4889 && Stage < 3.5889) ? (1.05 - drugEffect) : ((Bilirubin < 1.5889000000000002 && Albumin > 2.0889 && Stage < 3.0889) ? (0.7888999999999999 - drugEffect) : (0.27780000000000005 - drugEffect));
    Status_CL = (Bilirubin < -1.99 && Albumin > -2.49 && Stage < 3.5889) ? (0 + drugEffect) : ((Bilirubin < -2.69 && Albumin > 2.0889 && Stage < 4.088900000000001) ? (-0.03 + drugEffect) : (-0.04 + drugEffect));
    Status_D = (Bilirubin < 0.8889 && Albumin > 3.4889 && Stage < 2.5889) ? (0 + drugEffect) : ((Bilirubin < 1.6889000000000003 && Albumin > 3.9889000000000006 && Stage < 3.0889) ? (0.07780000000000001 + drugEffect) : (0.6 + drugEffect));
  } else {
    Status_C = (Bilirubin < 19.89 && Albumin > 2.4889 && Stage < 3.5889) ? (1.0499999999999998 - drugEffect) : ((Bilirubin < 2.6889000000000003 && Albumin > 2.1889000000000003 && Stage < 4.088900000000001) ? (0.6 - drugEffect) : (0.30000000000000004 - drugEffect));
    Status_CL = (Bilirubin < 1.99 && Albumin > -2.49 && Stage < 35.89) ? (-0.04 + drugEffect) : ((Bilirubin < 1.5889000000000002 && Albumin > 4.088900000000001 && Stage < 3.0889) ? (0.4889 + drugEffect) : (-0.03 + drugEffect));
    Status_D = (Bilirubin < 1.8889 && Albumin > 2.5889 && Stage < 3.5889) ? (0 + drugEffect) : ((Bilirubin < 1.4889000000000001 && Albumin > 2.1889000000000003 && Stage < 4.088900000000001) ? (0.20000000000000004 + drugEffect) : (0.6 + drugEffect));
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
