export const vpaSuffixes = [
  { suffix: "@icici", bank: "ICICI Bank" },
  { suffix: "@hdfcbank", bank: "HDFC Bank" },
  { suffix: "@sbi", bank: "State Bank of India" },
  { suffix: "@axisbank", bank: "Axis Bank" },
  { suffix: "@okaxis", bank: "Axis Bank" },
  { suffix: "@yesbank", bank: "Yes Bank" },
  { suffix: "@kotak", bank: "Kotak Mahindra Bank" },
  { suffix: "@federal", bank: "Federal Bank" },
  { suffix: "@canarabank", bank: "Canara Bank" },
  { suffix: "@pnb", bank: "Punjab National Bank" },
  { suffix: "@bob", bank: "Bank of Baroda" },
  { suffix: "@unionbank", bank: "Union Bank of India" },
  { suffix: "@idbi", bank: "IDBI Bank" },
  { suffix: "@aubank", bank: "AU Small Finance Bank" },
  { suffix: "@sc", bank: "Standard Chartered Bank" },
  { suffix: "@paytm", bank: "Paytm Payments Bank" },
  { suffix: "@ybl", bank: "PhonePe (powered by Yes Bank)" },
  { suffix: "@okhdfcbank", bank: "Google Pay (linked with HDFC Bank)" },
  { suffix: "@oksbi", bank: "Google Pay (linked with SBI)" },
  { suffix: "@okicici", bank: "Google Pay (linked with ICICI Bank)" },
  { suffix: "@upi", bank: "Bharat Interface for Money (BHIM) UPI" },
  { suffix: "@airtel", bank: "Airtel Payments Bank" },
  { suffix: "@jio", bank: "Jio Payments Bank" },
  { suffix: "@pingpay", bank: "Axis Bank's payment solution" },
  { suffix: "@dbs", bank: "Digibank by DBS" },
  { suffix: "@freecharge", bank: "Freecharge UPI" },
  { suffix: "@iob", bank: "Indian Overseas Bank" },
  { suffix: "@indus", bank: "IndusInd Bank" },
  { suffix: "@yesbankltd", bank: "Yes Bank" },
];

export const ImageURL =
  "https://img.freepik.com/premium-vector/circle-icon-clip-art-give-money-donation-pay-illustration-finance-business_730030-91.jpg";

export const gethighlightedText = (text, highlight) => {
  // Escape special characters in the highlight string for use in a regular expression
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return parts.map((part, index) =>
    part?.toLowerCase() === highlight?.toLowerCase() ? (
      <span key={index} style={{ color: "red" }}>
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    )
  );
};
