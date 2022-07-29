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

export type Esport = {
  __typename?: 'Esport';
  id?: Maybe<Scalars['Int']>;
  nom?: Maybe<Scalars['String']>;
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

export type Persona = {
  __typename?: 'Persona';
  active?: Maybe<Scalars['Boolean']>;
  cognoms?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  nom?: Maybe<Scalars['String']>;
  persist?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  esports?: Maybe<Array<Esport>>;
  loggedUser?: Maybe<User>;
  persona?: Maybe<Persona>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
};


export type QueryPersonaArgs = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};


export type QueryUserArgs = {
  userId?: InputMaybe<Scalars['Int']>;
  username?: InputMaybe<Scalars['String']>;
};

export type Torneig = {
  __typename?: 'Torneig';
  descripcio?: Maybe<Scalars['String']>;
  grupsMaxPersones?: Maybe<Scalars['Int']>;
  grupsMinPersones?: Maybe<Scalars['Int']>;
  /** Id del torneig */
  id?: Maybe<Scalars['String']>;
  nom?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  /** ID of the user */
  id?: Maybe<Scalars['Int']>;
  persona?: Maybe<Persona>;
  /** Username of the user */
  username?: Maybe<Scalars['String']>;
};
