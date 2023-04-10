import { H1Landing, PLanding } from "./styles/home-styles";
import { H1, H2, ImageGlobal } from "./styles/global.styles";

function Body() {
  return (
    <div className="row container-landing">
      <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xs-12">
        <div className="mb-3">
          <H1Landing>Buat Toko Online Kamu Gratis !</H1Landing>
        </div>

        <div className="mb-3">
          <PLanding>
            Tingkatkan penjualan kamu lebih luas dengan cara online, sebar link
            toko kamu lewat whatsapp, ig, facebook, twitter dll agar toko kamu
            dikenal dan dipercaya
          </PLanding>
        </div>
        {/* <div className='mb-3' >
       <H2 position='center' >
          Toko OK
        “Toko Online Kamu”
       </H2>
       </div> */}
        <div className="text-center">
          <ImageGlobal className="landing-googlelay" src={"/gplay.png"} />
        </div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xs-12 text-center">
        <ImageGlobal className="toko-landing" src={"/gambar-toko.png"} />
      </div>
    </div>
  );
}
export default Body;
