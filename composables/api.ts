import gql from 'graphql-tag'
import * as VueApolloComposable from '@vue/apollo-composable'

export const LoginUserMutation = gql`
    mutation Mutation($username: String!, $password: String!) {
        loginUser(username: $username, password: $password) {
            id
            username
        }
    }`

export function useLoginUserMutation() {
  return VueApolloComposable.useMutation<any, any>(LoginUserMutation)
}


export const getAllUsersQuery = gql`
    query Test {
        users {
            id
            username
        }
    }`

export function useGetAllUsersQuery() {
  return VueApolloComposable.useQuery<any, any>(getAllUsersQuery, {}, {
    // prefetch: false, // prefetch: false will fetch on client
  })
}
