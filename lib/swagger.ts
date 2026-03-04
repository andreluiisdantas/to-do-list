import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'To Do List',
      version: '1.0.0',
      description: 'API To Do List',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  // Caminho para os arquivos onde você escreverá as anotações do Swagger
  apis: ['./app/api/**/*.ts'], 
};

export const spec = swaggerJsdoc(options);