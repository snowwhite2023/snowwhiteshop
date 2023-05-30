

export async function POST(request: Request) {
  const url = 'https://showwhite.getgrist.com/api/docs/sxth2h76uq3zq453mG8aAr/tables/Table1/records';
  try {
   const data = await request.json();
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 88798151f97cc5789678dfb55d4e35f4a46216d5',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }

    const result = await response.json();
   

    return new Response(JSON.stringify(result), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
