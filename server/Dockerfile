FROM node:10
# Set the working directory to /server
WORKDIR /usr/src/app/server
# Copy all 
COPY . .
# Install dependencies
RUN npm install
# Make port 8080 available to the world outside this container
EXPOSE 8080
# Run the app when the container launches
CMD ["npm","start"]