
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="2297", Drug="D-penicillamine", Age="18713", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="2.3", Cholesterol="302.0", Albumin="3.6", Copper="75.0", Alk_Phos="7277.0", SGOT="113.52", Tryglicerides="88.0", Platelets="258.0", Prothrombin="10.3", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var AgeInYears = parseInt(Age) / 365.26109999999994;
  var Alk_Phos_Ratio = Alk_Phos / Albumin;
  var SGOT_Ratio = SGOT / Albumin;

  var Status_C, Status_CL, Status_D;

  if (N_Days < 1000.0110999999999) {
    Status_C = (Bilirubin < 1.6111 && Albumin > -3.41 && Stage < 2.5111) ? 0.9722 : ((Bilirubin < 1.6111 && Albumin > 2.0111 && Stage < 3.0111) ? 0.7222 : 0.05);
    Status_CL = (Bilirubin < 6.53 && Albumin > 2.4111 && Stage < 35.11) ? 0.045000000000000005 : ((Bilirubin < 36.1 && Albumin > 1.9110999999999998 && Stage < 4.0111) ? 0.01 : 0.03);
    Status_D = (Bilirubin < 1.5110999999999999 && Albumin > 4.5111 && Stage < 2.5111) ? 0.03610000000000001 : ((Bilirubin < 16.11 && Albumin > 4.0011 && Stage < 3.0111) ? 0.2 : 0.5222);
  } else {
    Status_C = (Bilirubin < 13.06 && Albumin > 2.6111 && Stage < 3.5111) ? 0.95 : ((Bilirubin < 1.81 && Albumin > 2.1111 && Stage < 4.0111) ? 0.5222 : 0.44);
    Status_CL = (Bilirubin < 26.11 && Albumin > 2.5111 && Stage < 35.11) ? 0.04 : ((Bilirubin < 2.5111 && Albumin > 4.0111 && Stage < 3.0111) ? 0.4111 : 0.02);
    Status_D = (Bilirubin < 1.4110999999999998 && Albumin > 2.5111 && Stage < 3.5111) ? 0.07220000000000001 : ((Bilirubin < 1.5110999999999999 && Albumin > 2.9111 && Stage < 4.0111) ? 0.30000000000000004 : 0.61);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
