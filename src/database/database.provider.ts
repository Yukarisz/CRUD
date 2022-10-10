
import { Client } from 'src/users/entities/client.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'Server_Test',
        entities: [
            Client
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];