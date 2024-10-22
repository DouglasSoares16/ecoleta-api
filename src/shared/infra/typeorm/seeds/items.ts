import { Item } from "@modules/points/infra/typeorm/entities/Item";

import createConnection from "../connection";

async function addItems() {
  const connection = await createConnection();

  const newItems = [
    { title: "Lâmpadas", image: "lampadas.svg" },
    { title: "Pilhas e Baterias", image: "baterias.svg" },
    { title: "Papéis e Papelão", image: "papeis-papelao.svg" },
    { title: "Resíduos Eletrônicos", image: "eletronicos.svg" },
    { title: "Resíduos Orgânicos", image: "organicos.svg" },
    { title: "Óleo de Cozinha", image: "oleo.svg" },
  ];

  const itemRepository = connection.getRepository(Item);

  const items = itemRepository.create(newItems);

  await itemRepository.save(items);

  await connection.close();
}

addItems().then(() => console.log("Items Created"));
