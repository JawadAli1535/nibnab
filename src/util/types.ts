import { z } from "zod";

export const AuthorDataSchema = z.object({
  name: z.string(),
  avatar: z.string(),
  profile: z.string(),
});

export type AuthorData = z.infer<typeof AuthorDataSchema>;

export const PostDataSchema = z.object({
  url: z.string(),
  content: z.string(),
  contentEmbed: z.string(),
  contentType: z.string(),
  author: AuthorDataSchema,
});

export type PostData = z.infer<typeof PostDataSchema>;

export const MatchDataSchema = z.object({
  posts: z.array(PostDataSchema),
  description: z.string(),
  emoji: z.string(),
  image: z.string(),
});

export type MatchData = z.infer<typeof MatchDataSchema>;

export const BusinessMatchLeadConversationMessageSchema = z.object({
  message: z.string(),
  isAgent: z.boolean(),
});

export type BusinessMatchLeadConversationMessage = z.infer<
  typeof BusinessMatchLeadConversationMessageSchema
>;

export const BusinessMatchLeadSchema = z.object({
  name: z.string(),
  avatar: z.string(),
  conversation: z.array(BusinessMatchLeadConversationMessageSchema),
});

export type BusinessMatchLead = z.infer<typeof BusinessMatchLeadSchema>;

export const BusinessMatchDataSchema = z.object({
  business: z.object({
    name: z.string(),
    logo: z.string(),
  }),
  leads: z.array(BusinessMatchLeadSchema),
  image: z.string(),
  ctaLinkUrl: z.string(),
});

export type BusinessMatchData = z.infer<typeof BusinessMatchDataSchema>;
