import KnowledgeArticle from "./templates/knowledge-article.html";
import SimpleLandingPage from "./templates/landing-page.html";
import AnnouncementArticle from "./templates/announcement.html";
import TypographyPage from "./templates/typography.html";

export default {
    title: "Content/Examples",
  };

  export const Announcement = () => {
    return AnnouncementArticle;
  };

  export const KnowledgeArticlePage = () => {
    return KnowledgeArticle;
  };

  export const LandingPage = () => {
    return SimpleLandingPage;
  }

  export const Typography = () => {
    return TypographyPage;
  };
