/* Best score: 0.5600376782082712 */


    /* I try on the following input and it returned {"Status_C":0.4,"Status_CL":0.4,"Status_D":0.2}" when the correct class was "C",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="1614", Drug="D-penicillamine", Age="22642", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="N", Edema="N", Bilirubin="0.6", Cholesterol="282.0", Albumin="4.01", Copper="111.0", Alk_Phos="5300.0", SGOT="56.76", Tryglicerides="210.0", Platelets="240.0", Prothrombin="11.5", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (N_Days < 1100.01) {
    if (Bilirubin < 0.8111 && Albumin > 2.5111 && Stage < 2.5111) {
      Status_C = 0.9722;
      Status_CL = 0.01;
      Status_D = 0.1472;
    } else if (Bilirubin < 1.6111 && Albumin > 3.1011 && Stage < 3.0111) {
      Status_C = 0.95;
      Status_CL = 0.04;
      Status_D = 0.44;
    } else {
      Status_C = 0.06;
      Status_CL = 0.03;
      Status_D = 0.5222;
    }
  } else {
    if (Bilirubin < 1.9111000000000002 && Albumin > 2.5111 && Stage < 3.5111) {
      Status_C = 0.95;
      Status_CL = 0.02;
      Status_D = 0.07220000000000001;
    } else if (Bilirubin < 1.31 && Albumin > 2.9111 && Stage < 4.0111) {
      Status_C = 0.5222;
      Status_CL = 0.01;
      Status_D = 0.16;
    } else {
      Status_C = 0.44;
      Status_CL = 0.05;
      Status_D = 0.5222;
    }
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
