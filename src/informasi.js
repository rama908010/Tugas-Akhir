import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './like.css';

const Informasi = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = document.querySelectorAll('.item');

    items.forEach((item) => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none none',
        },
        '--innerTrack': '1fr',
        duration: 0.3,
        overwrite: true,
      });
    });
  }, []);

  return (
    <div style={{ backgroundImage: 'url("/images/f2.jpeg")', backgroundSize: 'cover' }}>
      <Container style={{ color: 'white' }}>
        <h2>Informasi</h2>

        
        <Row>
        <Col md={4} className="mb-4" >
            <Card className="p">
              <Card.Img
                variant="top"
                src="/images/freeseas.webp" 
                alt="Story 1"
              />
              <Card.Body>
                <Card.Title>Bunga Freesias</Card.Title>
                <Card.Text>
                Nama Ilmiah: Freesia merupakan anggota keluarga Iridaceae, dan nama ilmiahnya adalah Freesia.

Asal Usul: Bunga freesia berasal dari Afrika Selatan, dan nama genusnya diambil dari ahli botani Jerman, Friedrich Heinrich Theodor Freese.

Deskripsi Fisik: Freesia memiliki bunga yang berbentuk lonceng, dan terdapat dalam berbagai warna seperti putih, kuning, merah muda, ungu, dan oranye. Aroma yang kuat dan harum menjadi salah satu daya tarik utama freesias.

Penggunaan: Freesias sering digunakan sebagai bunga hias dalam rangkaian bunga, karangan bunga, dan dekorasi. Aroma harumnya juga membuat freesias menjadi pilihan populer dalam industri parfum.

Perawatan: Freesias dapat tumbuh baik di kebun atau dalam pot. Mereka memerlukan sinar matahari yang cukup, tanah yang baik drainase, dan penyiraman yang cukup.

Musim Berbunga: Freesias biasanya mekar pada musim semi hingga awal musim panas, tergantung pada kondisi iklim setempat.
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4} className="mb-4">
            <Card className="p">
              <Card.Img
                variant="top"
                src="/images/gardenias.webp" 
                alt="Story 1"
              />
              <Card.Body>
                <Card.Title>Bunga Gardenias</Card.Title>
                <Card.Text>
                Nama Ilmiah: Genus gardenia termasuk dalam keluarga Rubiaceae dan memiliki beberapa spesies, di antaranya adalah Gardenia jasminoides, yang paling umum ditemui sebagai tanaman hias.

Asal Usul: Tanaman ini berasal dari wilayah tropis dan subtropis di Asia, Afrika, Madagaskar, dan Pasifik Selatan.

Deskripsi Fisik: Gardenia memiliki daun yang mengkilap, berwarna hijau gelap, dan bunganya berbentuk seperti mawar dengan kelopak putih atau kuning krim. Aroma bunganya sangat harum dan kuat.

Penggunaan: Gardenia sering ditanam sebagai tanaman hias dalam pot atau di kebun. Bunga-bunga mereka sering digunakan dalam rangkaian bunga dan karangan bunga, serta dalam industri parfum.

Perawatan: Gardenia memerlukan perawatan khusus untuk tumbuh dengan baik. Mereka menyukai tanah yang asam, penyiraman yang konsisten, dan lingkungan yang lembab. Tanaman ini biasanya ditempatkan di tempat yang teduh sebagian atau terhindar dari sinar matahari langsung.

Musim Berbunga: Gardenia mekar pada musim panas dan awal musim gugur, menghasilkan bunga yang indah dan harum.
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="p">
              <Card.Img
                variant="top"
                src="/images/hydrangeas.webp" 
                alt="Story 1"
              />
              <Card.Body>
                <Card.Title>Bunga Hydrangeas</Card.Title>
                <Card.Text>
                Nama Ilmiah: Hydrangea termasuk dalam genus Hydrangea, dan ada berbagai spesies dan kultivar di dalamnya.

Asal Usul: Hydrangea berasal dari Asia dan Amerika Utara. Mereka dapat ditemukan di berbagai iklim, dari daerah subtropis hingga iklim yang lebih dingin.

Deskripsi Fisik: Tanaman hydrangea memiliki daun-daun yang besar dan bunganya yang khas. Bunga hydrangea dapat bervariasi dalam warna, termasuk putih, merah muda, biru, ungu, dan kombinasi warna lainnya. Warna bunga hydrangea dapat dipengaruhi oleh keasaman tanah.

Penggunaan: Hydrangea sering digunakan sebagai tanaman hias di taman dan pekarangan. Bunganya yang besar dan tahan lama membuatnya populer dalam karangan bunga potong. Beberapa varietas hydrangea juga ditanam dalam pot dan dapat dibudidayakan sebagai tanaman hias dalam ruangan.

Perawatan: Perawatan hydrangea melibatkan penyiraman yang cukup, tanah yang subur, dan pemangkasan yang tepat. Beberapa varietas hydrangea memerlukan tanah yang asam untuk menghasilkan bunga berwarna biru.

Musim Berbunga: Hydrangea biasanya mekar di musim panas hingga awal musim gugur, meskipun waktu berbunga dapat bervariasi tergantung pada varietasnya.


                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="p">
              <Card.Img
                variant="top"
                src="/images/lily.webp" 
                alt="Story 1"
              />
              <Card.Body>
                <Card.Title>Bunga Lily</Card.Title>
                <Card.Text>
                Nama Ilmiah: Genus yang umumnya disebut sebagai "lily" adalah Lilium. Ada juga beberapa spesies lily yang masuk ke dalam genus lain.

