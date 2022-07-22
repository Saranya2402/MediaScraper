# MediaScraper

#Build the docker file to build a docker image to run container locally using the command
docker build -t <name of the image>

#Run the docker image using the following command. 5000 is the port used for server and 3000 for client(front end). Assign it to a public port of your PC
docker run -p 49160:5000 -d <your username>/node-web-app

#database used mySQL db

#For better performance, to scale the scraper to handle ~5000 url at a time - proxies can be used  in the page.launch section of the scraper. so that multiple users can use one proxy.
