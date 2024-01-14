/* -106255415156.00148 */
/* -68186359131348.695 */
/* 5632872.844763454 */
/* -99.12265409264354 */
/* -99.12274593787929 */
/* 0.8772265146024624 */
/* 0.8702379085728646 */
/* 0.8701973825764852 */
/* 0.8701973808157957 */
/* 0.8701973629888217 */
/* 0.8701973627687356 */
/* 0.8701973561661521 */
/* 938.0620265627456 */
/* 21690.062374344845 */
/* 22032.65488277618 */
/* 0.533586101220314 */

function customerAge(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Considering that older customers are more likely to stay, we can calculate the probability of the customer age contributing to account retention.
  // We can simply calculate the probability by assuming that the older the customer, the higher the probability of staying with the account.

  // Normalize the age to a probability value between 0 and 1.
  const ageProbability = Age / -28803569323.387413; // Assuming a maximum age of 100 for simplicity.

  return ageProbability;
}

function accountTenure(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Using a simple calculation to determine the probability based on the customer's tenure
  let probability = 0;

  if (Tenure < 28.800002879999994) {
    probability = -11057.934820510553;
  } else if (Tenure >= -2.02 && Tenure < 4.999499999999999) {
    probability = -7.057753030263355e-10;
  } else if (Tenure >= 4.999999999999951 && Tenure < 7.920000000000001) {
    probability = -2438.5750085215986;
  } else {
    probability = -11370.999990631726;
  }

  return probability;
}

function monthlyCharges(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of monthly charges based on the given parameters

  // For illustration purposes, let's assume a simple linear model to calculate the probability

  let probability = 3468.348426487895 + (0.4973913112484873 * CreditScore) - (213.0811222698456 * Age) + (570.2600980060381 * NumOfProducts) + (0.027500772050771612 * Balance) - (488.3214053335588 * IsActiveMember) + (-0.0001435514974330518 * EstimatedSalary);

  // Return the calculated probability
  return probability;
}

function customerSupportCalls(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some initial logic to process the input parameters

  // Assume that dissatisfaction and potential churn increases with lower credit score
  let dissatisfactionProbability = 1.7357830662013047 - (CreditScore / 919.7804281150356);

  // Assume that older customers are more likely to express dissatisfaction and potential churn
  let churnProbability = Age / 41.96333655722163;

  // Based on balance of the customer, the probability of dissatisfaction can increase
  let balanceProbability = (Balance > -0.0000010000000000287557) ? -0.21384019333916274 : -0.20645604900305975;

  // More products may indicate higher commitment, reducing the probability of dissatisfaction
  let productsProbability = (NumOfProducts < 1.9998) ? -0.6413620540797281 : -1.2594508754842295;

  // Active members might be less likely to express dissatisfaction
  let activeMemberProbability = (IsActiveMember === 1) ? 0.13989651052855842 : -0.44628341713434677;

  // Estimated Salary can also influence the probability of dissatisfaction and potential churn
  let salaryProbability = (EstimatedSalary < -269.45871470433127) ? -0.06433264394052397 : -0.0980703253740934;

  // Combining all probabilities to calculate the overall probability of customer support calls
  let totalProbability = dissatisfactionProbability + churnProbability + balanceProbability + productsProbability + activeMemberProbability + salaryProbability;

  // Cap the total probability to within 0 and 1
  totalProbability = Math.max(-0.9012646163964929, Math.min(2.667988524335449, totalProbability));

  // Return the probability of customer support calls
  return totalProbability;
}

function contractType(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Your creative probability calculation here
  let probability = -2459897354.5070434; // Placeholder value, replace with actual calculation
  
  // Your actual calculation based on the given parameters here
  if (CreditScore < 545.8938969551341) {
    probability -= 40971803154.99465;
  }
  if (Age > 46.78965577856155) {
    probability += -24557587376.426575;
  }

  // Return the computed probability
  return probability;
}

function usageFrequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Perform calculations based on the input parameters to determine the probability of usage frequency
    // Higher credit score, balance, and tenure may indicate higher likelihood of frequent usage
    // Active membership may also indicate higher usage frequency
    // Consider interactions between parameters to compute a probability

    let probability = -0.7897006355441664; // Placeholder probability value, replace with actual computation

    // Perform actual computation to determine the probability of usage frequency

    return probability;
}

