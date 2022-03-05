#!/usr/bin/env bash

# Update and install
git pull
yarn install --production --frozen-lockfile

# Add rest endpoints
yarn rest
# Run the client
yarn client
