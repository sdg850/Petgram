import { useMutation, gql } from "@apollo/client";

const LOGIN = gql`
 mutation login($input: UserCredentials!){
     login (input: $input)
 }
`
export const  LoginMutation = () => {
    const [mutation, { loading: MutationLoading , error: MutationError}] = useMutation(LOGIN)
    return { mutation, MutationLoading, MutationError };

}