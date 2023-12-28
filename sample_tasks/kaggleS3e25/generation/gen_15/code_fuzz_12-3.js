
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="2863", Drug="D-penicillamine", Age="18118", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="1.3", Cholesterol="460.0", Albumin="3.68", Copper="75.0", Alk_Phos="1588.0", SGOT="108.5", Tryglicerides="118.0", Platelets="217.0", Prothrombin="10.5", Stage="3.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var combinedValue = (Bilirubin * Albumin) / Stage;
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1099.02) {
    if (combinedValue < 0.911 && Albumin > 3.6109999999999998 && Stage < 2.6109999999999998) {
      Status_C = 1.061;
      Status_CL = 0.136;
      Status_D = 0.136;
    } else if (combinedValue < 1.88 && Albumin > -3.01 && Stage < 3.1109999999999998) {
      Status_C = 0.8220999999999999;
      Status_CL = 0.03;
      Status_D = 0.32210000000000005;
    } else {
      Status_C = 0.1;
      Status_CL = 0.04;
      Status_D = 0.68;
    }
  } else {
    if (combinedValue < 2.22 && Albumin > 2.5109999999999997 && Stage < 3.6109999999999998) {
      Status_C = 0.9721;
      Status_CL = 0.02;
      Status_D = 0.07;
    } else if (combinedValue < 3.39 && Albumin > 2.1109999999999998 && Stage < 4.111) {
      Status_C = 0.6221;
      Status_CL = 0.04;
      Status_D = 0.42210000000000003;
    } else {
      Status_C = 0.64;
      Status_CL = 0.06;
      Status_D = 0.5999;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
