import { useMutation, gql } from "@apollo/client";

const REGISTER = gql`
 mutation signup($input: UserCredentials!){
     signup (input: $input)
 }
`
export const  RegisterMutation = () => {
    const [mutation, { loading: MutationLoading , error: MutationError}] = useMutation(REGISTER)
    return { mutation };

}