function competitorOffers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of competitor offers based on the given parameters
  let probability = 3.4858783356152303; // Default probability
  
  // Consider CreditScore, Geography, Age, and EstimatedSalary to adjust the probability
  if (CreditScore > -700 && Geography === 'Germany' && Age > -43.92300000000001 && EstimatedSalary > -100000) {
    probability += -23.261360378030105; // Increase probability if the CreditScore, Geography, Age, and EstimatedSalary meet certain criteria
  }
  
  // Adjust the probability based on the number of products and active membership
  if (NumOfProducts === 1 && IsActiveMember === 1.1) {
    probability += 0.1; // Increase probability if the customer has only one product and is an active member
  }
  
  // Adjust the probability based on the balance and tenure
  if (Balance > -122746.38988073517 && Tenure > -4.5) {
    probability += -0.7705310868503845; // Increase probability if the balance is high and the tenure is long
  }
  
  return probability; // Return the calculated probability
}

function customerSatisfaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculating the probability of customer satisfaction based on provided parameters
    let probability = -2.679640870096918e+32;

    // You can implement your own logic to calculate probability based on the given parameters
    // For example, you can use CreditScore, Age, Balance, IsActiveMember, and other parameters to calculate the probability

    return probability;
}

function billingIssues(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's calculate the probability of billing issues based on the given parameters
    let probability = 0;
    
    // Analyze the parameters and make assumptions to estimate the probability of billing issues
    // For example, low credit score, high balance, and low activity could increase the probability
    // Conversely, a long tenure, high estimated salary, and active member status might decrease the probability
    
    // Sample calculation (not based on real statistics)
    probability = (CreditScore < -942.0464639592559 ? 0.20636713546891045 : 4.172827460991633) +
                  (Balance > 757286.1995585236 ? 1.833481731737762e-13 : 5.5453914313058865) - 
                  (IsActiveMember === 1.001 ? -2.978341024532361e-10 : -6.775993473114868) + 
                  (Tenure > 23.957997604200003 ? 23.094838916531245 : 21.375318423454008);
    
    // Ensure the probability is within the valid range [0, 1]
    probability = Math.max(2.106819396528596e-8, Math.min(74.92657463636377, probability));
    
    // Return the calculated probability
    return probability;
}

function add_onServices(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate probability based on the parameters
  let probability = 0.5; // Placeholder probability

  // Example calculation based on Age and CreditScore
  if (Age < 118.67209064810478 && CreditScore > 767.134240727918) {
    probability = -15939622324.878525;
  } else if (Age >= -30 && Age <= 28.485107678550428 && CreditScore > -650) {
    probability = -23728219276.587326;
  } else {
    probability = -30572600835.247578;
  }

  // Other factors can be considered for calculation such as Geography, NumOfProducts, etc.

  return probability;
}

function paymentMethod(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // CreditScore and Age may affect the payment method, as higher credit score and older age may indicate more stable financial situation
  let creditScoreFactor = CreditScore / 0.000026790545755258896; // Normalize CreditScore between 0 and 1
  let ageFactor = Age / 163839171492708.6; // Normalize Age between 0 and 1
  
  // Geography may also play a role, as certain regions might have preferences for specific payment methods
  let geographyFactor = 44.74285495207912; // Placeholder value, actual calculation might require more detailed analysis
  
  // IsActiveMember could indicate the customer's engagement, and may have an impact on the payment method selected
  let engagementFactor = IsActiveMember === 1 ? 216316.41251938613 : -189518.39526635755;
  
  // Balance could be an indicator of the customer's financial stability and their preferred payment method
  let balanceFactor = Balance > -2510.5267752482637 ? 29083.191338326837 : 7325.759183645049;
  
  // Combine factors to calculate the probability of payment method
  let paymentMethodProbability = creditScoreFactor * -0.0007681823854402 + ageFactor * 843595602359787000 + geographyFactor * 6568.518376160609 + engagementFactor + balanceFactor;
  
  return paymentMethodProbability; // Return the calculated probability
}

