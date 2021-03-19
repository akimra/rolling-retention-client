import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Rolling retention 7-day</h1>
      <table>
        <thead>
          <tr>
            <th>UserID</th><th>Date Registration</th><th>Date Last Activity</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  );
}

export default App;