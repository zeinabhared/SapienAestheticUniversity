import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// export const ADD_CONTENT = gql`
//   mutation addContent($content: [ID]!) {
//     addContent(content: $content) {
//        content {
//          _id
//         title
//          description
//          cost
//         creator
//       }
//     }
//   }
// `;

export const SAVE_CONTENT = gql`
  mutation saveContent($id: ID!) {
    saveContent(_id: $id) {
      savedContent {
        _id
      }
    }
  }
`;

export const REMOVE_CONTENT = gql`
   mutation removeContent($contentId: ID!) {
     removeContent(contentId: $contentId) {
        savedContent {
          contentId
          title
          description
          cost 
          creator
       }
     }
   }
`;