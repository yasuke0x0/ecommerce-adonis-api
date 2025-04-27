# Start server
server-start:
	node ace serve --hmr

# List routes
list-routes:
	node ace list:routes


# Build code pour deployment
build:
	node ace build

# Run ESLint and auto-fix issues
lint-auto-fix:
	npm run lint -- --fix

# Format code
prettify:
	npm run format
