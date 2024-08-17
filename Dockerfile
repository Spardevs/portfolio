# Etapa de build
FROM node:18-alpine AS build

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o código da aplicação para o container
COPY . .

# Rodar o build da aplicação
RUN npm run build

# Etapa de produção com Nginx
FROM nginx:stable-alpine

# Copiar os arquivos buildados da etapa anterior para o diretório do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar o arquivo de configuração do Nginx, se necessário
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor a porta que o Nginx vai usar
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
