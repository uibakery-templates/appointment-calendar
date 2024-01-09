const owner = await {{ actions.loadOwner.trigger({ id: data.user_id }) }};
const animal = await {{ actions.loadAnimal.trigger({ id: data.animal_id }) }};
return { appointment: {{ data }}, owner: owner, animal: animal };
