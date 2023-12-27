
function doesItContainTableOrColumns(inputText) {
  // Check if the input text contains common table or column related keywords
  const containsTable = /(table|thead|tbody|th|tr|td)/i.test(inputText);
  const containsColumns = /(column|col|row|cell)/i.test(inputText);

  // Additional logic to differentiate between table and columns
  if (containsTable && containsColumns) {
    // Check for specific patterns to differentiate between table and columns
    const tdCount = (inputText.match(/td/gi) || []).length;
    const trCount = (inputText.match(/tr/gi) || []).length;

    // Check for specific keywords related to both table and columns
    const containsTableAndColumnsKeywords = /(innovating|research|safer|chemical|alternatives|harmful|substances|evaluating|manufacture|developing|reduce|remove|chem|safer|alternative|suppliers|developing|rigorous|performance|inventing|replace|thermoplastic|elastomers|phased|solder|multiplying|stride|minimizing|strain|transition| chains|green|chemistry|circular|material|progress)/i.test(inputText);

    if (containsTableAndColumnsKeywords) {
      return "TABLE_AND_COLUMNS";
    } else if (tdCount > trCount) {
      return "COLUMNS";
    } else {
      return "TABLE";
    }
  } else if (containsTable) {
    return "TABLE";
  } else if (containsColumns) {
    return "COLUMNS";
  } else {
    return "NORMAL";
  }
}

//Test the input text you provided
console.log(doesItContainTableOrColumns(`POWERTRUST PARTNERSHIP                                                           Mon, Nagaland: This project has connected three villages in the state of
Nagaland to solar mini-grids. These villages are the first demonstration
sites of a larger plan to connect 40 villages across the province over the
next three years.
This year we partnered with Powertrust to bring
high-impact distributed renewable energy
projects to rural areas of India for the first time
This work is funded through distributed renewable
energy certificates (D-RECs), a market instrument
aligned to the International REC (I-REC) standard.
These investments bring renewable energy to
regions where it is needed most, thereby
delivering maximal social and environmental
benefits. Many of the projects we have invested in
are bringing electricity to communities, and
enabling others to rely less on small-scale fossil
fuel generators.
Vellore Institute of Technology, Andhra Pradesh: The institute is a higher
educational facility in Andhra Pradesh. A 700kWp rooftop system now
spreads across several buildings on the institute’s campus, including several
student accommodation and service buildings.
Solar Irrigation Pumps, Uttar Pradesh: “Irrigation-as-a-Service” enables
farmers to transition from diesel-based pumping to solar irrigation. The
tariffs are set to be 20-40% cheaper than the running cost of diesel
groundwater pumping (including fuel, maintenance, and rental), and users
only pay for the volume of water consumed for irrigation.`));
