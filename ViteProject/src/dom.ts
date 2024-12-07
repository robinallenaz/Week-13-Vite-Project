// dom.ts

import { fetchEntities, createEntity, deleteEntity } from './api';

export function setupEventListeners() {
  const form = document.getElementById('entity-form') as HTMLFormElement;
  const fetchButton = document.getElementById('fetch-entities') as HTMLButtonElement;

  form.addEventListener('submit', async (event: Event) => {
    event.preventDefault();
    const nameInput = document.getElementById('entity-name') as HTMLInputElement;
    await createEntity(nameInput.value);
    nameInput.value = '';
    displayEntities();
  });

  fetchButton.addEventListener('click', displayEntities);
}

export async function displayEntities() {
  const entities = await fetchEntities();
  const entityList = document.getElementById('entity-list') as HTMLTableSectionElement;
  entityList.innerHTML = ''; // Clear existing entities

  const table = document.createElement('table');
  table.className = 'table table-striped';
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  table.appendChild(thead);
  table.appendChild(tbody);
  entityList.appendChild(table);

  const tr = document.createElement('tr');
  thead.appendChild(tr);
  const thId = document.createElement('th');
  thId.textContent = 'ID';
  const thName = document.createElement('th');
  thName.textContent = 'Name';
  const thActions = document.createElement('th');
  thActions.textContent = 'Actions';
  tr.appendChild(thId);
  tr.appendChild(thName);
  tr.appendChild(thActions);

  entities.forEach(entity => {
    const entityRow = document.createElement('tr');
    entityRow.innerHTML = `
      <td>${entity.id}</td>
      <td>${entity.name}</td>
      <td><button class="btn btn-danger" onclick="deleteEntity(${entity.id})">Delete</button></td>
    `;
    tbody.appendChild(entityRow);
  });
}
