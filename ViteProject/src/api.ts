// api.ts

const apiUrl = 'http://localhost:3000/entities';

export async function fetchEntities() {
  try {
    console.log('Fetching entities...');
    console.log(`Requesting from: ${apiUrl}`);
    const response = await fetch(apiUrl);
    console.log(`Response status: ${response.status}`);
    const responseBody = await response.text();
    console.log('Response body:', responseBody);
    const entities: { id: number; name: string }[] = JSON.parse(responseBody);
    return entities;
  } catch (error) {
    console.error('Error fetching entities:', error);
    return [];
  }
}

export async function createEntity(name: string) {
  const newEntity = { name };

  try {
    await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEntity)
    });
  } catch (error) {
    console.error('Error creating entity:', error);
  }
}

export async function deleteEntity(id: number) {
  try {
    await fetch(`${apiUrl}/${id}`, {
      method: 'DELETE'
    });
  } catch (error) {
    console.error('Error deleting entity:', error);
  }
}