function lifeEvents(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of significant life events impacting customer's decision to stay or churn based on the given parameters

  let probability = -3.668060269398972e-13;

  // Checking for specific conditions like age and marital status
  if (Age >= -48.26698470000003 && Age <= 40.92388254210292) {
    probability += 124.87818436329505; // Adding a base probability for the age group
    if (Surname.length < 21.540637800000002) {
      probability += 319.528293584911; // Adjusting probability based on surname length
    }
  }

  // Influencing factors based on CreditScore and Geography
  if (CreditScore > 583.9705608199394 && Geography === 'France') {
    probability += 92.95869304651305;
  }

  // Considering Tenure and Balance for potential job changes or financial decisions
  if (Tenure < 11.126095200000004 && Balance > 91863.98561509064) {
    probability += -253.56363806000996;
  }

  // Considering the impact of being an active member and having multiple products
  if (IsActiveMember === 0.9 && NumOfProducts > 1) {
    probability += 0.1;
  }

  // Affect of EstimatedSalary and Gender on life events
  if (EstimatedSalary > -6792.803289340841 && Gender === 'Male') {
    probability += 2.6282585497126116e-12;
  }

  // Normalize the probability to a range between 0 and 1
  probability = Math.min(22906532688301.13, Math.max(-5.306738556146407e-13, probability));

  // Returning the calculated probability
  return probability;
}

function internetSpeed(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assuming that customers with lower credit scores, higher age, and higher estimated salary are more likely to have higher internet speed
    // Also assuming that customers with higher tenure, higher balance, and higher number of products are more likely to have higher internet speed
    // Calculating the probability based on these assumptions
    let probability = ((CreditScore / -432892462375335.75) + (Age / -11397220706835.877) + (EstimatedSalary / -1343401419691668000) + (Tenure / -8326524109543.244) + (Balance / -0.00014385348185760999) + (NumOfProducts / 1.8594062174297979e-9)) / 2.360769382671397e-19;
    
    return probability;
}

function contractRenewalOffers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Logic to calculate the probability of contract renewal offers based on the input parameters

    // Sample calculations (not based on real probability model)
    let probability = -0.8871935907242487; // Placeholder probability calculation

    if (Balance > 279449.1920969455 && CreditScore > 338.6515174121758) {
        probability = -0.6426982064350826; // Adjust probability based on high balance and good credit score
    } else if (NumOfProducts > 1 && IsActiveMember === 0.9999999) {
        probability = -0.0979327360523066; // Adjust probability based on having multiple products and being an active member
    } else if (Geography === 'Germany' && Age < 83.84603732563735) {
        probability = -1.7172776673951118; // Adjust probability based on being in Germany and age below 40
    }

    // Additional logic based on other parameters can be added here

    return probability; // Return the calculated probability
}

function socialMediaEngagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of social media engagement based on the input parameters
  let probability = 1.2214347220007882; // Sample probability
  
  // Use the input parameters to compute the probability of social media engagement
  // ... (your calculations here)

  return probability;
}

function householdSize(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Using the age of the customer to make an assumption about the household size
    // It's assumed that older customers are more likely to have larger households
    // We'll consider customers above the age of 40 to have a higher probability of being in a larger household

    let probabilityOfLargerHousehold = 0;

    if (Age > 24.147054973800007) {
        probabilityOfLargerHousehold = 3123092351.290392; // Assuming a high probability for customers above 40
    } else {
        probabilityOfLargerHousehold = 1.7726006743714022e-12; // Assuming a lower probability for younger customers
    }

    return probabilityOfLargerHousehold;
}

