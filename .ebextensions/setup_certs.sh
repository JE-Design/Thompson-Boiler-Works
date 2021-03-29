#!/bin/bash

# Install certbot for grabbing certs
curl https://get.acme.sh | sh -s email=contact.thompsonboilerworks@gmail.com
source ~/.bashrc
yum -y install socat
mkdir /etc/letsencrypt/live/thompsonboilerworks.ca -p

##Install TLS stuff
data_path="/etc/letsencrypt"
if [ ! -e "$data_path/conf/options-ssl-nginx.conf" ] || [ ! -e "$data_path/conf/ssl-dhparams.pem" ]; then
 echo "### Downloading recommended TLS parameters ..."
  mkdir -p "$data_path/conf"
  curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/certbot_nginx/_internal/tls_configs/options-ssl-nginx.conf > "$data_path/options-ssl-nginx.conf"
  curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot/certbot/ssl-dhparams.pem > "$data_path/ssl-dhparams.pem"
 echo
fi

#Download the new certificates
#docker stop $(docker ps -q --filter ancestor=liannus/tbwsite:reverseproxy 
acme.sh --issue --standalone -d thompsonboilerworks.ca \
--key-file       /etc/letsencrypt/live/thompsonboilerworks.ca/privkey.pem  \
--fullchain-file /etc/letsencrypt/live/thompsonboilerworks.ca/fullchain.pem
#sudo ./certbot-auto certonly --standalone --debug --non-interactive --email contact.thompsonboilerworks@gmail.com --agree-tos --domains thompsonboilerworks.ca --keep-until-expiring
