FROM node:16

EXPOSE 2307

RUN apt-get update \
    && \
    apt-get install -y --no-install-recommends --no-install-suggests \
      git

WORKDIR /app

# Add the source files
COPY . .

# Run the discord bot
CMD [ "/start.sh" ]
