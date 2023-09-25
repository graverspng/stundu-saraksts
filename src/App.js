import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <table class="tabula">
      <tbody>
        <tr class="tr1">
          <td>
            <span class="info2">Pārst. </span>
              <a>Pirmdiena,  </a>
              <a>2023</a>
              <small>.gada </small>
              <b>25.septembris</b>
              <span class="nedruka">
                <span slass="nedruka"> [šodien]</span>
              </span>
          </td>
        </tr>
        <tr>
          <td valign="top">
            <table class="tabula2">
            <tbody>
              <tr class="stunda1">
                <td rowspan="2" valign="middle"></td>
                <td width="60%" class="txm">Sistēmu programmēšana</td>
                <td width="35%" class="txn">C.203-J.Krīgerts</td>
              </tr>
            </tbody>
            </table>
          </td>
        </tr>
      </tbody>
        
    </table>
</div>
  );
}

export default App;
