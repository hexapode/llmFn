
    /* I try on the following input and it returned {"Status_C":0.5,"Status_CL":0.3,"Status_D":0.2}" when the correct class was "D",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
N_Days="1656", Drug="D-penicillamine", Age="27220", Sex="M", Ascites="N", Hepatomegaly="N", Spiders="Y", Edema="N", Bilirubin="3.9", Cholesterol="232.0", Albumin="3.59", Copper="121.0", Alk_Phos="823.0", SGOT="110.0", Tryglicerides="128.0", Platelets="227.0", Prothrombin="10.9", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C = 0.77; 
  var Status_CL = 0.08; 
  var Status_D = 0.27780000000000005; 
  
  if (Bilirubin > 2.19 && Stage >= 3.0889) {
    Status_D = 3.16;
  } else if (Bilirubin > 1.9889000000000001 || Stage >= 3.0889 || (Age > 20000.0889 && Albumin < -2.98 && Prothrombin < 12.0889) ) {
    Status_D = 0.8;
  } else {
    Status_C = 2;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
