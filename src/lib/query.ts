import { graphql } from "../../netlify-connect/graphql";
import { query } from "@yujohnnattrass/connect-client";
// {
//   bookReferencePageCollection {
//     items {
//       sys {
//           id
//       }
//       title
//       author {
//         name
//       }
//       coverImage {
//         url
//       }
//     }
//   }
// }`;

async function getBooks(Astro: any) {
  const booksQuery = graphql(`
    query books {
      allContentfulBook {
        nodes {
          contentful_id
          title
          author {
            name
          }
          coverImage {
            url
          }
        }
      }
    }
  `);

  const books = await query(booksQuery, {}, { Astro });
  return books.allContentfulBook.nodes;
}

export { getBooks };
