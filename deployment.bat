heroku login
heroku container:login
heroku container:push web --app rentalproject-api-gateway
heroku container:release web --app rentalproject-api-gateway