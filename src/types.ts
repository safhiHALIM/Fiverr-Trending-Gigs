export interface Gig {
  title: string;
  seller: string;
  country: string;
  rating: number | null;
  reviews: number;
  price: number | null;
  delivery_time: string;
  seller_level: string;
  publish_date: string;
  link: string;
  trending_score?: number;
}

export const PAID_COUNTRIES = [
  { code: "us", name: "United States", flag: "🇺🇸" },
  { code: "uk", name: "United Kingdom", flag: "🇬🇧" },
  { code: "ca", name: "Canada", flag: "🇨🇦" },
  { code: "au", name: "Australia", flag: "🇦🇺" },
  { code: "in", name: "India", flag: "🇮🇳" },
  { code: "de", name: "Germany", flag: "🇩🇪" },
  { code: "fr", name: "France", flag: "🇫🇷" },
  { code: "es", name: "Spain", flag: "🇪🇸" },
  { code: "it", name: "Italy", flag: "🇮🇹" },
  { code: "nl", name: "Netherlands", flag: "🇳🇱" },
  { code: "br", name: "Brazil", flag: "🇧🇷" },
  { code: "mx", name: "Mexico", flag: "🇲🇽" },
  { code: "ar", name: "Argentina", flag: "🇦🇷" },
  { code: "jp", name: "Japan", flag: "🇯🇵" },
  { code: "cn", name: "China", flag: "🇨🇳" },
  { code: "sg", name: "Singapore", flag: "🇸🇬" },
  { code: "nz", name: "New Zealand", flag: "🇳🇿" },
  { code: "za", name: "South Africa", flag: "🇿🇦" },
  { code: "se", name: "Sweden", flag: "🇸🇪" },
  { code: "no", name: "Norway", flag: "🇳🇴" },
  { code: "ch", name: "Switzerland", flag: "🇨🇭" },
  { code: "ae", name: "United Arab Emirates", flag: "🇦🇪" },
  { code: "pk", name: "Pakistan", flag: "🇵🇰" },
  { code: "ph", name: "Philippines", flag: "🇵🇭" },
  { code: "th", name: "Thailand", flag: "🇹🇭" },
  { code: "vn", name: "Vietnam", flag: "🇻🇳" },
  { code: "kr", name: "South Korea", flag: "🇰🇷" },
  { code: "tr", name: "Turkey", flag: "🇹🇷" },
  { code: "ru", name: "Russia", flag: "🇷🇺" },
  { code: "ua", name: "Ukraine", flag: "🇺🇦" },
  { code: "pl", name: "Poland", flag: "🇵🇱" },
  { code: "cz", name: "Czech Republic", flag: "🇨🇿" },
  { code: "ro", name: "Romania", flag: "🇷🇴" },
  { code: "bg", name: "Bulgaria", flag: "🇧🇬" },
  { code: "gr", name: "Greece", flag: "🇬🇷" },
  { code: "pt", name: "Portugal", flag: "🇵🇹" },
  { code: "be", name: "Belgium", flag: "🇧🇪" },
  { code: "at", name: "Austria", flag: "🇦🇹" },
  { code: "hu", name: "Hungary", flag: "🇭🇺" },
  { code: "ie", name: "Ireland", flag: "🇮🇪" },
  { code: "dk", name: "Denmark", flag: "🇩🇰" },
  { code: "fi", name: "Finland", flag: "🇫🇮" },
  { code: "cl", name: "Chile", flag: "🇨🇱" },
  { code: "co", name: "Colombia", flag: "🇨🇴" },
  { code: "pe", name: "Peru", flag: "🇵🇪" },
  { code: "id", name: "Indonesia", flag: "🇮🇩" },
  { code: "my", name: "Malaysia", flag: "🇲🇾" },
  { code: "bd", name: "Bangladesh", flag: "🇧🇩" },
  { code: "il", name: "Israel", flag: "🇮🇱" },
  { code: "ng", name: "Nigeria", flag: "🇳🇬" },
  { code: "ke", name: "Kenya", flag: "🇰🇪" },
  { code: "eg", name: "Egypt", flag: "🇪🇬" },
  { code: "hk", name: "Hong Kong", flag: "🇭🇰" },
  { code: "tw", name: "Taiwan", flag: "🇹🇼" },
  { code: "th", name: "Thailand", flag: "🇹🇭" },
  { code: "sa", name: "Saudi Arabia", flag: "🇸🇦" }
] as const;