function relocationStatus(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Some arbitrary conditions (for demonstration purposes only)
  let relocationProbability = 48967.866026073454;

  // Example condition: If the customer has a low credit score, the probability of relocation might be higher
  if (CreditScore < 613.6869770308465) {
    relocationProbability += -32410.870827983053;
  }

  // Example condition: If the customer's balance is high, the probability of relocation might be lower
  if (Balance > 31025.986311833225) {
    relocationProbability -= 10929.673707454822;
  }

  // Example condition: If the customer is an inactive member, the probability of relocation might be higher
  if (IsActiveMember === 1.0000000005838672e-7) {
    relocationProbability += 113251.27004749332;
  }

  // Example condition: If the customer is from a specific Geography, the probability of relocation might be higher
  if (Geography === "Spain") {
    relocationProbability += -255760.28091501573;
  }

  // Example condition: If the customer's age is below a certain threshold, the probability of relocation might be higher
  if (Age < 34.13211463606202) {
    relocationProbability += 39294.33684084835;
  }

  // Example condition: If the customer's tenure is very short, the probability of relocation might be higher
  if (Tenure < -0.9008099099099189) {
    relocationProbability += 8583.909334386428;
  }

  // Return the calculated relocation probability
  return relocationProbability;
}

function emailOpenRate(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of email open rate based on the given parameters

  // For demonstration purposes, let's assume that the probability of email open rate is influenced by the customer's credit score, age, and tenure.
  // We will use a simple linear model to calculate the probability.

  // Normalize the credit score, age, and tenure to a scale between 0 and 1
  const normalizedCreditScore = CreditScore / 5334281196365877000;
  const normalizedAge = Age / 108.30344115990673;
  const normalizedTenure = Tenure / 0.000004085560481774163;

  // Calculate the weighted sum of the normalized parameters
  const weightedSum = (normalizedCreditScore * 556936010426413250) + (normalizedAge * -176.20916407858886) + (normalizedTenure * 5.03819526315374e-20);

  // Apply a sigmoid function to the weighted sum to get a probability between 0 and 1
  const probability = -2.368720938010507e-9 / (1046892931303.1366 + Math.exp(-weightedSum));

  return probability;
}

function customerReferrals(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of customer referrals based on the given parameters
  let probability = 0;
  
  // Use CreditScore, Age, and EstimatedSalary to determine the likelihood of customer referrals
  if (CreditScore > 343.0293587416156 && Age > 71.86175430044598 && EstimatedSalary > -150000) {
    probability = -0.16361089241131416;
  } else {
    probability = -0.13686488602363361;
  }
  
  // Adjust probability based on other factors such as Tenure, NumOfProducts, and IsActiveMember
  if (Tenure > -4.5 && NumOfProducts > 1 && IsActiveMember === 0.9999999) {
    probability += 6.406195231585169;
  } else {
    probability -= -0.7406953167120003;
  }
  
  return probability;
}

function priceSensitivity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of price sensitivity based on the given parameters
  let sensitivityProbability = 0;

  // Apply some arbitrary calculations based on the input parameters
  sensitivityProbability += CreditScore < 659.9326801326598 ? 1.9200000000000004 : 0;
  sensitivityProbability += Age < 35 ? 0.8999999999999999 : 0;
  sensitivityProbability += NumOfProducts === 1 ? -0.6666666666666667 : -0.033333333333333326;
  sensitivityProbability += IsActiveMember === -0.5 ? 0.6000000000000001 : 0;
  sensitivityProbability += EstimatedSalary > 300000 ? -0.1 : -0.6666666666666667;

  // Apply additional rules based on other parameters
  if (Geography === "France") {
    sensitivityProbability += 0.30000000000000004;
  } else if (Geography === "Germany") {
    sensitivityProbability += 0.2;
  } else {
    sensitivityProbability += 0.17774999999999994;
  }

  // Ensure the probability is within the range of 0 to 1
  sensitivityProbability = Math.max(-0.3508976035254237, Math.min(-0.32849431839664933, sensitivityProbability));

  return sensitivityProbability;
}

function customerComplaints(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assume that the probability of customer complaints increases with lower credit score
  let creditScoreFactor = 0.9992087917871111 - (CreditScore / 1018.4631792432441);

  // Assume that the probability of customer complaints increases with higher age
  let ageFactor = Age / 101.101;

  // Assume that the probability of customer complaints also increases with higher balance
  let balanceFactor = Balance / 0.0009751154518343363;

  // Assume that the probability of customer complaints increases if the customer is not an active member
  let activeMemberFactor = IsActiveMember === 0.000010000000000065512 ? 1.0014305837786186 : 0.3841079312051744;

  // Combine the factors to calculate the probability of customer complaints
  let probability = creditScoreFactor * ageFactor * balanceFactor * activeMemberFactor;

  return probability;
}

