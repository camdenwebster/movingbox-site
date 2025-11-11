#!/bin/bash

# Hero Image Converter Script
# Converts PNG images to optimized WebP format with 50% resizing
# Usage: ./convert-hero-images.sh <input_png> <output_webp>

set -e

# Check if required arguments are provided
if [ $# -ne 2 ]; then
    echo "Usage: $0 <input_png> <output_webp>"
    echo "Example: $0 'Light hero.png' 'docs/images/hero-light.webp'"
    exit 1
fi

INPUT_PNG="$1"
OUTPUT_WEBP="$2"

# Check if input file exists
if [ ! -f "$INPUT_PNG" ]; then
    echo "Error: Input file '$INPUT_PNG' not found"
    exit 1
fi

# Check if cwebp is available
if ! command -v cwebp &> /dev/null; then
    echo "Error: cwebp is not installed. Please install webp tools."
    exit 1
fi

# Create output directory if it doesn't exist
OUTPUT_DIR=$(dirname "$OUTPUT_WEBP")
mkdir -p "$OUTPUT_DIR"

echo "Converting '$INPUT_PNG' to '$OUTPUT_WEBP'..."

# Get original dimensions
DIMENSIONS=$(identify -format "%wx%h" "$INPUT_PNG" 2>/dev/null || echo "")

if [ -z "$DIMENSIONS" ]; then
    echo "Warning: Could not determine image dimensions. Using cwebp auto-resize."
    # Convert with 50% resize (cwebp will auto-detect dimensions)
    cwebp -resize 50% -q 85 -m 6 "$INPUT_PNG" -o "$OUTPUT_WEBP"
else
    # Parse width and height
    WIDTH=$(echo "$DIMENSIONS" | cut -d'x' -f1)
    HEIGHT=$(echo "$DIMENSIONS" | cut -d'x' -f2)
    
    # Calculate 50% dimensions
    NEW_WIDTH=$((WIDTH / 2))
    NEW_HEIGHT=$((HEIGHT / 2))
    
    echo "Original size: ${WIDTH}x${HEIGHT}"
    echo "New size: ${NEW_WIDTH}x${NEW_HEIGHT}"
    
    # Convert with specific dimensions
    cwebp -resize "$NEW_WIDTH" "$NEW_HEIGHT" -q 85 -m 6 "$INPUT_PNG" -o "$OUTPUT_WEBP"
fi

echo "✅ Conversion complete: '$OUTPUT_WEBP'"
echo "📊 File size: $(du -h "$OUTPUT_WEBP" | cut -f1)"