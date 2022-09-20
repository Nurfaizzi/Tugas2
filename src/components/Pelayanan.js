import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const Pelayanan = () => {
  return (
    <div>
        <h1>Pelayanan Ambulance</h1>
        <col className='Pelayanan' id='Pelayanan'></col>
        <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//107/MTA-8724986/peti_bakti_peti_jenazah_-_peti_mati_-_coffin_-_casket_mb_scania_full02_cmaab89p.jpg" height="55%"/>
        <Card.Body>
          <Card.Title>Penjualan Peti</Card.Title>
          <Card.Text>
            Menjual Berbagai Macam Peti Jenazah Perjamuan/Standar Cargo Untuk Keperluan Pengiriman Melalui Udara
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://lh3.googleusercontent.com/p/AF1QipPDc7wPRj8lOkZHP6M3FxY0su2OvoMmp92R-u-J=w600-h0" height="55%"/>
        <Card.Body>
          <Card.Title>Rumah Duka</Card.Title>
          <Card.Text>
            Menyediakan Rumah Duka atau Persayaman Untuk Keperluan Ibadah{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i.ytimg.com/vi/6qV-_fzbTPQ/maxresdefault.jpg"height="55%" />
        <Card.Body>
          <Card.Title>Pemakaman</Card.Title>
          <Card.Text>
            Kami Menyediakan Pelayanan Pemakaman Yang meliputi Rukti,Sampai Ke pemakaman
        
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
    </CardGroup>

    <CardGroup>
    <Card>
      <Card.Img variant="top" src="https://cdn.timesmedia.co.id/images/2020/10/13/TPU.jpg" height="55%"></Card.Img>
      <Card.Body>
        <Card.Title>Kremasi</Card.Title>
        <Card.Text>
          Menyedikan Paket Kremasi Jenazah
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/285804176_5468864359843226_5034348086795388639_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=kyVrt1VwVbIAX_41HvI&_nc_ht=scontent-sin6-3.xx&oh=00_AT9jOlS78lgb1mDD9lfI0sZcaM--z5TPJwVQ6wG7azbvYg&oe=632FCAB8" height="55%"></Card.Img>
      <Card.Body>
        <Card.Title>Pelayanan Pengantaran Pasien Control</Card.Title>
        <Card.Text>
          Melayani Pengantaran Pasien Control Dari rumah Ke Rumah sakit
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="https://lh3.googleusercontent.com/p/AF1QipNAMYsZEqMXGIvqJaRKx8xEda50bZyr2xOj-RE1=w768-h768-n-o-v1" height="55%" />
      <Card.Body>
        <Card.Title>Crew</Card.Title>
        <Card.Text>
          Tentunya Dengan Crew Yang Sigap Dalam Penanganan Kedaruratan atau PPGD 
      
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
  </CardGroup>
    </div>
  )
}
  

export default Pelayanan