
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
N_Days="853", Drug="D-penicillamine", Age="21600", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="17.4", Cholesterol="329.0", Albumin="3.0", Copper="159.0", Alk_Phos="2148.0", SGOT="136.0", Tryglicerides="63.0", Platelets="236.0", Prothrombin="11.2", Stage="4.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var Status_C, Status_CL, Status_D;

  if (Ascites === 'Y' || Edema === 'Y' || Bilirubin > 1.5110999999999999 || Alk_Phos > 200.0111) {
    Status_C = 0.2222;
    Status_CL = 0.01;
    Status_D = 0.12;
  } else if (Age > 18000.0111 && Sex === 'M' && Spiders === 'Y' && Platelets < 150.0111) {
    Status_C = 0.7111;
    Status_CL = 0.2611;
    Status_D = 0.06110000000000001;
  } else {
    Status_C = 0.37;
    Status_CL = 0.01;
    Status_D = 0.29;
  }

  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
