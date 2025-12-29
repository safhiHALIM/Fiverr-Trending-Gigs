import { Gig } from "./types";

const MOCK_GIGS_DATA: Record<string, Gig[]> = {
  "logo design": [
    { title: "Modern Logo Design", seller: "DesignPro", country: "us", rating: 4.9, reviews: 245, price: 25, delivery_time: "3 days", seller_level: "Top Rated", publish_date: "2023-11-15", link: "https://www.fiverr.com/designpro/modern-logo-design" },
    { title: "Professional Logo Creation", seller: "CreativeStudio", country: "uk", rating: 4.8, reviews: 189, price: 35, delivery_time: "5 days", seller_level: "Level 2", publish_date: "2023-10-20", link: "https://www.fiverr.com/creativestudio/professional-logo-creation" },
    { title: "Custom Brand Logo", seller: "BrandMaster", country: "us", rating: 5.0, reviews: 412, price: 50, delivery_time: "2 days", seller_level: "Top Rated", publish_date: "2023-09-01", link: "https://www.fiverr.com/brandmaster/custom-brand-logo" },
    { title: "Minimalist Logo Design", seller: "SimpleDesign", country: "ca", rating: 4.7, reviews: 98, price: 20, delivery_time: "4 days", seller_level: "Level 1", publish_date: "2023-12-05", link: "https://www.fiverr.com/simpledesign/minimalist-logo" },
    { title: "Logo Design & Branding", seller: "BrandGenius", country: "au", rating: 4.9, reviews: 356, price: 45, delivery_time: "3 days", seller_level: "Top Rated", publish_date: "2023-11-28", link: "https://www.fiverr.com/brandgenius/logo-design-branding" },
    { title: "Budget Logo Design", seller: "LogoBasics", country: "us", rating: 4.0, reviews: 52, price: 15, delivery_time: "5 days", seller_level: "Level 1", publish_date: "2023-12-01", link: "https://www.fiverr.com/logobasics/budget-logo" }
  ],
  "web design": [
    { title: "Responsive Web Design", seller: "WebDesigner", country: "us", rating: 4.9, reviews: 234, price: 60, delivery_time: "5 days", seller_level: "Top Rated", publish_date: "2023-12-01", link: "https://www.fiverr.com/webdesigner/responsive-web-design" },
    { title: "Modern UI/UX Design", seller: "UICreator", country: "uk", rating: 4.8, reviews: 156, price: 75, delivery_time: "6 days", seller_level: "Top Rated", publish_date: "2023-11-18", link: "https://www.fiverr.com/uicreator/modern-ui-ux-design" },
    { title: "E-commerce Website Design", seller: "StoreDesign", country: "in", rating: 4.7, reviews: 123, price: 80, delivery_time: "7 days", seller_level: "Level 2", publish_date: "2023-10-25", link: "https://www.fiverr.com/storedesign/ecommerce-website" },
    { title: "Landing Page Design", seller: "PageMaster", country: "us", rating: 4.8, reviews: 189, price: 50, delivery_time: "4 days", seller_level: "Top Rated", publish_date: "2023-12-04", link: "https://www.fiverr.com/pagemaster/landing-page" },
    { title: "Website Redesign", seller: "ModernDesign", country: "de", rating: 4.9, reviews: 267, price: 90, delivery_time: "7 days", seller_level: "Top Rated", publish_date: "2023-11-22", link: "https://www.fiverr.com/moderndesign/website-redesign" },
    { title: "Simple Website Design", seller: "BasicWeb", country: "us", rating: 4.0, reviews: 67, price: 40, delivery_time: "6 days", seller_level: "Level 1", publish_date: "2023-12-02", link: "https://www.fiverr.com/basicweb/simple-web" }
  ],
  "graphic design": [
    { title: "Custom Graphic Design", seller: "GraphicMaster", country: "us", rating: 4.9, reviews: 312, price: 35, delivery_time: "4 days", seller_level: "Top Rated", publish_date: "2023-11-10", link: "https://www.fiverr.com/graphicmaster/custom-graphic-design" },
    { title: "Infographic Design", seller: "InfoDesigner", country: "uk", rating: 4.8, reviews: 178, price: 50, delivery_time: "5 days", seller_level: "Top Rated", publish_date: "2023-10-15", link: "https://www.fiverr.com/infodesigner/infographic-design" },
    { title: "Poster Design", seller: "PosterPro", country: "ca", rating: 4.7, reviews: 145, price: 25, delivery_time: "3 days", seller_level: "Level 2", publish_date: "2023-12-02", link: "https://www.fiverr.com/posterpro/poster-design" },
    { title: "Flyer Design", seller: "FlyerDesign", country: "us", rating: 4.8, reviews: 234, price: 20, delivery_time: "2 days", seller_level: "Top Rated", publish_date: "2023-11-25", link: "https://www.fiverr.com/flyerdesign/flyer-design" },
    { title: "Branding Package", seller: "BrandDesign", country: "au", rating: 4.9, reviews: 289, price: 120, delivery_time: "8 days", seller_level: "Top Rated", publish_date: "2023-10-30", link: "https://www.fiverr.com/branddesign/branding-package" },
    { title: "Basic Graphic Design", seller: "GraphicBasic", country: "uk", rating: 4.0, reviews: 43, price: 18, delivery_time: "4 days", seller_level: "Level 1", publish_date: "2023-12-03", link: "https://www.fiverr.com/graphicbasic/basic-graphic" }
  ],
  "article writing": [
    { title: "SEO Article Writing", seller: "ContentKing", country: "in", rating: 4.8, reviews: 567, price: 15, delivery_time: "2 days", seller_level: "Top Rated", publish_date: "2023-11-05", link: "https://www.fiverr.com/contentking/seo-article-writing" },
    { title: "Professional Blog Writing", seller: "WriterPro", country: "us", rating: 4.9, reviews: 234, price: 20, delivery_time: "3 days", seller_level: "Top Rated", publish_date: "2023-10-28", link: "https://www.fiverr.com/writerpro/professional-blog-writing" },
    { title: "Academic Article Writing", seller: "Scholar", country: "uk", rating: 4.7, reviews: 145, price: 30, delivery_time: "5 days", seller_level: "Level 2", publish_date: "2023-09-15", link: "https://www.fiverr.com/scholar/academic-article-writing" },
    { title: "Quick Content Writing", seller: "FastWriter", country: "us", rating: 4.6, reviews: 89, price: 10, delivery_time: "1 day", seller_level: "Level 1", publish_date: "2023-12-06", link: "https://www.fiverr.com/fastwriter/quick-content-writing" },
    { title: "Copywriting & Articles", seller: "CopyMaster", country: "ca", rating: 4.8, reviews: 298, price: 25, delivery_time: "2 days", seller_level: "Top Rated", publish_date: "2023-11-20", link: "https://www.fiverr.com/copymaster/copywriting-articles" },
    { title: "Budget Article Writing", seller: "WriterBasic", country: "in", rating: 4.0, reviews: 34, price: 8, delivery_time: "3 days", seller_level: "Level 1", publish_date: "2023-11-30", link: "https://www.fiverr.com/writerbasic/budget-article" }
  ],
  "content writing": [
    { title: "Blog Content Creation", seller: "BlogWriter", country: "us", rating: 4.9, reviews: 345, price: 18, delivery_time: "3 days", seller_level: "Top Rated", publish_date: "2023-11-12", link: "https://www.fiverr.com/blogwriter/blog-content" },
    { title: "Web Content Writing", seller: "WebWriter", country: "uk", rating: 4.8, reviews: 267, price: 22, delivery_time: "3 days", seller_level: "Top Rated", publish_date: "2023-10-18", link: "https://www.fiverr.com/webwriter/web-content" },
    { title: "Product Description Writing", seller: "ProductWriter", country: "in", rating: 4.7, reviews: 156, price: 12, delivery_time: "2 days", seller_level: "Level 2", publish_date: "2023-09-22", link: "https://www.fiverr.com/productwriter/product-description" },
    { title: "Email Newsletter Writing", seller: "NewsletterPro", country: "us", rating: 4.8, reviews: 189, price: 25, delivery_time: "2 days", seller_level: "Top Rated", publish_date: "2023-12-03", link: "https://www.fiverr.com/newsletterpro/email-newsletter" },
    { title: "Technical Writing", seller: "TechWriter", country: "ca", rating: 4.9, reviews: 234, price: 35, delivery_time: "4 days", seller_level: "Top Rated", publish_date: "2023-11-26", link: "https://www.fiverr.com/techwriter/technical-writing" },
    { title: "Simple Content Writing", seller: "ContentBasic", country: "us", rating: 4.0, reviews: 28, price: 10, delivery_time: "3 days", seller_level: "Level 1", publish_date: "2023-12-04", link: "https://www.fiverr.com/contentbasic/simple-content" }
  ],
  "copywriting": [
    { title: "Sales Page Copywriting", seller: "SalesCopy", country: "us", rating: 4.9, reviews: 312, price: 50, delivery_time: "5 days", seller_level: "Top Rated", publish_date: "2023-11-08", link: "https://www.fiverr.com/salescopy/sales-page" },
    { title: "Ad Copy Writing", seller: "AdCopyPro", country: "uk", rating: 4.8, reviews: 234, price: 40, delivery_time: "3 days", seller_level: "Top Rated", publish_date: "2023-10-12", link: "https://www.fiverr.com/adcopypro/ad-copy" },
    { title: "Website Copy", seller: "WebCopy", country: "us", rating: 4.7, reviews: 178, price: 45, delivery_time: "4 days", seller_level: "Level 2", publish_date: "2023-09-18", link: "https://www.fiverr.com/webcopy/website-copy" },
    { title: "Email Marketing Copy", seller: "EmailCopy", country: "ca", rating: 4.8, reviews: 189, price: 35, delivery_time: "3 days", seller_level: "Top Rated", publish_date: "2023-12-01", link: "https://www.fiverr.com/emailcopy/email-marketing" },
    { title: "Social Media Copy", seller: "SocialCopy", country: "au", rating: 4.9, reviews: 267, price: 25, delivery_time: "2 days", seller_level: "Top Rated", publish_date: "2023-11-24", link: "https://www.fiverr.com/socialcopy/social-media-copy" }
  ],
  "video editing": [
    { title: "Professional Video Editing", seller: "VideoMaster", country: "us", rating: 4.9, reviews: 378, price: 50, delivery_time: "3 days", seller_level: "Top Rated", publish_date: "2023-11-14", link: "https://www.fiverr.com/videomaster/professional-video-editing" },
    { title: "YouTube Video Editing", seller: "YouTubePro", country: "uk", rating: 4.8, reviews: 245, price: 40, delivery_time: "2 days", seller_level: "Top Rated", publish_date: "2023-10-22", link: "https://www.fiverr.com/youtubepro/youtube-video-editing" },
    { title: "Motion Graphics", seller: "MotionArtist", country: "ca", rating: 4.7, reviews: 156, price: 75, delivery_time: "5 days", seller_level: "Level 2", publish_date: "2023-09-28", link: "https://www.fiverr.com/motionartist/motion-graphics" },
    { title: "Quick Cuts & Transitions", seller: "FastEditor", country: "us", rating: 4.6, reviews: 92, price: 25, delivery_time: "1 day", seller_level: "Level 1", publish_date: "2023-12-05", link: "https://www.fiverr.com/fasteditor/quick-cuts-transitions" },
    { title: "Cinematic Video Edit", seller: "CinemaEditor", country: "au", rating: 4.9, reviews: 267, price: 85, delivery_time: "4 days", seller_level: "Top Rated", publish_date: "2023-11-19", link: "https://www.fiverr.com/cinemaeditor/cinematic-video-edit" },
    { title: "Basic Video Editing", seller: "VideoBasic", country: "us", rating: 4.0, reviews: 31, price: 20, delivery_time: "4 days", seller_level: "Level 1", publish_date: "2023-12-05", link: "https://www.fiverr.com/videobasic/basic-editing" }
  ],
  "animation": [
    { title: "2D Animation", seller: "Animator2D", country: "us", rating: 4.9, reviews: 289, price: 100, delivery_time: "7 days", seller_level: "Top Rated", publish_date: "2023-11-01", link: "https://www.fiverr.com/animator2d/2d-animation" },
    { title: "3D Animation", seller: "Animator3D", country: "uk", rating: 4.8, reviews: 234, price: 150, delivery_time: "10 days", seller_level: "Top Rated", publish_date: "2023-10-05", link: "https://www.fiverr.com/animator3d/3d-animation" },
    { title: "Character Animation", seller: "CharAnim", country: "in", rating: 4.7, reviews: 156, price: 80, delivery_time: "8 days", seller_level: "Level 2", publish_date: "2023-09-10", link: "https://www.fiverr.com/charanim/character-animation" },
    { title: "Explainer Video Animation", seller: "ExplainerAnim", country: "us", rating: 4.8, reviews: 201, price: 120, delivery_time: "7 days", seller_level: "Top Rated", publish_date: "2023-11-29", link: "https://www.fiverr.com/explaineranim/explainer-animation" },
    { title: "Whiteboard Animation", seller: "WhiteboardAnim", country: "ca", rating: 4.9, reviews: 267, price: 95, delivery_time: "6 days", seller_level: "Top Rated", publish_date: "2023-11-16", link: "https://www.fiverr.com/whiteboardanim/whiteboard-animation" },
    { title: "Simple Animation", seller: "AnimBasic", country: "us", rating: 4.0, reviews: 24, price: 60, delivery_time: "8 days", seller_level: "Level 1", publish_date: "2023-12-04", link: "https://www.fiverr.com/animbasic/simple-anim" }
  ],
  "motion graphics": [
    { title: "Logo Animation", seller: "LogoAnim", country: "us", rating: 4.9, reviews: 234, price: 50, delivery_time: "4 days", seller_level: "Top Rated", publish_date: "2023-11-21", link: "https://www.fiverr.com/logoanim/logo-animation" },
    { title: "Title Sequence Design", seller: "TitleDesign", country: "uk", rating: 4.8, reviews: 178, price: 75, delivery_time: "5 days", seller_level: "Top Rated", publish_date: "2023-10-26", link: "https://www.fiverr.com/titledesign/title-sequence" },
    { title: "Kinetic Typography", seller: "TypoAnim", country: "in", rating: 4.7, reviews: 145, price: 60, delivery_time: "4 days", seller_level: "Level 2", publish_date: "2023-09-30", link: "https://www.fiverr.com/typoanim/kinetic-typography" },
    { title: "Lower Third Design", seller: "LowerThird", country: "us", rating: 4.8, reviews: 189, price: 35, delivery_time: "2 days", seller_level: "Top Rated", publish_date: "2023-12-04", link: "https://www.fiverr.com/lowerthird/lower-third" },
    { title: "Intro Outro Animation", seller: "IntroOutro", country: "au", rating: 4.9, reviews: 267, price: 45, delivery_time: "3 days", seller_level: "Top Rated", publish_date: "2023-11-23", link: "https://www.fiverr.com/introutro/intro-outro" }
  ],
  "social media marketing": [
    { title: "Social Media Strategy", seller: "MarketingPro", country: "us", rating: 4.9, reviews: 345, price: 60, delivery_time: "3 days", seller_level: "Top Rated", publish_date: "2023-11-13", link: "https://www.fiverr.com/marketingpro/social-media-strategy" },
    { title: "Instagram Growth", seller: "InstaBoosted", country: "uk", rating: 4.8, reviews: 267, price: 50, delivery_time: "5 days", seller_level: "Top Rated", publish_date: "2023-10-19", link: "https://www.fiverr.com/instaboosted/instagram-growth" },
    { title: "Facebook Ads Management", seller: "AdManager", country: "us", rating: 4.7, reviews: 134, price: 55, delivery_time: "2 days", seller_level: "Level 2", publish_date: "2023-09-25", link: "https://www.fiverr.com/admanager/facebook-ads-management" },
    { title: "TikTok Content Creation", seller: "TikTokStar", country: "ca", rating: 4.8, reviews: 189, price: 45, delivery_time: "3 days", seller_level: "Top Rated", publish_date: "2023-12-02", link: "https://www.fiverr.com/tiktokstar/tiktok-content-creation" },
    { title: "LinkedIn Professional Posts", seller: "LinkedInExpert", country: "de", rating: 4.9, reviews: 212, price: 40, delivery_time: "2 days", seller_level: "Top Rated", publish_date: "2023-11-27", link: "https://www.fiverr.com/linkedinexpert/linkedin-professional-posts" }
  ],
  "seo": [
    { title: "SEO Audit & Strategy", seller: "SEOExpert", country: "us", rating: 4.9, reviews: 345, price: 75, delivery_time: "5 days", seller_level: "Top Rated", publish_date: "2023-11-07", link: "https://www.fiverr.com/seoexpert/seo-audit" },
    { title: "Keyword Research", seller: "KeywordPro", country: "uk", rating: 4.8, reviews: 267, price: 50, delivery_time: "3 days", seller_level: "Top Rated", publish_date: "2023-10-14", link: "https://www.fiverr.com/keywordpro/keyword-research" },
    { title: "Link Building", seller: "LinkBuilder", country: "in", rating: 4.7, reviews: 189, price: 60, delivery_time: "7 days", seller_level: "Level 2", publish_date: "2023-09-20", link: "https://www.fiverr.com/linkbuilder/link-building" },
    { title: "Technical SEO", seller: "TechSEO", country: "us", rating: 4.8, reviews: 234, price: 80, delivery_time: "6 days", seller_level: "Top Rated", publish_date: "2023-11-30", link: "https://www.fiverr.com/techseo/technical-seo" },
    { title: "SEO Content Optimization", seller: "ContentSEO", country: "ca", rating: 4.9, reviews: 289, price: 65, delivery_time: "4 days", seller_level: "Top Rated", publish_date: "2023-11-17", link: "https://www.fiverr.com/contentseo/content-optimization" }
  ],
  "digital marketing": [
    { title: "Digital Marketing Strategy", seller: "DigitalMaster", country: "us", rating: 4.9, reviews: 356, price: 100, delivery_time: "5 days", seller_level: "Top Rated", publish_date: "2023-11-06", link: "https://www.fiverr.com/digitalmaster/digital-strategy" },
    { title: "Email Marketing Campaign", seller: "EmailMarketer", country: "uk", rating: 4.8, reviews: 267, price: 60, delivery_time: "4 days", seller_level: "Top Rated", publish_date: "2023-10-11", link: "https://www.fiverr.com/emailmarketer/email-campaign" },
    { title: "PPC Campaign Management", seller: "PPCExpert", country: "us", rating: 4.7, reviews: 178, price: 75, delivery_time: "5 days", seller_level: "Level 2", publish_date: "2023-09-17", link: "https://www.fiverr.com/ppcexpert/ppc-campaign" },
    { title: "Marketing Funnel Setup", seller: "FunnelMaster", country: "ca", rating: 4.8, reviews: 201, price: 90, delivery_time: "7 days", seller_level: "Top Rated", publish_date: "2023-11-28", link: "https://www.fiverr.com/funnelmaster/marketing-funnel" },
    { title: "Growth Hacking Strategy", seller: "GrowthHacker", country: "au", rating: 4.9, reviews: 245, price: 85, delivery_time: "5 days", seller_level: "Top Rated", publish_date: "2023-11-11", link: "https://www.fiverr.com/growthhacker/growth-hacking" }
  ],
  "web development": [
    { title: "React Web Development", seller: "CodeWizard", country: "us", rating: 4.9, reviews: 456, price: 100, delivery_time: "7 days", seller_level: "Top Rated", publish_date: "2023-11-02", link: "https://www.fiverr.com/codewizard/react-web-development" },
    { title: "Full Stack Web App", seller: "TechMaster", country: "in", rating: 4.8, reviews: 312, price: 80, delivery_time: "10 days", seller_level: "Top Rated", publish_date: "2023-10-08", link: "https://www.fiverr.com/techmaster/full-stack-web-app" },
    { title: "WordPress Website", seller: "WebBuilder", country: "uk", rating: 4.7, reviews: 178, price: 60, delivery_time: "5 days", seller_level: "Level 2", publish_date: "2023-09-14", link: "https://www.fiverr.com/webbuilder/wordpress-website" },
    { title: "API Development", seller: "APIExpert", country: "us", rating: 4.9, reviews: 234, price: 120, delivery_time: "8 days", seller_level: "Top Rated", publish_date: "2023-11-25", link: "https://www.fiverr.com/apiexpert/api-development" },
    { title: "Frontend Development", seller: "UIDesigner", country: "de", rating: 4.8, reviews: 189, price: 70, delivery_time: "6 days", seller_level: "Level 2", publish_date: "2023-11-14", link: "https://www.fiverr.com/uidesigner/frontend-development" },
    { title: "Simple Web Development", seller: "WebDevBasic", country: "us", rating: 4.0, reviews: 29, price: 50, delivery_time: "8 days", seller_level: "Level 1", publish_date: "2023-12-01", link: "https://www.fiverr.com/webdevbasic/simple-web-dev" }
  ],
  "wordpress": [
    { title: "WordPress Site Setup", seller: "WordPressPro", country: "us", rating: 4.9, reviews: 234, price: 40, delivery_time: "3 days", seller_level: "Top Rated", publish_date: "2023-11-20", link: "https://www.fiverr.com/wordpresspro/wordpress-setup" },
    { title: "WordPress Theme Customization", seller: "ThemeMaster", country: "uk", rating: 4.8, reviews: 189, price: 50, delivery_time: "4 days", seller_level: "Top Rated", publish_date: "2023-10-24", link: "https://www.fiverr.com/thememaster/theme-customization" },
    { title: "WordPress Plugin Development", seller: "PluginDev", country: "us", rating: 4.7, reviews: 145, price: 100, delivery_time: "7 days", seller_level: "Level 2", publish_date: "2023-09-28", link: "https://www.fiverr.com/plugindev/plugin-development" },
    { title: "WordPress Speed Optimization", seller: "SpeedOptimizer", country: "ca", rating: 4.8, reviews: 178, price: 45, delivery_time: "3 days", seller_level: "Top Rated", publish_date: "2023-12-03", link: "https://www.fiverr.com/speedoptimizer/speed-optimization" },
    { title: "WordPress Security Setup", seller: "SecurityPro", country: "au", rating: 4.9, reviews: 212, price: 60, delivery_time: "2 days", seller_level: "Top Rated", publish_date: "2023-11-19", link: "https://www.fiverr.com/securitypro/security-setup" }
  ],
  "mobile app": [
    { title: "iOS App Development", seller: "iOSDev", country: "us", rating: 4.9, reviews: 234, price: 150, delivery_time: "15 days", seller_level: "Top Rated", publish_date: "2023-10-30", link: "https://www.fiverr.com/iosdev/ios-app" },
    { title: "Android App Development", seller: "AndroidDev", country: "uk", rating: 4.8, reviews: 189, price: 140, delivery_time: "15 days", seller_level: "Top Rated", publish_date: "2023-10-25", link: "https://www.fiverr.com/androiddev/android-app" },
    { title: "React Native App", seller: "ReactNativeDev", country: "in", rating: 4.7, reviews: 156, price: 120, delivery_time: "12 days", seller_level: "Level 2", publish_date: "2023-09-29", link: "https://www.fiverr.com/reactnativedev/react-native" },
    { title: "Flutter App Development", seller: "FlutterDev", country: "us", rating: 4.8, reviews: 201, price: 130, delivery_time: "14 days", seller_level: "Top Rated", publish_date: "2023-11-27", link: "https://www.fiverr.com/flutterdev/flutter-app" },
    { title: "App UI/UX Design", seller: "AppDesigner", country: "ca", rating: 4.9, reviews: 267, price: 80, delivery_time: "8 days", seller_level: "Top Rated", publish_date: "2023-11-12", link: "https://www.fiverr.com/appdesigner/app-ui-ux" },
    { title: "Basic App Development", seller: "AppBasic", country: "us", rating: 4.0, reviews: 19, price: 90, delivery_time: "12 days", seller_level: "Level 1", publish_date: "2023-11-29", link: "https://www.fiverr.com/appbasic/basic-app-dev" }
  ],
  "api development": [
    { title: "REST API Development", seller: "APIDev", country: "us", rating: 4.9, reviews: 256, price: 120, delivery_time: "8 days", seller_level: "Top Rated", publish_date: "2023-11-09", link: "https://www.fiverr.com/apidev/rest-api" },
    { title: "GraphQL API Setup", seller: "GraphQLExpert", country: "uk", rating: 4.8, reviews: 189, price: 140, delivery_time: "10 days", seller_level: "Top Rated", publish_date: "2023-10-16", link: "https://www.fiverr.com/graphqlexpert/graphql-api" },
    { title: "API Integration", seller: "IntegrationPro", country: "us", rating: 4.7, reviews: 145, price: 100, delivery_time: "6 days", seller_level: "Level 2", publish_date: "2023-09-21", link: "https://www.fiverr.com/integrationpro/api-integration" },
    { title: "Database Design & Optimization", seller: "DBExpert", country: "ca", rating: 4.8, reviews: 178, price: 110, delivery_time: "7 days", seller_level: "Top Rated", publish_date: "2023-11-26", link: "https://www.fiverr.com/dbexpert/database-design" },
    { title: "Microservices Architecture", seller: "MicroDev", country: "au", rating: 4.9, reviews: 234, price: 180, delivery_time: "14 days", seller_level: "Top Rated", publish_date: "2023-11-10", link: "https://www.fiverr.com/microdev/microservices" },
    { title: "Simple API Development", seller: "APIBasic", country: "us", rating: 4.0, reviews: 22, price: 80, delivery_time: "7 days", seller_level: "Level 1", publish_date: "2023-12-02", link: "https://www.fiverr.com/apibasic/simple-api" }
  ],
  "voice over": [
    { title: "Professional Voice Over", seller: "VoiceActor", country: "us", rating: 4.9, reviews: 345, price: 50, delivery_time: "2 days", seller_level: "Top Rated", publish_date: "2023-11-18", link: "https://www.fiverr.com/voiceactor/professional-voiceover" },
    { title: "English Voice Over", seller: "EnglishVoice", country: "uk", rating: 4.8, reviews: 267, price: 45, delivery_time: "2 days", seller_level: "Top Rated", publish_date: "2023-10-23", link: "https://www.fiverr.com/englishvoice/english-voiceover" },
    { title: "Multilingual Voice Over", seller: "MultiVoice", country: "us", rating: 4.7, reviews: 189, price: 60, delivery_time: "3 days", seller_level: "Level 2", publish_date: "2023-09-27", link: "https://www.fiverr.com/multivoice/multilingual-voiceover" },
    { title: "Commercial Voice Over", seller: "CommercialVoice", country: "ca", rating: 4.8, reviews: 212, price: 55, delivery_time: "2 days", seller_level: "Top Rated", publish_date: "2023-12-01", link: "https://www.fiverr.com/commercialvoice/commercial-voiceover" },
    { title: "Podcast Voice Over", seller: "PodcastVoice", country: "au", rating: 4.9, reviews: 289, price: 40, delivery_time: "1 day", seller_level: "Top Rated", publish_date: "2023-11-24", link: "https://www.fiverr.com/podcastvoice/podcast-voiceover" }
  ],
  "music production": [
    { title: "Music Production", seller: "Producer", country: "us", rating: 4.9, reviews: 234, price: 100, delivery_time: "7 days", seller_level: "Top Rated", publish_date: "2023-11-05", link: "https://www.fiverr.com/producer/music-production" },
    { title: "Beat Making", seller: "BeatMaker", country: "uk", rating: 4.8, reviews: 189, price: 80, delivery_time: "5 days", seller_level: "Top Rated", publish_date: "2023-10-10", link: "https://www.fiverr.com/beatmaker/beat-making" },
    { title: "Music Mixing", seller: "MixEngineer", country: "us", rating: 4.7, reviews: 156, price: 75, delivery_time: "4 days", seller_level: "Level 2", publish_date: "2023-09-16", link: "https://www.fiverr.com/mixengineer/music-mixing" },
    { title: "Mastering", seller: "MasterEngineer", country: "ca", rating: 4.8, reviews: 201, price: 90, delivery_time: "5 days", seller_level: "Top Rated", publish_date: "2023-11-29", link: "https://www.fiverr.com/masterengineer/mastering" },
    { title: "Orchestral Composition", seller: "Composer", country: "au", rating: 4.9, reviews: 267, price: 150, delivery_time: "10 days", seller_level: "Top Rated", publish_date: "2023-11-13", link: "https://www.fiverr.com/composer/orchestral-composition" }
  ],
  "audio editing": [
    { title: "Audio Editing & Mastering", seller: "AudioEngineer", country: "us", rating: 4.9, reviews: 289, price: 60, delivery_time: "3 days", seller_level: "Top Rated", publish_date: "2023-11-17", link: "https://www.fiverr.com/audioengineer/audio-editing" },
    { title: "Podcast Editing", seller: "PodcastEditor", country: "uk", rating: 4.8, reviews: 234, price: 50, delivery_time: "2 days", seller_level: "Top Rated", publish_date: "2023-10-21", link: "https://www.fiverr.com/podcasteditor/podcast-editing" },
    { title: "Voice Enhancement", seller: "VoiceEnhancer", country: "us", rating: 4.7, reviews: 178, price: 40, delivery_time: "2 days", seller_level: "Level 2", publish_date: "2023-09-26", link: "https://www.fiverr.com/voiceenhancer/voice-enhancement" },
    { title: "Noise Removal", seller: "NoiseRemover", country: "ca", rating: 4.8, reviews: 201, price: 35, delivery_time: "1 day", seller_level: "Top Rated", publish_date: "2023-12-05", link: "https://www.fiverr.com/noiseremover/noise-removal" },
    { title: "Audio Restoration", seller: "AudioRestorer", country: "au", rating: 4.9, reviews: 212, price: 70, delivery_time: "4 days", seller_level: "Top Rated", publish_date: "2023-11-22", link: "https://www.fiverr.com/audiorestorer/audio-restoration" }
  ],
  "data entry": [
    { title: "Data Entry Services", seller: "DataEntryPro", country: "in", rating: 4.9, reviews: 456, price: 10, delivery_time: "2 days", seller_level: "Top Rated", publish_date: "2023-11-04", link: "https://www.fiverr.com/dataentrypro/data-entry" },
    { title: "Excel Data Entry", seller: "ExcelPro", country: "us", rating: 4.8, reviews: 345, price: 12, delivery_time: "2 days", seller_level: "Top Rated", publish_date: "2023-10-09", link: "https://www.fiverr.com/excelpro/excel-data-entry" },
    { title: "Web Scraping", seller: "ScrapingPro", country: "uk", rating: 4.7, reviews: 267, price: 20, delivery_time: "3 days", seller_level: "Level 2", publish_date: "2023-09-13", link: "https://www.fiverr.com/scrapingpro/web-scraping" },
    { title: "Copy Paste Work", seller: "CopyPasteHelper", country: "us", rating: 4.8, reviews: 289, price: 8, delivery_time: "1 day", seller_level: "Top Rated", publish_date: "2023-12-06", link: "https://www.fiverr.com/copypastehelper/copy-paste" },
    { title: "Form Filling", seller: "FormFiller", country: "ca", rating: 4.9, reviews: 312, price: 9, delivery_time: "1 day", seller_level: "Top Rated", publish_date: "2023-11-18", link: "https://www.fiverr.com/formfiller/form-filling" },
    { title: "Budget Data Entry", seller: "DataBasic", country: "in", rating: 4.0, reviews: 25, price: 5, delivery_time: "3 days", seller_level: "Level 1", publish_date: "2023-11-28", link: "https://www.fiverr.com/databasic/budget-entry" }
  ],
  "virtual assistant": [
    { title: "Virtual Assistant Services", seller: "VirtualAssistant", country: "us", rating: 4.9, reviews: 389, price: 20, delivery_time: "1 day", seller_level: "Top Rated", publish_date: "2023-11-16", link: "https://www.fiverr.com/virtualassistant/va-services" },
    { title: "Email Management", seller: "EmailManager", country: "uk", rating: 4.8, reviews: 267, price: 15, delivery_time: "1 day", seller_level: "Top Rated", publish_date: "2023-10-20", link: "https://www.fiverr.com/emailmanager/email-management" },
    { title: "Social Media Management", seller: "SocialMediaManager", country: "us", rating: 4.7, reviews: 234, price: 25, delivery_time: "2 days", seller_level: "Level 2", publish_date: "2023-09-24", link: "https://www.fiverr.com/socialmediamanager/sm-management" },
    { title: "Administrative Support", seller: "AdminSupport", country: "ca", rating: 4.8, reviews: 289, price: 18, delivery_time: "1 day", seller_level: "Top Rated", publish_date: "2023-12-04", link: "https://www.fiverr.com/adminsupport/admin-support" },
    { title: "Customer Service Support", seller: "CustomerServicePro", country: "au", rating: 4.9, reviews: 312, price: 22, delivery_time: "1 day", seller_level: "Top Rated", publish_date: "2023-11-21", link: "https://www.fiverr.com/customerservicepro/customer-service" },
    { title: "Budget VA Services", seller: "VABasic", country: "us", rating: 4.0, reviews: 18, price: 12, delivery_time: "2 days", seller_level: "Level 1", publish_date: "2023-11-27", link: "https://www.fiverr.com/vabasic/budget-va" }
  ],
  "business consulting": [
    { title: "Business Strategy Consultation", seller: "StrategyConsultant", country: "us", rating: 4.9, reviews: 234, price: 100, delivery_time: "5 days", seller_level: "Top Rated", publish_date: "2023-11-03", link: "https://www.fiverr.com/strategyconsultant/business-strategy" },
    { title: "Business Plan Development", seller: "BusinessPlanner", country: "uk", rating: 4.8, reviews: 189, price: 120, delivery_time: "7 days", seller_level: "Top Rated", publish_date: "2023-10-07", link: "https://www.fiverr.com/businessplanner/business-plan" },
    { title: "Marketing Consultation", seller: "MarketingConsultant", country: "us", rating: 4.7, reviews: 156, price: 80, delivery_time: "4 days", seller_level: "Level 2", publish_date: "2023-09-12", link: "https://www.fiverr.com/marketingconsultant/marketing-consultation" },
    { title: "Financial Consulting", seller: "FinancialConsultant", country: "ca", rating: 4.8, reviews: 201, price: 110, delivery_time: "6 days", seller_level: "Top Rated", publish_date: "2023-11-28", link: "https://www.fiverr.com/financialconsultant/financial-consulting" },
    { title: "Startup Mentorship", seller: "StartupMentor", country: "au", rating: 4.9, reviews: 267, price: 90, delivery_time: "5 days", seller_level: "Top Rated", publish_date: "2023-11-15", link: "https://www.fiverr.com/startupmentor/startup-mentorship" }
  ]
};

