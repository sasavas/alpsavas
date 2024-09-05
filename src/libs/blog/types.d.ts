interface BlogPostSummary {
  slug: string;
  metadata: BlogMetaData;
}

interface BlogMetaData {
  title: string;
  date: string;
  author: string;
  tags: string[];
  description?: string;
  excerpt: string;
}

interface BlogPost {
  metadata: BlogMetaData;
  source: any;
}