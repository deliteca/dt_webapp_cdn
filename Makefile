APP_FOLDER=app

.PHONY: build

build:
	(cd $(APP_FOLDER) && gulp build)

tdd:
	(cd $(APP_FOLDER) && gulp test)
