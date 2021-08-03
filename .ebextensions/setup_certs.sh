#!/bin/bash

# Install certbot for grabbing certs
curl https://get.acme.sh | sh -s email=contact.thompsonboilerworks@gmail.com
yum -y install socat
mkdir /etc/letsencrypt/live/thompsonboilerworks.com -p

#Download the new certificates
CERT = $(bash ~/.acme.sh/acme.sh --issue --standalone -d thompsonboilerworks.com \
--key-file       /etc/letsencrypt/live/thompsonboilerworks.com/privkey.pem  \
--fullchain-file /etc/letsencrypt/live/thompsonboilerworks.com/fullchain.pem)
docker restart $(docker ps -q --filter ancestor=liannus/tbwsite:reverseproxy)

if [[ CERT -eq 0 || CERT -eq 2 ]]
then 
    exit 0
else
    exit 1
fi