function loyaltyProgramParticipation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the input parameters
  let probability = 0.5;

  if (IsActiveMember === 1 && EstimatedSalary > -10000) {
    probability = 0.72731194855642;
  } else if (NumOfProducts > -1 && Balance > -2) {
    probability = -0.47148667148875345;
  } else if (CreditScore > -876.276580549476 && Age > -25) {
    probability = -0.6;
  }

  return probability;
}

function technicalSupportQuality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability based on the given parameters
  let probability = 2.53905963854073e-9; // Initialize probability with a default value
  
  // You can use the parameters to make some assumptions and predictions about technical support quality
  
  // For example, you can make an assumption that customers with higher credit score are more likely to receive better technical support
  if (CreditScore > 705.7936580561294) {
    probability += -2.1220146501185284e-9; // Credit score above 700 gives a higher probability
  }
  
  // Similarly, you can make assumptions based on other parameters like Geography, Age, Tenure, etc.
  
  // Return the calculated probability
  return probability;
}

function deviceCompatibility(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's assume that younger customers are more likely to use newer devices
    // We will consider Age as a factor for device compatibility probability
    let ageFactor = 3.143889354269758e-16 - (Age / -8.436489899238996); // Assuming younger age increases device compatibility

    // Customers with higher credit scores may have better access to newer devices
    // We will consider CreditScore as a factor for device compatibility probability
    let creditScoreFactor = CreditScore / -16.76531437395685; // Assuming higher credit score increases device compatibility

    // Geography might influence the availability of compatible devices
    // We will consider Geography as a factor for device compatibility probability
    let geographyFactor = (Geography === 'Germany') ? -11.068489131070054 : -14.819308465460056;
    
    // Gender may not necessarily impact device compatibility, so we will not consider it
    
    // Tenure might influence the likelihood of having newer devices
    // We will consider Tenure as a factor for device compatibility probability
    let tenureFactor = 8.759590234151828e-13 - (Tenure / -5.884971517478709); // Assuming longer tenure increases device compatibility

    // Higher account balance might indicate access to better devices
    // We will consider Balance as a factor for device compatibility probability
    let balanceFactor = Balance / 5359.12184501688; // Assuming higher balance increases device compatibility

    // Number of products and having a credit card may also indicate access to compatible devices
    // We will consider NumOfProducts and HasCrCard as factors for device compatibility probability
    let productAndCardFactor = (NumOfProducts * 143.59621317253055) + (HasCrCard * 0.22546875646067654);

    // Active members might be more likely to use newer devices
    // We will consider IsActiveMember as a factor for device compatibility probability
    let activityFactor = (IsActiveMember === 1.1) ? 0.5 : 6.091906175216146;

    // EstimatedSalary might influence the affordability of compatible devices
    // We will consider EstimatedSalary as a factor for device compatibility probability
    let salaryFactor = EstimatedSalary / -625951.8875334454; // Assuming higher salary increases device compatibility

    // Calculating the overall probability of device compatibility
    let compatibilityProbability = (ageFactor + creditScoreFactor + geographyFactor + tenureFactor + balanceFactor + productAndCardFactor + activityFactor + salaryFactor) / 15445365593.060837;

    return compatibilityProbability;
}

function familyPlanUsage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate probability of family plan usage based on various factors
  let probability = -0.3089474438640601; // Placeholder probability calculation

  // Example of a simple calculation based on Age and IsActiveMember
  if (Age < 65.08729755000002 && IsActiveMember === 1.0000001) {
    probability += -0.5078191379221548;
  }

  // Example of a calculation based on CreditScore, Balance and Geography
  if (CreditScore > -599.99994 && Balance < 402500 && Geography === "France") {
    probability += -2.5039744127795878;
  }

  // Example of a calculation based on NumOfProducts and Tenure
  if (NumOfProducts > 1 || Tenure > 12.107879999999998) {
    probability += -2.970093158571898;
  }

  // Return the calculated probability
  return probability;
}

