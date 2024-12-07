// api.ts

const apiUrl = 'http://localhost:3000/entities';

export async function fetchEntities() {
  try {
    const response = await fetch(apiUrl);
    const entities: { id: number; name: string }[] = await response.json();
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
