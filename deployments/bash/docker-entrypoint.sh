#!/bin/sh

# Generate the env-config.js file dynamically
echo "Generating runtime environment variables..."

# Override the .env file with environment variable values
echo "ENVIRONMENT_STATE=${ENVIRONMENT_STATE}" > .env
echo "NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}" >> .env
echo "NEXT_PUBLIC_RECAPTCHA_SITE_KEY=${NEXT_PUBLIC_RECAPTCHA_SITE_KEY}" >> .env
echo "NEXT_PUBLIC_RECAPTCHA_SECRET_KEY=${NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}" >> .env

echo "Environment variables injected into .env"
echo "Starting the application..."

# Start the Node.js server
exec node ./server.js
