# Start the development server
Write-Host "Starting Mumbai Property Pal development server..."
Write-Host "The application will be available at http://localhost:5173"

# Run npm install if node_modules doesn't exist
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies..."
    npm install
}

# Start the development server
npm run dev