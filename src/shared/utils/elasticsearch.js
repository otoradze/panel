// would like to talk about this
console.log(2);
// import { data } from '../modal/data';
// const client = new Client({ node: 'http://localhost:9200' });
// export async function searchData(query) {
//   const response = await client.search({
//     index: 'my_index',
//     body: {
//       query: {
//         multi_match: {
//           query,
//           fields: ['name', 'email', 'role'],
//         },
//       },
//     },
//   });
//   return response.body.hits.hits.map((hit) => hit._source);
// }

// export async function indexData() {
//   try {
//     const body = data.flatMap((doc) => [
//       { index: { _index: 'my_index' } },
//       doc,
//     ]);
//     const response = await client.bulk({ refresh: true, body });
//     console.log(`${response.body.items.length} documents indexed.`);
//   } catch (error) {
//     console.error(`Indexing failed: ${error}`);
//   }
// }
