FROM node:10
# Set the working directory to /client
WORKDIR /usr/src/app/client
# Copy all 
COPY . .
# Install dependencies
RUN npm install
# Make port 3000 available to the world outside this container
EXPOSE 3000
# Run the app when the container launches
CMD ["npm", "start"]