export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  loginUser?: Maybe<User>;
  logoutUser?: Maybe<Scalars['Boolean']>;
  registerUser?: Maybe<User>;
};


export type MutationLoginUserArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRegisterUserArgs = {
  cognoms?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  nom: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  loggedUser?: Maybe<User>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
};


export type QueryUserArgs = {
  userId: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  /** ID of the user */
  id?: Maybe<Scalars['Int']>;
  /** Username of the user */
  username?: Maybe<Scalars['String']>;
};
