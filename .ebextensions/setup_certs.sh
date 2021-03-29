#!/bin/bash

# Install certbot for grabbing certs
curl https://get.acme.sh | sh -s email=contact.thompsonboilerworks@gmail.com
yum -y install socat
mkdir /etc/letsencrypt/live/thompsonboilerworks.ca -p

#Download the new certificates
docker stop $(docker ps -q --filter ancestor=liannus/tbwsite:reverseproxy)
bash ~/.acme.sh/acme.sh --issue --standalone -d thompsonboilerworks.ca \
--key-file       /etc/letsencrypt/live/thompsonboilerworks.ca/privkey.pem  \
--fullchain-file /etc/letsencrypt/live/thompsonboilerworks.ca/fullchain.pem --force
