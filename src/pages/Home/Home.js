import React from 'react'
import './home.css'

function Home(user) {
  const data = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Victor Wayne'},
    {id: 3, name: 'Doe'},
    {id: 4, name: 'Wayne'},
    {id: 5, name: 'Jane'},
    {id: 6, name: 'Victor'},
    {id: 7, name: 'Joe'},
    {id: 8, name: 'Way'},
    {id: 9, name: 'Jan'},
  ]
  return (
    <>
      <table class="table bg-white">
        <thead>
          <tr>
            <th scope="col">name</th>
          </tr>
        </thead>
        <tbody>
        {data.map((user) => (
          <div >
              <tr>
                <td>{user.name}</td>
              </tr>
          </div>
        ))}
      </tbody>
      </table>
    </>
  )
}

export default Home
