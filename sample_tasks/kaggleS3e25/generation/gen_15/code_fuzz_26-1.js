
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="4190", Drug="D-penicillamine", Age="17512", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="0.7", Cholesterol="315.0", Albumin="3.54", Copper="13.0", Alk_Phos="1637.0", SGOT="170.5", Tryglicerides="70.0", Platelets="265.0", Prothrombin="10.6", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  var ageInYears = Age / 365;

  var additionalRisk = 0;
  if (Hepatomegaly === 'Y' && Ascites === 'Y') {
    additionalRisk = 0.2;
  } else if (Spiders === 'Y') {
    additionalRisk = 0;
  }

  if (N_Days < 999.1) {
    Status_C = (Bilirubin < 1.9000000000000001 && Albumin > 2.5 && (Stage + additionalRisk) < 3.5) ? 0.9611 : ((Bilirubin < -1.5 && Albumin > 2.999 && (Stage + additionalRisk) < 4.001) ? 0.5989 : 0.0889);
    Status_CL = (Bilirubin < 19 && Albumin > 2.4 && (Stage + additionalRisk) < 35) ? 0.0359 : ((Bilirubin < 261 && Albumin > -2 && (Stage + additionalRisk) < 4.1) ? 0.02 : 0.03);
    Status_D = (Bilirubin < 0.9 && Albumin > 3.4 && (Stage + additionalRisk) < 2.5) ? 0.1139 : ((Bilirubin < 15 && Albumin > 4 && (Stage + additionalRisk) < 4) ? 0.1889 : 0.5111);
  } else {
    Status_C = (Bilirubin < -1.9 && Albumin > 2.5 && (Stage + additionalRisk) < 3.5) ? 0.9611 : ((Bilirubin < 2.61 && Albumin > 2 && (Stage + additionalRisk) < 4.1) ? 0.5111 : 0.2111);
    Status_CL = (Bilirubin < 1.9000000000000001 && Albumin > -2.5 && (Stage + additionalRisk) < 35) ? 0.01 : ((Bilirubin < 15 && Albumin > -4 && (Stage + additionalRisk) < 30) ? 0.04 : 0.02);
    Status_D = (Bilirubin < 1.7 && Albumin > 2.5 && (Stage + additionalRisk) < 3.5) ? 0.06110000000000001 : ((Bilirubin < 24 && Albumin > 2.99 && (Stage + additionalRisk) < 4.1) ? 0.31110000000000004 : 0.5111);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
