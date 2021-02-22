import express from 'express';
import pkg from 'apollo-server-express';
const { ApolloServer } = pkg;
// import pkg from 'apollo-server';

import TypeDefs from './data/schema/index.js';
import Resolvers from './data/resolvers/index.js';
import checkUserPermission from './data/modules/permisions/check.js';
const app = express();
const port = 5000;



const server = new ApolloServer({
  typeDefs: TypeDefs,
  resolvers: Resolvers,
  context: async ({ req }) => {
    const token = req.headers.authorization;
    
    const userPermissions = await checkUserPermission(token.replace('Bearer ',''));
    if (userPermissions instanceof Error) {
      return { err: new Error('Invalid token')};
    }
    console.log(' - qq:20 >', userPermissions); // eslint-disable-line no-console
    return userPermissions;
    
    // console.log(' - BOG >', 'Bogdan token: ' + token); // eslint-disable-line no-console
    // {      
    // user: 'Bogdan token: ' + token,
    // userHas: async (perm) => {
    //   const userId = token;
    //   // await Permissions.findAll({ where: { userId }})
    //   const permissions = await Permissions.findAll({ where: { userId }});
    //   if (!permissions.includes('admin.user-delete')) {
    //     throw new Error('Don\'t have permissions');
    //   }
    // }
    // };
    // permissions: ['admin.post-create', 'admin.post-delete'],
  }
});

// app.use('/graphql', (req, res, next) => {
//   req.uuu = true;
//   return next();
// });

server
  .applyMiddleware({
    app,
    // app: (...args) => {
    //   console.log(' - args:18 >', args); // eslint-disable-line no-console
    //   return app(...args);
    // },
    path: '/graphql',
  });

// app.use(server.graphqlPath);

app.listen({ port: port}, () => {
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
});

// server.listen({ port: port }).then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}/graphql`);
// });
