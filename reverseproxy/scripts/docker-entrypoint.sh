#!/bin/bash

set -e

export AUTH_BASIC_VALUE=off

envsubst '${AUTH_BASIC_VALUE}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

exec "$@"
