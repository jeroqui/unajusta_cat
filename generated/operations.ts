import { DocumentNode } from 'graphql';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
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

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users?: Array<{ __typename: 'User', id?: number | null, username?: string | null }> | null };

export type GetLoggedUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLoggedUserQuery = { __typename?: 'Query', loggedUser?: { __typename?: 'User', id?: number | null, username?: string | null } | null };

export type LoginUserMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser?: { __typename?: 'User', id?: number | null, username?: string | null } | null };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', logoutUser?: boolean | null };

export type RegisterUserMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  nom: Scalars['String'];
  cognoms?: InputMaybe<Scalars['String']>;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser?: { __typename?: 'User', id?: number | null, username?: string | null } | null };


export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a Vue component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetUsersQuery();
 */
export function useGetUsersQuery(options: VueApolloComposable.UseQueryOptions<GetUsersQuery, GetUsersQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetUsersQuery, GetUsersQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetUsersQuery, GetUsersQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, {}, options);
}
export function useGetUsersLazyQuery(options: VueApolloComposable.UseQueryOptions<GetUsersQuery, GetUsersQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetUsersQuery, GetUsersQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetUsersQuery, GetUsersQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, {}, options);
}
export type GetUsersQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetUsersQuery, GetUsersQueryVariables>;
export const GetLoggedUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLoggedUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loggedUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useGetLoggedUserQuery__
 *
 * To run a query within a Vue component, call `useGetLoggedUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLoggedUserQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetLoggedUserQuery();
 */
export function useGetLoggedUserQuery(options: VueApolloComposable.UseQueryOptions<GetLoggedUserQuery, GetLoggedUserQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetLoggedUserQuery, GetLoggedUserQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetLoggedUserQuery, GetLoggedUserQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetLoggedUserQuery, GetLoggedUserQueryVariables>(GetLoggedUserDocument, {}, options);
}
export function useGetLoggedUserLazyQuery(options: VueApolloComposable.UseQueryOptions<GetLoggedUserQuery, GetLoggedUserQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetLoggedUserQuery, GetLoggedUserQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetLoggedUserQuery, GetLoggedUserQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetLoggedUserQuery, GetLoggedUserQueryVariables>(GetLoggedUserDocument, {}, options);
}
export type GetLoggedUserQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetLoggedUserQuery, GetLoggedUserQueryVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useLoginUserMutation({
 *   variables: {
 *     username: // value for 'username'
 *     password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(options: VueApolloComposable.UseMutationOptions<LoginUserMutation, LoginUserMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<LoginUserMutation, LoginUserMutationVariables>>) {
  return VueApolloComposable.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
}
export type LoginUserMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogoutUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logoutUser"}}]}}]} as unknown as DocumentNode;

/**
 * __useLogoutUserMutation__
 *
 * To run a mutation, you first call `useLogoutUserMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useLogoutUserMutation();
 */
export function useLogoutUserMutation(options: VueApolloComposable.UseMutationOptions<LogoutUserMutation, LogoutUserMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<LogoutUserMutation, LogoutUserMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument, options);
}
export type LogoutUserMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<LogoutUserMutation, LogoutUserMutationVariables>;
export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nom"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cognoms"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"nom"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nom"}}},{"kind":"Argument","name":{"kind":"Name","value":"cognoms"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cognoms"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRegisterUserMutation({
 *   variables: {
 *     username: // value for 'username'
 *     email: // value for 'email'
 *     password: // value for 'password'
 *     nom: // value for 'nom'
 *     cognoms: // value for 'cognoms'
 *   },
 * });
 */
export function useRegisterUserMutation(options: VueApolloComposable.UseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>>) {
  return VueApolloComposable.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
}
export type RegisterUserMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RegisterUserMutation, RegisterUserMutationVariables>;