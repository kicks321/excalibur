import { DataSource } from 'typeorm';
import { User } from '../database/entities/User.entity';

export const Query = {
  Query: {
    books: async (_: any, { args }: any, ctx: { dataSources: { database: DataSource } }) => {
      const data = await ctx.dataSources.database.getRepository(User).findOne({
        where: {
          username: 'sam@gmail.com',
        },
      });

      if (data) {
        console.log(data);
      }

      return [
        {
          title: 'Made of Wolves',
          authorId: '1',
        },
        {
          title: 'The Visitor in the City',
          authorId: '2',
        },
      ];
    },
  },
  Book: {
    author: (parent: { authorId: string | number }) => {
      return {
        id: parent.authorId,
        name: parent.authorId == '1' ? 'James Carter' : 'Arthur Novotic',
      };
    },
  },
};
