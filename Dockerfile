# Use a imagem oficial do Node.js como base
FROM node:21-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o arquivo package.json e package-lock.json (se existir)
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante do código para o contêiner
COPY . .

# Compila o projeto
RUN npm run build

# Expõe a porta que o Vite usa (por padrão, 5173)
EXPOSE 5173

# Comando para rodar a aplicação
CMD ["npm", "run", "preview"]
