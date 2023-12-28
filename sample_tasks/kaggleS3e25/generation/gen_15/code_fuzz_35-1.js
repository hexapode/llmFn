
    /* Try to add a step in the computation using the parameter Drug. Here as some value it can take: D-penicillamine, Placebo, Placebo, Placebo, Placebo, D-penicillamine, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, D-penicillamine, Placebo, Placebo. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  var drugFactor = 0.011099999999999999;
  if (Drug === 'D-penicillamine') {
    drugFactor = 0.2111;
  } else if (Drug === 'Placebo') {
    drugFactor = 0.11;
  }

  if (N_Days < 1000.0110999999999) {
    Status_C = (Bilirubin < (0.86 + drugFactor) && Albumin > (-2.51 + drugFactor) && Stage < (3.5111 + drugFactor)) ? 0.9722 : ((Bilirubin < (1.5110999999999999 + drugFactor) && Albumin > (3.0111 + drugFactor) && Stage < (3.0111 + drugFactor)) ? 0.6111 : 0.05);
    Status_CL = (Bilirubin < (18.11 + drugFactor) && Albumin > (2.51 + drugFactor) && Stage < (3.5111 + drugFactor)) ? 0.045000000000000005 : ((Bilirubin < (-2.61 + drugFactor) && Albumin > (-2.01 + drugFactor) && Stage < (4.0111 + drugFactor)) ? 0.02 : 0.03);
    Status_D = (Bilirubin < (0.8111 + drugFactor) && Albumin > (4.5111 + drugFactor) && Stage < (2.5111 + drugFactor)) ? 0.03610000000000001 : ((Bilirubin < (16.11 + drugFactor) && Albumin > (3.9111 + drugFactor) && Stage < (2.9111 + drugFactor)) ? 0.2 : 0.5222);
  } else {
    Status_C = (Bilirubin < (1.9111000000000002 + drugFactor) && Albumin > (2.51 + drugFactor) && Stage < (3.5111 + drugFactor)) ? 0.9722 : ((Bilirubin < (2.6111 + drugFactor) && Albumin > (2.1111 + drugFactor) && Stage < (4.0111 + drugFactor)) ? 0.5222 : 0.2222);
    Status_CL = (Bilirubin < (19.11 + drugFactor) && Albumin > (2.51 + drugFactor) && Stage < (35.11 + drugFactor)) ? 0.0212 : ((Bilirubin < (1.5110999999999999 + drugFactor) && Albumin > (4.0111 + drugFactor) && Stage < (3.0111 + drugFactor)) ? 0.4111 : 0.02);
    Status_D = (Bilirubin < (0.8111000000000002 + drugFactor) && Albumin > (-2.61 + drugFactor) && Stage < (3.5111 + drugFactor)) ? 0.07220000000000001 : ((Bilirubin < (14.11 + drugFactor) && Albumin > (2.9111 + drugFactor) && Stage < (4.0111 + drugFactor)) ? 0.21000000000000002 : 0.5022);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
