function AdminDashboard() {

  const participants = [
    {
      name: "Nivya",
      email: "nivya@email.com",
      event: "AI Conference"
    },
    {
      name: "Rahul",
      email: "rahul@email.com",
      event: "Web Dev Summit"
    },
    {
      name: "Priya",
      email: "priya@email.com",
      event: "Cloud Conference"
    }
  ];

  return (
    <div className="container">

      <h2>Registered Participants</h2>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Event</th>
          </tr>
        </thead>

        <tbody>
          {participants.map((p, index) => (
            <tr key={index}>
              <td>{p.name}</td>
              <td>{p.email}</td>
              <td>{p.event}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default AdminDashboard;