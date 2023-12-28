
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
N_Days="837", Drug="Placebo", Age="20449", Sex="F", Ascites="N", Hepatomegaly="Y", Spiders="Y", Edema="N", Bilirubin="3.5", Cholesterol="236.0", Albumin="3.61", Copper="129.0", Alk_Phos="1136.0", SGOT="86.8", Tryglicerides="85.0", Platelets="225.0", Prothrombin="9.8", Stage="2.0" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  var AgeInt = parseInt(Age);
  var BilirubinFloat = parseFloat(Bilirubin);
  var Alk_PhosFloat = parseFloat(Alk_Phos);
  var SGOTFloat = parseFloat(SGOT);
  var AlbuminFloat = parseFloat(Albumin);
  var PlateletsFloat = parseFloat(Platelets);
  
  var novelCalculation = (AgeInt + BilirubinFloat) / (Alk_PhosFloat * SGOTFloat);

  var Status_C = 0.38;
  var Status_CL = 0.02;
  var Status_D = 0.2;
  // perform calculations and assign probabilities to Status_C, Status_CL, and Status_D using novelCalculation
  return {
    Status_C: Status_C,
    Status_CL: Status_CL,
    Status_D: Status_D
  };
}
