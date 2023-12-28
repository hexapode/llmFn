
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="1785", Drug="Placebo", Age="20459", Sex="F", Ascites="N", Hepatomegaly="N", Spiders="N", Edema="N", Bilirubin="0.9", Cholesterol="324.0", Albumin="3.48", Copper="39.0", Alk_Phos="1093.0", SGOT="127.1", Tryglicerides="189.0", Platelets="445.0", Prothrombin="10.6", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var AgeNum = parseInt(Age);
  var CholesterolNum = parseFloat(Cholesterol);
  var AlbuminNum = parseFloat(Albumin);
  var StageNum = parseFloat(Stage);

  if (N_Days < 1000.0110999999999) {
    Status_C = (Bilirubin < 2.02 && Albumin > 2.0111 && Stage < 2.5111) ? 0.9222 : ((Bilirubin < 1.6111 && Albumin > 2.5111 && Stage < 3.5111) ? 0.31 : 0.05);
    Status_CL = (Bilirubin < -2.01 && Albumin > 2.0111 && Stage < 3.5111) ? 0.05 : ((Bilirubin < 2.61 && Albumin > 1.5110999999999999 && Stage < 4.5111) ? 0.02 : 0.03);
    Status_D = (Bilirubin < 101.1 && Albumin > 4.0011 && Stage < 3.5111) ? 0.15000000000000002 : ((Bilirubin < 3.02 && Albumin > -3.41 && Stage < 25.11) ? 0.2222 : 0.5222);
  } else {
    Status_C = (Bilirubin < 1.06 && Albumin > 2.0111 && Stage < 35.11) ? 0.9222 : ((Bilirubin < 1.31 && Albumin > 3.02 && Stage < 4.5111) ? 0.5222 : 0.2222);
    Status_CL = (Bilirubin < 21.11 && Albumin > 2.0111 && Stage < 35.11) ? 0.0211 : ((Bilirubin < 1.5110999999999999 && Albumin > 3.5111 && Stage < 3.5111) ? 0.4111 : 0.02);
    Status_D = (Bilirubin < 11.11 && Albumin > 2.9111 && Stage < 3.5111) ? 0.1 : ((Bilirubin < 1.5110999999999999 && Albumin > 2.6111 && Stage < 4.5111) ? 0.22220000000000004 : 0.5122);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
