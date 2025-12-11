export type WebsiteCategory = 
  // A-E
  | "Art & Design" | "Auto & Vehicles" | "Beauty" | "Books & Reference" | "Business" 
  | "Comics" | "Communication" | "Dating" | "Education" | "Entertainment" | "Events"
  // F-L
  | "Finance" | "Food & Drink" | "Games" | "Health & Fitness" | "House & Home" 
  | "Libraries & Demo" | "Lifestyle"
  // M-P
  | "Maps & Navigation" | "Medical" | "Music & Audio" | "News & Magazines" 
  | "Parenting" | "Personalization" | "Photography" | "Productivity"
  // S-W
  | "Shopping" | "Social" | "Sports" | "Tools" | "Travel & Local" 
  | "Video Players & Editors" | "Weather";

export type WebsiteStatus = "ACTIVE" | "PENDING" | "INACTIVE";

export interface Website {
  id: string; // UUID or timestamp based string
  
  // Basic Info
  url: string;
  title: string;
  short_description: string;
  detail_description?: string;
  
  // Media
  thumbnail_url: string;
  favicon_url?: string;
  
  // Classification
  category: WebsiteCategory;
  tags: string[]; // Simplification: Just storing tag names or IDs
  
  // Traffic Metrics (External Data)
  monthly_traffic?: number;
  total_traffic?: number;
  
  // Status & Flags
  is_featured: boolean;
  is_essential: boolean;
  status: WebsiteStatus;
  
  // Metadata
  created_at: string; // ISO Date String
  updated_at: string; // ISO Date String
  
  // Engagement (Internal)
  view_count: number;
  click_count: number;
  like_count: number;
}
