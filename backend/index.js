const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const employees = [
  {
    firstName: 'Jozef',
    lastName: 'Novák',
    dateOfBirth: '1988-12-01',
    workplace: 'Sklad',
  },
  {
    firstName: 'Andrej',
    lastName: 'Urda',
    dateOfBirth: '1989-09-11',
    workplace: 'Pokladňa',
  },
  {
    firstName: 'Juraj',
    lastName: 'Taraba',
    dateOfBirth: '1994-07-19',
    workplace: 'Sklad',
  },
  {
    firstName: 'Anna',
    lastName: 'Murínová',
    dateOfBirth: '1990-13-24',
    workplace: 'Pokladňa',
  },
  {
    firstName: 'Mária',
    lastName: 'Ružičkova',
    dateOfBirth: '1999-10-30',
    workplace: 'Učtovníctvo',
  },
  {
    firstName: 'Marcel',
    lastName: 'Starý',
    dateOfBirth: '1994-01-20',
    workplace: 'Logistika',
  },
  {
    firstName: 'Peter',
    lastName: 'Pohorelec',
    dateOfBirth: '1997-05-05',
    workplace: 'Logistika',
  },
  {
    firstName: 'Anton',
    lastName: 'Rychlý',
    dateOfBirth: '1984-11-14',
    workplace: 'Manažment',
  },
  {
    firstName: 'Pavol',
    lastName: 'Pavel',
    dateOfBirth: '1996-06-02',
    workplace: 'Logistika',
  },
  {
    firstName: 'Matej',
    lastName: 'Driek',
    dateOfBirth: '1990-11-12',
    workplace: 'Sklad',
  },
];

app.get('/zoznam', (req, res) => {
  res.send(employees);
});

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});
