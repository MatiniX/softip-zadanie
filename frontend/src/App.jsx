import { useState, useEffect } from 'react';

const TableRow = ({ firstName, lastName, dateOfBirth, workplace }) => {
  return (
    <tr>
      <td>{`${firstName} ${lastName}`}</td>
      <td>{dateOfBirth}</td>
      <td>{workplace}</td>
    </tr>
  );
};

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch('http://localhost:4000/zoznam');
      const data = await response.json();
      setEmployees(data);
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <main className="container">
        <header className="header">Zoznam zamestnancov</header>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Meno</th>
                <th>Dátum narodenia</th>
                <th>Pracovisko</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, idx) => (
                <TableRow key={idx} {...employee} />
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;
