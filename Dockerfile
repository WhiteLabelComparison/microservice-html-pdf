FROM node:7.9

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app/
RUN chmod 0777 /usr/src/app/files && npm install

EXPOSE 8547
CMD [ "node", "index.js" ]

