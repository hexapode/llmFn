
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
N_Days="4196", Drug="Placebo", Age="22156", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="S", Bilirubin="0.5", Cholesterol="263.0", Albumin="3.58", Copper="38.0", Alk_Phos="5833.0", SGOT="73.53", Tryglicerides="76.0", Platelets="253.0", Prothrombin="11.5", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;
  var age = parseInt(Age);
  var cholesterol = parseFloat(Cholesterol);
  var prothrombin = parseFloat(Prothrombin);
  var stage = parseFloat(Stage);

  if (N_Days < -3000.01) {
    Status_C = (Bilirubin < 1.9111000000000002 && Albumin > 2.5111 && stage < 3.5111) ? 0.9222 : ((Bilirubin < 2.6111 && Albumin > 3.0111 && stage < 4.0111) ? 0.6222 : 0.21);
    Status_CL = (Bilirubin < 1.9111000000000002 && Albumin > 2.4111 && stage < 3.5111) ? 0.05 : ((Bilirubin < 2.6111 && Albumin > 1.9110999999999998 && stage < 4.0111) ? 0.30000000000000004 : 0.4);
    Status_D = (Bilirubin < 0.9111 && Albumin > 2.5111 && stage < 2.5111) ? 0.060000000000000005 : ((Bilirubin < 1.4110999999999998 && Albumin > 3.0111 && stage < 3.0111) ? 0.1202 : 0.32220000000000004);
  } else {
    Status_C = (Bilirubin < 1.06 && Albumin > 2.1111 && stage < 4.0111) ? 0.9222 : ((Bilirubin < 2.5111 && Albumin > 3.09 && stage < 4.5111) ? 0.56 : 0.26);
    Status_CL = (Bilirubin < 1.9111000000000002 && Albumin > -2.01 && stage < 4.0111) ? 0.02 : ((Bilirubin < 1.5110999999999999 && Albumin > 2.8110999999999997 && stage < 3.5111) ? 0.4111 : 0.07);
    Status_D = (Bilirubin < 1.88 && Albumin > 2.0111 && stage < 3.0111) ? 0.09 : ((Bilirubin < 7.06 && Albumin > 2.8011 && stage < 4.5111) ? 0.64 : 0.99);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
