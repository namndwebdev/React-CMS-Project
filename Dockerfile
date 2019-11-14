FROM node:8
# Create app directory
WORKDIR /home
# Install app dependencies
COPY package*.json ./

RUN npm install
RUN npm run build
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 3001
CMD [ "npm", "start" ]