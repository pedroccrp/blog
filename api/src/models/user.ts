import mongoose, { Schema, Document, FilterQuery, UpdateQuery } from 'mongoose';

export type UserData = {
  name: string;
  email: string;
  avatar?: string;

  auth0: string;

  likedArticles?: string[];
  likedComments?: string[];

  articleCollections?: string[];

  type?: 'WRITER' | 'VIEWER';

  articles?: string[];
  comments?: string[];
};

export interface UserDocument extends Document, UserData {}

export type UserUpdate = UpdateQuery<UserDocument>;
export type UserFilter = FilterQuery<UserDocument>;

const UserSchema: Schema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
    email: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    avatar: {
      type: Schema.Types.String,
      default:
        'https://gravatar.com/avatar/a8988457da08ddbacc5cd21350f2a406?s=400&d=robohash&r=x',
    },

    auth0: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },

    likedArticles: {
      type: [Schema.Types.ObjectId],
      default: [],
    },
    likedComments: {
      type: [Schema.Types.ObjectId],
      default: [],
    },

    articleCollections: {
      type: [Schema.Types.ObjectId],
      default: [],
    },

    type: {
      type: Schema.Types.String,
      enum: ['WRITER', 'VIEWER'],
      default: 'VIEWER',
    },

    articles: {
      type: [Schema.Types.ObjectId],
      default: [],
    },
    comments: {
      type: [Schema.Types.ObjectId],
      default: [],
    },
  },
  { timestamps: true },
);

const User = mongoose.model<UserDocument>('User', UserSchema);

export default User;
