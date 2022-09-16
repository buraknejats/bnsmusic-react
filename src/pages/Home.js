import Header from "./Header"


export default function Home() {

    return(

        <div>
<body>


  <Header/>

    <h1 className="h1">Müzik Dükkanım</h1>


<h2 className="h2">Ana Sayfa</h2>
<p className="p">BNS Müzik Dükkanı'na hoş geldiniz! Burada çeşitli müzik aletlerini bulabilirsiniz. Ürünlerimizi satın almak için <a href="./products.js">buraya </a> tıklayabilirsiniz. Satın almadan önce müzik aletini denemek için hakkımızda bölümündeki adresten bizlere ulaşabilirsiniz. Müzikle Kalın! </p>

<h3 className="h3">Sitemizde Bulunan Müzik Aletleri;</h3>

<ul className="list">
    <li> Gitar</li>
    <li>Davul</li>
    <li>Piyano</li>
    <li>Keman</li>
</ul>

</body>
        </div>
   
    )
};