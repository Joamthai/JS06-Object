const notebook = {
    brand: 'ASUS',
    model: 'Vivobook D413IA-EB303TS',
    processor: 'AMD Ryzen 7 4700U 3.6GHz',
    graphics: 'Integrated Graphics : AMD Radeon Graphics',
    ram: '8GB DDR4 Onboard',
    storage: '512GB PCIe NVMe M.2 SSD'
  };

  const newNB1 = {};
  for(let key in notebook) {
    newNB1[key] = notebook[key];
  };
  console.log(newNB1);

  const newNB2 = Object.assign({}, notebook);
  console.log(newNB2);