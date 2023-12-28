
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
N_Days="N_Days=\"3069\"", Drug="Drug=\"D-penicillamine\"", Age="Age=\"14191\"", Sex="Sex=\"F\"", Ascites="Ascites=\"N\"", Hepatomegaly="Hepatomegaly=\"N\"", Spiders="Spiders=\"N\"", Edema="Edema=\"N\"", Bilirubin="Bilirubin=\"0.5\"", Cholesterol="Cholesterol=\"223.0\"", Albumin="Albumin=\"3.97\"", Copper="Copper=\"30.0\"", Alk_Phos="Alk_Phos=\"661.0\"", SGOT="SGOT=\"57.0\"", Tryglicerides="Tryglicerides=\"105.0\"", Platelets="Platelets=\"340.0\"", Prothrombin="Prothrombin=\"10.7\"", Stage="Stage=\"1.0\"" */
    
    
function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var extraStep = (Copper * 0.2) + (Math.sqrt(N_Days) * 0.3);
    
    var Status_C = (Age + Bilirubin + Prothrombin + extraStep) / 400;
    var Status_CL = (Age + Albumin + Platelets + extraStep) / 400;
    var Status_D = (Age + Cholesterol + SGOT + extraStep) / 400;

    return {
        Status_C: Status_C,
        Status_CL: Status_CL,
        Status_D: Status_D
    };
}
