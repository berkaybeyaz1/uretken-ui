import React, { Component, Fragment } from "react";
import "../content/content.css";

const Svg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="15"
      viewBox="0 0 21 15"
    >
      <path
        fill="#212924"
        d="M20.181 1.288C19.423.373 18.024 0 15.351 0H5.65C2.915 0 1.49.397.736 1.37 0 2.32 0 3.72 0 5.656v3.69C0 13.095.874 15 5.649 15h9.702c2.318 0 3.602-.33 4.433-1.136.852-.828 1.216-2.18 1.216-4.519v-3.69c0-2.042-.057-3.449-.819-4.367zm-6.699 6.721l-4.406 2.338a.669.669 0 0 1-.664-.022.69.69 0 0 1-.327-.588V5.078a.69.69 0 0 1 .326-.588.669.669 0 0 1 .664-.022L13.48 6.79a.689.689 0 0 1 .365.61c0 .256-.14.49-.364.61z"
      />
    </svg>
  );
};

export default class Content extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Ders: {this.props.ders}</h1>
              <h1>Konu: {this.props.konu}</h1>
            </div>
            <div className="col-12">
              <div className="education">
                <div className="education__head">
                  <ul className="education__head__ul">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="18"
                        viewBox="0 0 11 18"
                      >
                        <path
                          fill="#3F60E8"
                          d="M3.528 8.929l6.687-6.678a.967.967 0 0 0 .285-.69.968.968 0 0 0-.285-.69L9.629.284A.97.97 0 0 0 8.937 0a.97.97 0 0 0-.69.285L.284 8.236A.968.968 0 0 0 0 8.928c0 .263.1.51.285.694l7.954 7.943a.97.97 0 0 0 .691.285.97.97 0 0 0 .691-.285l.586-.585c.381-.38.381-1 0-1.381l-6.679-6.67z"
                        />
                      </svg>
                      <span className="education__head__prev-next">Geri</span>
                    </li>
                    <li>
                      <Svg />
                    </li>
                    <li>
                      <Svg />
                    </li>
                    <li>
                      <Svg />
                    </li>
                    <li className="active">
                      <Svg />
                    </li>
                    <li>
                      <Svg />
                    </li>
                    <li>
                      <span className="education__head__prev-next">İleri</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="18"
                        viewBox="0 0 11 18"
                      >
                        <path
                          fill="#3F60E8"
                          d="M7.472 8.929L.785 2.25A.967.967 0 0 1 .5 1.56c0-.262.101-.507.285-.69l.586-.586A.97.97 0 0 1 2.063 0a.97.97 0 0 1 .69.285l7.962 7.951c.185.184.286.43.285.692 0 .263-.1.51-.285.694L2.76 17.565a.97.97 0 0 1-.691.285.97.97 0 0 1-.691-.285l-.586-.585a.977.977 0 0 1 0-1.381l6.679-6.67z"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
                <div className="education__content">
                  <h5 className="education__header">Fikir Nasıl Bulunur?</h5>
                  <span className="education__fav">Favorilere ekle</span>
                  <p>
                    Girişimcilik sürecine başlarken bir ürünle, projeyle yola
                    çıkacağız. Bu proje tam anlamıyla inandığınız, kendinizi ait
                    hissettiğiniz, geceleri uykularınızı kaçıracak türden bir
                    şey. Projeye gerçekten inancınız olmazsa aksiliklerle
                    karşılaştığınızda pes etmeniz şaşılmayacak bir durum olur.
                    Farklı bir bakış açısından bakarsak da bu tür cümleleri çok
                    sık duyarız. “Kod yazıcam, yazabiliyorum ancak ne yazacağımı
                    bilmiyorum. Aklımda fikir yok” Bu cümleleri kuran kişiler
                    girişimci olmak isteyip, teknik beceriye de sahip olup ilk
                    adımı atmada sıkıntı yaşayanlardır. Peki girişimciliğe
                    başlayacağız ama fikir nereden ve nasıl bulacağız?
                  </p>
                  <h6 className="education__sub-header">Kendi sorununu çöz:</h6>
                  <p>
                    Girişimcilik sorun çözmektir. Sorunu iyi tanıyıp ona uygun
                    çözümü üretmektir. En iyi kendi sorununuzu tanımlayabilir ve
                    ona uygun çözümü geliştirebilirsiniz. Örnek olarak Scode’da
                    bizim yaptığımız buydu. Yazılım öğrenmeye başladığımızdaki
                    önyargı bizi yavaşlatmıştı ve bunu nasıl çözeriz sorusu
                    Scode’u yarattı. Scode’u bizzat kendimiz test ederek
                    gelişimini sağladık. Tabi yalnızca kendinizde test etmek
                    hatadır.
                  </p>

                  <h6 className="education__sub-header">
                    Globaldeki projeleri Local’e, Türkiye’ye odaklamak:
                  </h6>
                  <p>
                    Girişimleri pazarlarına göre 2'ye ayırabiliriz. Local ve
                    Global. Büyük şirketler local pazardan daha çok global
                    pazara hitap eder. Çünkü local pazarlara hitap etmeleri için
                    fazladan organizasyon gücü kurmaları gerekir ve bunu bir
                    ihtiyaç olarak görmezler. Bu da diğer girişimciler için bir
                    fırsattır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
