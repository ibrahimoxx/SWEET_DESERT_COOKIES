export interface Cookie {
  id: string;
  name: string;
  description: string;
  image: string;
  backgroundColor: string;
  textColor: string;
  category: "weekly" | "classic";
  partnerLogo?: string;
}
