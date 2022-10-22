export const fetchUsers = async (query) => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    ).then((res) => res.json());
    return query
      ? response.filter((user) => user.email.includes(query))
      : response;
    // Имитация работы бэка
  } catch (e) {
    throw new Error('Ошибка загрузки');
  }
};
