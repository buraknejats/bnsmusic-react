import style from "../style.css";
import Header from "./Header"



export default function Product() {

    return (
        <div>
            <Header />


            <div class="aletler">
                <div><img class="gitar" src="./pngwing.com.png" alt="Gitar"></img><h3 className="tittle">Fender Strat Elektro Gitar </h3> <h4 className="tittle">5900₺ </h4>  <button className="satınal" >Sepete Ekle</button> </div>
                <div ><img class="bateri" src="./bateri-drum.png" alt="Davul"></img><h3 className="tittle">Yamaha Bateri</h3><h4 className="tittle">6500₺ </h4><button className="satınal">Sepete Ekle</button></div>
<div ><img class="keman" src="./viola.png" alt="Keman"></img><h3 className="tittle">Keman</h3><h4 className="tittle">5900₺ </h4><button className="satınal">Sepete Ekle</button> </div>
                <div ><img class="piyano" src="./piyano.png" alt="Piyano"></img><h3 className="tittle">Piyano</h3><h4 className="tittle">7700₺ </h4><button className="satınal">Sepete Ekle</button></div>
                <div ><img class="akustik" src="./akustik.png" alt="Akustik Gitar"></img><h3 className="tittle"> Akustik Gitar</h3><h4 className="tittle">2300₺ </h4><button className="satınal">Sepete Ekle</button></div>
            </div>
        </div>
    )
};