/** // -Infinity //**/
/**
Try to think how Surname parameter could impact the prediction, then add a step in the computation using the parameter Surname. Here as some value it can take: Okwudilichukwu, Okwudiliolisa, Hsueh, Kao, Chiemenam, Genovese, Ch'ang, Chukwuebuka, Manna, Cattaneo, Fokine, Chiu, Rossi, Ts'ai, Chukwuemeka, Tung, Macdonald, Esquivel, Hargreaves, Ts'ui.
**/

// ... (previous code)

const surnameWeight = 
  (Surname === 'Okwudilichukwu') ? 0.25 :
  (Surname === 'Okwudiliolisa') ? 0.30 :
  (Surname === 'Hsueh') ? 0.10 :
  (Surname === 'Kao') ? 0.15 :
  (Surname === 'Chiemenam') ? 0.20 :
  (Surname === 'Genovese') ? 0.35 :
  (Surname === "Ch'ang") ? 0.11 :
  (Surname === 'Chukwuebuka') ? 0.22 :
  (Surname === 'Manna') ? 0.18 :
  (Surname === 'Cattaneo') ? 0.26 :
  (Surname === 'Fokine') ? 0.28:
  (Surname === 'Chiu') ? 0.12 :
  (Surname === 'Rossi') ? 0.32:
  (Surname === "Ts'ai") ? 0.14 :
  (Surname === "Chukwuemeka") ? 0.21 :
  (Surname === "Tung") ? 0.17:
  (Surname === "Macdonald") ? 0.16 :
  (Surname === "Esquivel") ? 0.29 :
  (Surname === "Hargreaves") ? 0.24:
  (Surname === "Ts'ui") ? 0.13 : 0.00;

let weightedSum = // ... (previous calculation) + surnameWeight;

// ... (return statement)
