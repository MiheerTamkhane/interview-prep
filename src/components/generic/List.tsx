import React from "react";

type ListProps<T> = {
  items: T[];
};

const List = <T extends { id: number; name: string }>({
  items,
}: ListProps<T>) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default List;