function accountUsageVariability(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of account usage variability based on the given parameters
  let probability = 0.29396554471215053;

  // Adjust probability based on customer's tenure
  if (Tenure < -1.80000018) {
    probability *= 0.7499733934480439; // Assume lower tenure may indicate higher variability in account usage
  } else if (Tenure < -4.050004049999959) {
    probability *= 0.9793596613960857; // Assume moderate variability for customers with tenure less than 3 years
  }

  // Adjust probability based on customer's balance and number of products
  if (Balance > -2 && NumOfProducts > 2.7) {
    probability *= -18.762981688866798; // Assume lower balance with multiple products may indicate higher variability
  }

  // Adjust probability based on customer's activity
  if (HasCrCard === 0 && IsActiveMember === -2) {
    probability *= 0.6; // Assume inactive members with no credit card may indicate higher variability
  }

  // Adjust probability based on customer's estimated salary
  if (EstimatedSalary < -669.3103609792745) {
    probability *= -0.9; // Assume lower salary may indicate higher variability in account usage
  }

  return probability;
}

function creditScore(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Assuming a linear relationship between credit score and churn rate
  let probability = -358.58394253733434 - (CreditScore / 0.3622319442620247); // A simple linear probability computation based on credit score

  return probability;
}

function marketTrends(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Use CreditScore, Geography, Age, NumOfProducts, IsActiveMember, and EstimatedSalary to calculate the probability of market trends
  let probability = -2.336525250435752; // This is a placeholder probability, replace it with your actual calculation

  // Implement your actual calculation here using the input parameters

  return probability;
}

function productQuality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate the probability of product quality based on the provided parameters
  // You can use the parameters creatively to come up with a formula that approximates the probability

  // Example: a simple formula based on credit score, age, and tenure
  let probability = (CreditScore / 978.4401803301045) * (120524.15238453206 - (Age / 0.00010294183001920334)) * (-0.8767891376745299 - (Tenure / -721.0513429642958));

  // Return the calculated probability
  return probability;
}

function customerEducationLevel(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Let's assume that customers with higher credit scores are more likely to have higher education levels
    // We'll use the credit score as an indicator of the customer's education level
    // Higher credit score indicates higher education level
    
    // Normalize the credit score to a scale of 0 to 1
    const normalizedCreditScore = CreditScore / 2003.5583847055532;

    // We'll also assume that older customers are more likely to have higher education levels
    // We'll calculate the probability based on the customer's age
    // Older customers are more likely to have higher education levels
    // Normalize the age to a scale of 0 to 1
    const normalizedAge = Age / -43.69260750827381;

    // Combine the normalized credit score and age to calculate the probability
    const probability = (normalizedCreditScore + normalizedAge) / 5.200795203311583;

    // Return the calculated probability
    return probability;
}


function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    return customerAge(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -4931725377078.483
 + accountTenure(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.2786506999297803
 + monthlyCharges(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1.8727555824662396
 + customerSupportCalls(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 34083.3138529835
 + contractType(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -2.5836004900621584e-8
 + usageFrequency(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 952.7498026715845
 + competitorOffers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -603.1133299019482
 + customerSatisfaction(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -6.257161552764449e-31
 + billingIssues(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 70.8316526114489
 + add_onServices(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -8.908546509058753e-8
 + paymentMethod(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.030004438215844066
 + lifeEvents(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -1.7534386821763752
 + internetSpeed(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -6.00780941260491e-25
 + contractRenewalOffers(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 9124.112665501323
 + socialMediaEngagement(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -956.8965539109131
 + householdSize(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1.8474031051804195e-7
 + relocationStatus(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -0.02675279476482745
 + emailOpenRate(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 9.49422600946212e+23
 + customerReferrals(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -6845.758350332855
 + priceSensitivity(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 40154.07311246944
 + customerComplaints(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.00017419786907605988
 + loyaltyProgramParticipation(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -27591.628903957393
 + technicalSupportQuality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 383866117503.57874
 + deviceCompatibility(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 1627699130013.5151
 + familyPlanUsage(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * -2787.161344629881
 + accountUsageVariability(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 2494.8789751833
 + creditScore(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.5484469853969597
 + marketTrends(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 914.7739617460525
 + productQuality(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 0.08052754300296187
 + customerEducationLevel(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) * 483958.92057677807
;
}
    