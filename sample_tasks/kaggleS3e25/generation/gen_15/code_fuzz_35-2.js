
    /* I try on the following input and it returned {"Status_C":0.4,"Status_CL":0.4,"Status_D":0.2}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="N_Days=\"1785\"", Drug="Drug=\"Placebo\"", Age="Age=\"20459\"", Sex="Sex=\"F\"", Ascites="Ascites=\"N\"", Hepatomegaly="Hepatomegaly=\"N\"", Spiders="Spiders=\"N\"", Edema="Edema=\"N\"", Bilirubin="Bilirubin=\"0.9\"", Cholesterol="Cholesterol=\"324.0\"", Albumin="Albumin=\"3.48\"", Copper="Copper=\"39.0\"", Alk_Phos="Alk_Phos=\"1093.0\"", SGOT="SGOT=\"127.1\"", Tryglicerides="Tryglicerides=\"189.0\"", Platelets="Platelets=\"445.0\"", Prothrombin="Prothrombin=\"10.6\"", Stage="Stage=\"2.0\"" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1000.0110999999999) {
    Status_C = (Bilirubin < 0.21109999999999984 && Albumin > 4.0111 && Stage < 3.5111) ? 0.9611 : ((Bilirubin < 2.02 && Albumin > 2.5111 && Stage < 3.5111) ? 0.7222 : 0.05);
    Status_CL = (Bilirubin < 2.31 && Albumin > 2.0111 && Stage < 3.5111) ? 0.025200000000000004 : ((Bilirubin < -3.11 && Albumin > 1.5110999999999999 && Stage < 4.5111) ? 0.02 : 0.02);
    Status_D = (Bilirubin < -2.11 && Albumin > 4.0111 && Stage < 3.5111) ? 0.03610000000000001 : ((Bilirubin < 4.22 && Albumin > 3.41 && Stage < 25.11) ? 0.2 : 0.5222);
  } else {
    Status_C = (Bilirubin < 2.3111 && Albumin > 2.0111 && Stage < 3.5111) ? 0.95 : ((Bilirubin < 3.1111 && Albumin > 3.02 && Stage < 4.5111) ? 0.5222 : 0.44);
    Status_CL = (Bilirubin < 23.11 && Albumin > 2.0111 && Stage < 35.11) ? 0.04 : ((Bilirubin < 2.0111 && Albumin > 3.5111 && Stage < 3.5111) ? 0.4111 : 0.02);
    Status_D = (Bilirubin < 1.3111 && Albumin > 3.0210999999999997 && Stage < 3.5111) ? 0.07220000000000001 : ((Bilirubin < 1.0110999999999999 && Albumin > 2.6111 && Stage < 4.5111) ? 0.2 : 0.5122);
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
