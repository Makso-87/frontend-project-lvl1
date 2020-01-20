install:
	npm install

build:
	npm run build
	
start:
	npx babel-node src/brain-games.js

publish:
	npm publish --dry-run
lint:
	npx eslint . --fix
	