#!/bin/bash
echo "Preparing static site for deployment..."
echo "Checking required files..."

# Check if index.html exists
if [ -f "index.html" ]; then
    echo "✓ index.html found"
else
    echo "✗ index.html missing"
    exit 1
fi

# Check if required SVG files exist (create placeholders if missing)
for i in {1..3}; do
    if [ ! -f "${i}.svg" ]; then
        echo "Creating placeholder for ${i}.svg"
        cat > "${i}.svg" << EOF
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" fill="#666" />
  <text x="50" y="55" text-anchor="middle" fill="white" font-size="20">${i}</text>
</svg>
EOF
    fi
done

# Check if logo.png exists (create placeholder if missing)
if [ ! -f "logo.png" ]; then
    echo "Creating placeholder for logo.png"
    cat > "logo.png" << EOF
<svg width="100" height="50" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="50" fill="#333" />
  <text x="50" y="30" text-anchor="middle" fill="white" font-size="12">LOGO</text>
</svg>
EOF
fi

echo "✓ Static site ready for deployment"
