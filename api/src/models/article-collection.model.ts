import mongoose, { Schema, Document, FilterQuery, UpdateQuery } from 'mongoose';

export type ArticleCollectionData = {
  name: string;
  owner: string;
  articles?: string[];
};

export interface ArticleCollectionDocument
  extends Document,
    ArticleCollectionData {}

export type ArticleCollectionUpdate = UpdateQuery<ArticleCollectionDocument>;
export type ArticleCollectionFilter = FilterQuery<ArticleCollectionDocument>;

const ArticleCollectionSchema: Schema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    articles: {
      type: [Schema.Types.ObjectId],
      default: [],
    },
  },
  { timestamps: true },
);

const ArticleCollection = mongoose.model<ArticleCollectionDocument>(
  'ArticleCollection',
  ArticleCollectionSchema,
);

export default ArticleCollection;
