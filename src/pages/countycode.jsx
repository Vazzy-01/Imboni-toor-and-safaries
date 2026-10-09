import { useState } from "react";

const countries = [
  { code: "+250", flag: "🇷🇼", name: "Rwanda" },
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+32", flag: "🇧🇪", name: "Belgium" },
  { code: "+243", flag: "🇨🇩", name: "DR Congo" },
  { code: "+254", flag: "🇰🇪", name: "Kenya" },
  { code: "+255", flag: "🇹🇿", name: "Tanzania" },
  { code: "+256", flag: "🇺🇬", name: "Uganda" },
  { code: "+1", flag: "🇺🇸", name: "United States / Canada" },
  { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+39", flag: "🇮🇹", name: "Italy" },
  { code: "+27", flag: "🇿🇦", name: "South Africa" }
];

export default function Countrycode({ value = "+250", onChange }) {
  return (
    <select
      aria-label="Country calling code"
      value={value}
      onChange={(event) => onChange?.(event.target.value)}
    >
      {countries.map((country) => (
        <option key={`${country.code}-${country.name}`} value={country.code}>
          {country.flag} {country.code}
        </option>
      ))}
    </select>
  );
}
