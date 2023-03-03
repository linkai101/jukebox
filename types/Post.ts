
export default interface Post {
  id: string;
  author: string; // firebase uid
  title: string;
  content: string;
  // attachments: string[];
}