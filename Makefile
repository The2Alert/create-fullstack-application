build:
	npm run frontend:build
	npm run build
	docker build . -t dev2alert/create-fullstack-application
push:
	docker push dev2alert/create-fullstack-application
pull:
	docker pull dev2alert/create-fullstack-application
run:
	docker-compose up
stop:
	docker-compose stop