
    /* Try to add a step in the computation using the parameter Drug. Here as some value it can take: D-penicillamine, Placebo, Placebo, Placebo, Placebo, D-penicillamine, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, Placebo, D-penicillamine, D-penicillamine, Placebo, Placebo, D-penicillamine, Placebo, Placebo. */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1100.01) {
    Status_C = (Bilirubin < 1.9111000000000002 && Albumin > 2.5111 && Stage < 3.5111 && (Drug === 'D-penicillamine' || Drug === 'Placebo')) ? 0.8722 : ((Bilirubin < 1.5110999999999999 && Albumin > -3.01 && Stage < 30.11 && (Drug === 'D-penicillamine' || Drug === 'Placebo')) ? 0.06 : 0.05);
    Status_CL = (Bilirubin < 4.78 && Albumin > 2.4111 && Stage < 3.5111 && (Drug === 'D-penicillamine' || Drug === 'Placebo')) ? 0.07 : ((Bilirubin < -2.61 && Albumin > 2.0111 && Stage < 4.0111 && (Drug === 'D-penicillamine' || Drug === 'Placebo')) ? 0.02 : 0.03);
    Status_D = (Bilirubin < 0.8111 && Albumin > 3.4111 && Stage < 2.5111 && (Drug === 'D-penicillamine' || Drug === 'Placebo')) ? 0.12499999999999999 : ((Bilirubin < 16.11 && Albumin > 4.0011 && Stage < 3.0111 && (Drug === 'D-penicillamine' || Drug === 'Placebo')) ? 0.24 : 0.5222);
  } else {
    Status_C = (Bilirubin < 1.9111000000000002 && Albumin > 2.5111 && Stage < 3.5111 && (Drug === 'D-penicillamine' || Drug === 'Placebo')) ? 0.9722 : ((Bilirubin < 1.31 && Albumin > 2.1111 && Stage < 4.0111 && (Drug === 'D-penicillamine' || Drug === 'Placebo')) ? 0.5222 : 0.2222);
    Status_CL = (Bilirubin < 9.56 && Albumin > 2.5111 && Stage < 35.11 && (Drug === 'D-penicillamine' || Drug === 'Placebo')) ? 0.0202 : ((Bilirubin < 1.5110999999999999 && Albumin > 4.0111 && Stage < 3.0111 && (Drug === 'D-penicillamine' || Drug === 'Placebo')) ? 0.4111 : 0.01);
    Status_D = (Bilirubin < 0.9111000000000001 && Albumin > 2.5111 && Stage < 3.5111 && (Drug === 'D-penicillamine' || Drug === 'Placebo')) ? 0.07220000000000001 : ((Bilirubin < 14.11 && Albumin > 2.9111 && Stage < 4.0111 && (Drug === 'D-penicillamine' || Drug === 'Placebo')) ? 0.2022 : 0.5122);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
