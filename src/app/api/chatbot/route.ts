import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const targetUrl = 'https://udify.app/chatbot/N6i68leIdAinhN9D';
  
  try {
    // Forward the request to the target URL
    const response = await fetch(targetUrl, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      },
    });
    
    // Get the response data
    let data = await response.text();
    
    // Comprehensive replacements to fully rebrand the content
    
    // Replace branding text
    data = data.replace(/Dify/gi, 'Outhad AI'); // Case insensitive replacement
    data = data.replace(/\budify\b/gi, 'outhad'); // Word boundary to avoid partial replacements
    
    // Replace URLs and paths
    data = data.replace(/https:\/\/udify\.app/g, 'https://outhad.com');
    data = data.replace(/udify\.app/g, 'outhad.com');
    
    // Replace any asset paths
    data = data.replace(/\/assets\/dify/g, '/assets/outhad');
    
    // Replace meta tags
    data = data.replace(/<meta[^>]*content="[^"]*Dify[^"]*"[^>]*>/gi, (match) => {
      return match.replace(/Dify/gi, 'Outhad AI');
    });
    
    // Create a new response with modified headers
    const newResponse = new NextResponse(data, {
      status: response.status,
      statusText: response.statusText,
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'text/html; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'X-Powered-By': 'Outhad AI',
        'Server': 'Outhad Server',
      },
    });
    
    return newResponse;
  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch from target service' },
      { status: 500 }
    );
  }
}

// Handle POST requests too if needed
export async function POST(request: NextRequest) {
  const targetUrl = 'https://cloud.outhad.com/chatbot/f3AsP40F44L0Rog1';
  
  try {
    const body = await request.json();
    
    // Forward the request with the body to the target URL
    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
      body: JSON.stringify(body),
    });
    
    // Get the response data and replace branding
    let data = await response.text();
    
    // Comprehensive replacements
    data = data.replace(/Dify/gi, 'Outhad AI');
    data = data.replace(/\budify\b/gi, 'outhad');
    data = data.replace(/https:\/\/udify\.app/g, 'https://outhad.com');
    data = data.replace(/udify\.app/g, 'outhad.com');
    
    const contentType = response.headers.get('Content-Type') || 'application/json';
    // If it's a JSON response, parse and modify it more thoroughly
    if (contentType.includes('application/json')) {
      try {
        // Try to parse as JSON for more targeted replacement
        const jsonData = JSON.parse(data);
        
        // Function to recursively replace all string values in an object
        const replaceInObject = (obj: Record<string, unknown>): Record<string, unknown> => {
          if (!obj || typeof obj !== 'object') return obj;
          
          Object.keys(obj).forEach(key => {
            if (typeof obj[key] === 'string') {
              obj[key] = (obj[key] as string)
                .replace(/Dify/gi, 'Outhad AI')
                .replace(/\budify\b/gi, 'outhad');
            } else if (typeof obj[key] === 'object' && obj[key] !== null) {
              obj[key] = replaceInObject(obj[key] as Record<string, unknown>);
            }
          });
          
          return obj;
        };
        
        const modifiedJson = replaceInObject(jsonData);
        data = JSON.stringify(modifiedJson);
      } catch (e) {
        console.error('Error parsing JSON:', e);
        // If JSON parsing fails, continue with the string replacements already done
      }
    }
    
    const newResponse = new NextResponse(data, {
      status: response.status,
      statusText: response.statusText,
      headers: {
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*',
        'X-Powered-By': 'Outhad AI',
        'Server': 'Outhad Server',
      },
    });
    
    return newResponse;
  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch from target service' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
} 