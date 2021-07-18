#!/bin/bash

echo "### Creating dummy certificate for $domains ..."
path="/etc/letsencrypt/live/thompsonboilerworks.com"
mkdir -p "$path"
openssl req -x509 -nodes -newkey rsa:2048 -days 1 \
  -keyout "$path/privkey.pem" \
  -out "$path/fullchain.pem" \
  -subj "/CN=localhost"
echo
