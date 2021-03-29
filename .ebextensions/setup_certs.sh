#!/bin/bash

# Install certbot for grabbing certs
#wget https://dl.eff.org/certbot-auto;chmod a+x certbot-auto

# Install TLS stuff
#data_path="/etc/letsencrypt"
#if [ ! -e "$data_path/conf/options-ssl-nginx.conf" ] || [ ! -e "$data_path/conf/ssl-dhparams.pem" ]; then
# echo "### Downloading recommended TLS parameters ..."
#  mkdir -p "$data_path/conf"
#  curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/certbot_nginx/_internal/tls_configs/options-ssl-nginx.conf > "$data_path/options-ssl-nginx.conf"
#  curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot/certbot/ssl-dhparams.pem > "$data_path/ssl-dhparams.pem"
# echo
#fi

# Download the new certificates
#docker stop $(docker ps -q --filter ancestor=liannus/tbwsite:reverseproxy )
#sudo ./certbot-auto certonly --standalone --debug --non-interactive --email contact.thompsonboilerworks@gmail.com --agree-tos --domains thompsonboilerworks.ca --keep-until-expiring
