import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form, Navbar, Nav } from 'react-bootstrap';
import Login from './login';
import Informasi from './informasi';
import Akun from './akun';
import './App.css';

const dataBunga = [
  { id: 1, nama: 'freeseas', harga: 10000, gambar: '/images/freeseas.webp' },
  { id: 2, nama: 'gardenias', harga: 15000, gambar: '/images/gardenias.webp' },
  { id: 3, nama: 'hydrangeas', harga: 10000, gambar: '/images/hydrangeas.webp' },
  { id: 4, nama: 'lily', harga: 15000, gambar: '/images/lily.webp' },
  { id: 5, nama: 'lotus', harga: 10000, gambar: '/images/lotus.webp' },
  { id: 6, nama: 'morning glory', harga: 15000, gambar: '/images/morningglory.webp' },
];

const App = () => {
  const [keranjang, setKeranjang] = useState([]);
  const [saldoDompet, setSaldoDompet] = useState(0);
  const [totalHarga, setTotalHarga] = useState(0);
  const [inputDompet, setInputDompet] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const tambahKeKeranjang = (bunga) => {
    setKeranjang([...keranjang, bunga]);
    setTotalHarga(totalHarga + bunga.harga);
  };

  const prosesPembelian = () => {
    if (saldoDompet >= totalHarga) {
      setSaldoDompet(saldoDompet - totalHarga);
      setKeranjang([]);
      setTotalHarga(0);
      alert('Transaksi berhasil!');
    } else {
      alert('Saldo dompet tidak mencukupi!');
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setKeranjang([]);
    setSaldoDompet(0);
    setTotalHarga(0);
    setInputDompet('');
  };

  const handleRemoveItem = (index) => {
    const updatedKeranjang = [...keranjang];
    const removedItem = updatedKeranjang.splice(index, 1)[0];
    setKeranjang(updatedKeranjang);
    setTotalHarga(totalHarga - removedItem.harga);
  };

  return (
    <Router>
      <Navbar style={{ backgroundColor: 'lavender', backgroundSize: 'cover', height: '65px', textAlign: 'center'}}>
        <Container >
        <Navbar.Brand href="/informasi" style={{ color: 'white' }}>
          <img src="/images/logo1.jpeg" alt="Logo" style={{ height: '65px', borderRadius:'10px'}} /> 
        </Navbar.Brand >
        <Link to="/informasi" className="navbar1" >
              <button>
                <h1>FLORIST</h1>
              </button>
              </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            
            <Link to="/" className="nav-link">
            <button>
  <div class="default-btn">
    <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFF" height="20" width="20" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle r="3" cy="12" cx="12"></circle></svg>
    <span>Mau Bunga?</span>
  </div>
  <div class="hover-btn">
    <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#ffd300" height="20" width="20" viewBox="0 0 24 24"><circle r="1" cy="21" cx="9"></circle><circle r="1" cy="21" cx="20"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
    <span>Belanja Sekarang</span>
  </div>
</button>
    </Link>

              <Link to="/informasi" className="nav-link" >
              <button>
  <div class="default-btn">
    <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFF" height="20" width="20" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle r="3" cy="12" cx="12"></circle></svg>
    <span>Ingin Tau?</span>
  </div>
  <div class="hover-btn">
    <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#ffd300" height="20" width="20" viewBox="0 0 24 24"><circle r="1" cy="21" cx="9"></circle><circle r="1" cy="21" cx="20"></circle></svg>
    <span>Buku Bunga</span>
  </div>
  
</button>
              </Link>
              

              <Link to="/akun" className="nav-link" >
                
              <button>
                
                
  <div class="default-btn">
    <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFF" height="20" width="20" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle r="3" cy="12" cx="12"></circle></svg>
    <span>Akun Anda</span>
  </div>
  <div class="hover-btn">
    <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#ffd300" height="20" width="20" viewBox="0 0 24 24"><circle r="1" cy="21" cx="9"></circle><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle r="1" cy="21" cx="20"></circle></svg>
    <span>Periksa</span>
  </div>
</button>
              </Link>


              {isLoggedIn ? (
                <Link to="/login" className="nav-link"  onClick={handleLogout}>
                  <button>
  <div class="default-btn">
    <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFF" height="20" width="20" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle r="3" cy="12" cx="12"></circle></svg>
    <span>Keluar?</span>
  </div>
  <div class="hover-btn">
    <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#ffd300" height="20" width="20" viewBox="0 0 24 24"><circle r="1" cy="21" cx="9"></circle><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle r="1" cy="21" cx="20"></circle></svg>
    <span>Anda Yakin</span>
  </div>
</button>
                </Link>
              ) : (
                <Link to="/login" className="nav-link" >
                  <button>
  <div class="default-btn">
    <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFF" height="20" width="20" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle r="3" cy="12" cx="12"></circle></svg>
    <span>Fitur Lebih?</span>
  </div>
  <div class="hover-btn">
    <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#ffd300" height="20" width="20" viewBox="0 0 24 24"><circle r="1" cy="21" cx="9"></circle><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle r="1" cy="21" cx="20"></circle></svg>
    <span>Login Sekarang</span>
  </div>
</button>
                </Link>

                
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Route path="/informasi" component={Informasi} />

      {isLoggedIn ? (
        <div style={{ backgroundColor: 'lavenderblush' }}>
          <Container>
            <Switch>
              <Route path="/" exact>
                <h1 style={{ color: 'black', textAlign: 'center' }}>Toko Bunga</h1>
                <Row>
                  {dataBunga.map((bunga) => (
                    <Col key={bunga.id} md={4} className="mb-4">
                      <Card>
                        <Card.Img variant="top" src={bunga.gambar} alt={bunga.nama} />
                        <Card.Body>
                          <Card.Title>{bunga.nama}</Card.Title>
                          <Card.Text>Harga: Rp.{bunga.harga}</Card.Text>
                          <Button variant="primary" onClick={() => tambahKeKeranjang(bunga)}>
                            Add Item
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
                <div style={{ backgroundColor: 'grey', color: 'black' }}>
                  <h2 className="mt-5">Dompet</h2>
                  <h1>Rp.{saldoDompet}</h1>
                  <Form>
                    <Form.Group controlId="formDompet">
                      <Form.Label>Masukkan Jumlah Uang:</Form.Label>
                      <Row>
                        <Col>
                          <Form.Control
                            type="number"
                            placeholder="Jumlah Uang"
                            value={inputDompet}
                            onChange={(e) => setInputDompet(e.target.value)}
                          />
                        </Col>
                        <Col>
                          <Button
                            variant="primary"
                            onClick={() => setSaldoDompet(saldoDompet + parseFloat(inputDompet))}
                          >
                            Tambah Dompet
                          </Button>
                        </Col>
                      </Row>
                    </Form.Group>
                  </Form>
                  <div style={{ backgroundColor: 'lavender', color: 'black' }}>
                    <h2 className="mt-5">Keranjang</h2>
                    {keranjang.length === 0 ? (
                      <p>Keranjang kosong</p>
                    ) : (
                      <>
                        <ul>
                          {keranjang.map((item, index) => (
                            <li key={index}>
                              {item.nama} - Rp.{item.harga}
                              <Button variant="danger" onClick={() => handleRemoveItem(index)}>
                                Delete
                              </Button>
                            </li>
                          ))}
                        </ul>
                        <p>Total Harga: {totalHarga}</p>
                        <Button variant="success" onClick={prosesPembelian}>
                          Pay
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </Route>
              <Route path="/akun" component={Akun} />
            </Switch>
          </Container>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}

      {/* Footer */}
    </Router>
  );
}

export default App;
