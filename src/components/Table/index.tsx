import React from 'react';
import { Item } from '../../App';

interface ITable {
  table: Array<Item>;
}
const Table: React.FC<ITable> = ({ table }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>nome</th>
          <th>dataNascimento</th>
          <th>cpf</th>
          <th>senha</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        {table.map((tb) => (
          <tr>
            <td>{tb.id}</td>
            <td>{tb.nome}</td>
            <td>{tb.dataNascimento}</td>
            <td>{tb.cpf}</td>
            <td>{tb.senha}</td>
            <td>{tb.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
