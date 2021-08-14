import { useQuery, gql } from "@apollo/client";

const whitPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const query = (categoryId) => {
   return useQuery(whitPhotos, {
    variables: { categoryId: categoryId }
  })

}
