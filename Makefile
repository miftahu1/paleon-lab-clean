# Makefile for Northbridge Systems - Clean Control Site

.PHONY: help install dev build start lint clean reset test

help: ## Show this help message
	@echo "Available commands:"
	@echo "  make install    - Install dependencies"
	@echo "  make dev        - Start development server"
	@echo "  make build      - Create production build"
	@echo "  make start      - Run production build locally"
	@echo "  make lint       - Run ESLint"
	@echo "  make clean      - Remove build artifacts"
	@echo "  make reset      - Full reset (clean + reinstall)"
	@echo "  make test       - Build and verify the project"

install: ## Install dependencies
	npm install

dev: ## Start development server
	npm run dev

build: ## Create production build
	npm run build

start: ## Run production server
	npm start

lint: ## Run linter
	npm run lint

clean: ## Remove build artifacts
	rm -rf .next
	rm -rf out

reset: ## Full reset - remove all generated files and reinstall
	@echo "Resetting project to clean state..."
	rm -rf node_modules
	rm -rf .next
	rm -rf out
	rm -f package-lock.json
	npm install
	@echo "Reset complete!"

test: build ## Build and verify project
	@echo "Build successful! Project is ready for deployment."
