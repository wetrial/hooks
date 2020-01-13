export function getLists(data) {
  const req = {
    pageSize: data.pageSize || 10,
    page: data.current || 1,
  };
  return new Promise(resolve => {
    setTimeout(() => {
      const results = {
        totalCount: 1000,
        items: [],
      };
      const start = req.page * req.pageSize - req.pageSize + 1;
      for (let index = start; index < start + req.pageSize; index++) {
        results.items.push({
          id: index,
          tenancyName: `Tenant Name - ${index}`,
          name: `name - ${index}`,
          operator: `用户 - ${index}`,
          editionDisplayName: `版本 - ${index}`,
        });
      }
      console.log(`request api :getLists:${JSON.stringify(data)}`);
      resolve(results);
    }, 500);
  });
}

export function getTodos(data) {
  const req = {
    pageSize: data.pageSize || 10,
    page: data.current || 1,
  };
  return new Promise(resolve => {
    setTimeout(() => {
      const results = {
        totalCount: 1000,
        items: [],
      };
      const start = req.page * req.pageSize - req.pageSize + 1;
      for (let index = start; index < start + req.pageSize; index++) {
        results.items.push({
          id: index,
          hostTenancyName: `Tenant Name - ${index}`,
          hostName: `name - ${index}`,
          hostOperator: `用户 - ${index}`,
          hostEditionDisplayName: `版本 - ${index}`,
        });
      }
      console.log(`request api :getTodos:${JSON.stringify(data)}`);
      resolve(results);
    }, 500);
  });
}