function generateMockGigs(baseGigs: Gig[], count: number): Gig[] {
  const result: Gig[] = [];
  
  for (let i = 0; i < count; i++) {
    const base = baseGigs[i % baseGigs.length];
    result.push({
      ...base,
      title: base.title + (i > 0 ? ` #${i + 1}` : ""),
      seller: base.seller + (Math.floor(Math.random() * 2) === 0 ? "+" : ""),
      reviews: base.reviews + Math.floor(Math.random() * 100),
      rating: Math.max(4.0, (base.rating || 4.5) - Math.random() * 0.3),
      link: base.link + `?variant=${i}`
    });
  }
  
  return result;
}

export async function scrapeFiverr(
  category: string,
  country: string,
  minPrice: number,
  maxPrice: number,
  maxResults = 100
): Promise<Gig[]> {
  console.log(`Fetching mock gigs for category: ${category}, country: ${country}, price: $${minPrice}-$${maxPrice}`);
  
  const baseGigs = MOCK_GIGS_DATA[category.toLowerCase()] || [];
  
  if (baseGigs.length === 0) {
    console.log(`No mock data for category: ${category}`);
    return [];
  }
  
  let gigs = generateMockGigs(baseGigs, maxResults);
  
  if (country) {
    gigs = gigs.filter(g => g.country.toLowerCase() === country.toLowerCase());
  }
  
  gigs = gigs.filter(g => g.price && g.price >= minPrice && g.price <= maxPrice);
  
  console.log(`Returning ${gigs.length} gigs`);
  return gigs;
}

export function computeTrendingScore(gig: Gig): number {
  let score = 0;

  if (gig.rating) score += gig.rating * 20;
  score += gig.reviews * 0.5;
  if (gig.price) score += Math.max(0, 100 - gig.price);

  return Number(score.toFixed(2));
}

export async function getTrending(
  category: string,
  country: string,
  minPrice: number,
  maxPrice: number
) {
  const gigs = await scrapeFiverr(category, country, minPrice, maxPrice);

  gigs.forEach((g) => {
    g.trending_score = computeTrendingScore(g);
  });

  gigs.sort((a, b) => (b.trending_score! - a.trending_score!));

  return gigs;
}
