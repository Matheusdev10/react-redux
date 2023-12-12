import React from 'react';
import { Users } from '../../pages/Users';

export interface IUser {
  table: Array<Users>;
}

const TableUsers: React.FC<IUser> = ({ table }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>nome</th>
          <th>cpf</th>
          <th>DataNascimento</th>
          <th>email</th>
          <th>senha</th>
        </tr>
      </thead>
      <tbody>
        {table.map(({ id, nome, cpf, dataNascimento, email, senha }) => (
          <tr>
            <td>{id}</td>
            <td>{nome}</td>
            <td>{cpf}</td>
            <td>{dataNascimento}</td>
            <td>{email}</td>
            <td>{senha}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableUsers;
