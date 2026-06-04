#!/bin/bash

# Read API key
API_KEY=$(cat /home/max/wordlist/duckdnsapi.txt | tr -d '[:space:]')
DOMAIN="big5personalities"
LOG="/home/max/big5personalities/updateduckdns.log"

# Get current public IP
CURRENT_IP=$(curl -s https://api.ipify.org)

if [ -z "$CURRENT_IP" ]; then
  echo "[$(date)] ERROR: Could not get public IP" >> "$LOG"
  exit 1
fi

# Update DuckDNS
RESPONSE=$(curl -s "https://www.duckdns.org/update?domains=${DOMAIN}&token=${API_KEY}&ip=${CURRENT_IP}")

# Log result
if [ "$RESPONSE" = "OK" ]; then
  echo "[$(date)] SUCCESS: Updated $DOMAIN to $CURRENT_IP" >> "$LOG"
else
  echo "[$(date)] ERROR: DuckDNS response: $RESPONSE (IP: $CURRENT_IP)" >> "$LOG"
fi