Asal Usul: Lilies berasal dari berbagai wilayah di seluruh belahan bumi, termasuk Eropa, Asia, dan Amerika Utara. Mereka dapat tumbuh di berbagai kondisi iklim, dari daerah subtropis hingga daerah yang lebih dingin.

Deskripsi Fisik: Tanaman lily dikenal karena bunganya yang besar dan menarik. Bunga lily memiliki enam tepal (sepals dan petals) dan seringkali memiliki warna yang mencolok. Beberapa varietas lily memiliki aroma yang kuat dan khas.

Penggunaan: Lily adalah tanaman hias yang populer dan sering digunakan dalam karangan bunga, pot bunga, dan taman. Mereka juga dapat dijadikan tanaman pot untuk dekorasi dalam ruangan.

Perawatan: Lily biasanya memerlukan tanah yang baik drainase, sinar matahari yang cukup, dan penyiraman yang teratur. Beberapa varietas lily tumbuh dari umbi, sementara yang lain tumbuh dari biji.

Musim Berbunga: Waktu berbunga lily bervariasi tergantung pada jenisnya. Sebagian besar varietas mekar di musim panas.
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="p">
              <Card.Img
                variant="top"
                src="/images/lotus.webp" 
                alt="Story 1"
              />
              <Card.Body>
                <Card.Title>Bunga Lotus</Card.Title>
                <Card.Text>
                Nama Ilmiah: Genus lotus mencakup beberapa spesies, dan yang paling terkenal adalah Nelumbo nucifera.

Asal Usul: Lotus berasal dari Asia dan Afrika Utara. Mereka tumbuh di perairan yang tenang seperti danau, kolam, dan rawa-rawa.

Deskripsi Fisik: Tanaman lotus memiliki daun besar yang mengapung di permukaan air dan bunga yang dapat mencapai diameter beberapa inci. Bunganya biasanya berwarna putih atau merah muda, dan sering kali disertai dengan buah yang berlubang-lubang yang khas.

Makna Budaya: Lotus memiliki makna penting dalam budaya banyak negara. Di beberapa budaya Asia, lotus dianggap sebagai simbol kecantikan, kemurnian, dan pencerahan spiritual. Bunga ini juga sering dikaitkan dengan simbolisme kehidupan baru dan kebangkitan karena kemampuannya untuk tumbuh dari lumpur dan muncul ke permukaan air.

Penggunaan: Selain nilai simboliknya, lotus juga memiliki kegunaan praktis. Beberapa bagian tanaman ini, seperti biji dan akarnya, digunakan dalam masakan tradisional di beberapa negara. Selain itu, lotus sering ditanam sebagai tanaman hias di taman air.

Perawatan: Lotus memerlukan air yang tenang, sinar matahari yang cukup, dan tanah yang subur. Mereka dapat ditanam di dalam pot atau di kolam dengan air yang cukup dalam.

Keberlanjutan: Lotus merupakan tanaman yang tangguh dan dapat tumbuh dengan baik di lingkungan yang sesuai. Mereka sering digunakan dalam proyek pengendalian pencemaran air karena kemampuannya untuk menyerap zat-zat yang tidak diinginkan dari air.
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="p">
              <Card.Img
                variant="top"
                src="/images/morningglory.webp" 
                alt="Story 1"
              />
              <Card.Body>
                <Card.Title>Bunga Morning Glory</Card.Title>
                <Card.Text>
                Nama Ilmiah: Morning glory biasanya merujuk pada genus Ipomoea, yang termasuk dalam keluarga Convolvulaceae. Ada berbagai spesies dan kultivar morning glory.

Asal Usul: Morning glory berasal dari Amerika Tengah dan Amerika Selatan, tetapi sekarang telah menyebar ke berbagai wilayah di seluruh dunia.

Deskripsi Fisik: Tanaman morning glory adalah tanaman merambat dengan daun berbentuk hati. Bunganya bervariasi dalam warna, termasuk putih, merah muda, biru, ungu, dan merah. Satu ciri khas morning glory adalah bunga-bunganya yang mekar di pagi hari dan sering kali tutup ketika matahari sudah tinggi.

Penggunaan: Morning glory sering digunakan sebagai tanaman hias pagar, dan mereka dapat merambat dan melilit di pagar atau struktur lainnya. Mereka juga bisa ditanam dalam pot atau keranjang gantung.

Perawatan: Morning glory umumnya tumbuh baik di tempat dengan sinar matahari penuh dan tanah yang subur dengan drainase baik. Mereka juga dapat tumbuh dengan baik dalam pot dengan dukungan vertikal untuk merambat.

Musim Berbunga: Morning glory mekar selama musim panas hingga awal musim gugur. Bunganya umumnya cukup besar dan menarik perhatian.

Keterkaitan Budaya: Morning glory sering dikaitkan dengan simbolisme seperti keindahan, cinta, dan keberlanjutan hidup. Di beberapa budaya, tanaman ini dapat memiliki makna atau nilai simbolis tertentu.

Catatan Penting: Beberapa varietas morning glory dapat menjadi invasif di beberapa wilayah dan bersifat agresif. Oleh karena itu, penting untuk memantau pertumbuhan mereka agar tidak menggantikan tanaman asli.
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
      </Container>

      <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <p>Email: firdausrama@gmail.com</p>
            <p>Phone: +62 8813269081</p>
          </div>
          <div className="col-md-6">
            <h5>Follow Us</h5>
            <ul className="list-inline social-icons">
              <li className="list-inline-item">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">© 2024 Your Company. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>

  );
};

export default Informasi;