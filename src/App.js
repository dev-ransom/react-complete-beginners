import Footer  from "./footer"; 
function App() {
   const container = {
    width: '200px',
    height: '400px',
    backgroundColor: '#eee',
    boxShadow: '0 0 10px black',
    margin: '0 auto',
    borderRadius: '20px',
    textAlign: 'center',
  };
  const headingStyle = {
    fontSize: '24px',
    color: 'red',
    background: 'orange',
    fontWeight: '500',
    textAlign: 'center',
    borderRadius: '20px',
  };
  
  const leadText = {
    color: 'blue',
    fontSize: '14px',
    textAlign: 'center',
  };
  
   const listContainer = {
    color: 'purple',
    fontSize: '14px',
    listStyle: 'none',
    textAlign: 'left',
  };

  const clickBtn = {
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    color: 'black',
    padding: '2px 10px',

  };
  return (
   
    <div style = {container}>
      <h1 style = {headingStyle} >sunday ransom</h1>
      <p style = {leadText} >I'm a child of God a front end developer with passion for excellence</p>
      <ul style = {listContainer}>
        <li>Koinonia abuja</li>
        <li>cave of adullam</li>
        <li>the ark tolu of God</li>
      </ul>
      <button style = {clickBtn}>click me</button>
      <Footer />
    </div>
    
  );
  
  
}

export default App;
