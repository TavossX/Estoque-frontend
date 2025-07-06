# ---- Estágio 1: Build da aplicação React ----
    FROM node:18-alpine as build

    # Define o diretório de trabalho
    WORKDIR /app
    
    # Copia os arquivos de dependências
    COPY package*.json ./
    
    # Instala as dependências
    RUN npm install
    
    # Copia o resto do código do frontend
    COPY . .
    
    # Gera a build de produção
    RUN npm run build
    
    # ---- Estágio 2: Servir a aplicação com Nginx ----
    FROM nginx:stable-alpine
    
    # Copia os arquivos da build do estágio anterior para a pasta do Nginx
    COPY --from=build /app/build /usr/share/nginx/html
    
    # Expõe a porta 80, que o Nginx usa por padrão
    EXPOSE 80
    
    # O Nginx já tem um comando padrão para iniciar o servidor, então CMD não é necessário.